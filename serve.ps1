$ErrorActionPreference = "Stop"
$root = [IO.Path]::GetFullPath((Split-Path -Parent $MyInvocation.MyCommand.Path))
if (-not $root.EndsWith([IO.Path]::DirectorySeparatorChar)) {
  $root = $root + [IO.Path]::DirectorySeparatorChar
}
$port = 8787

$listener = $null
try {
  $listener = [Net.Sockets.TcpListener]::new([Net.IPAddress]::Any, $port)
  $listener.Start()
} catch {
  Write-Host ""
  Write-Host "The register could not start. If it is already open, use the browser window."
  Write-Host $_.Exception.Message
  Start-Process "http://localhost:$port/"
  exit 1
}

$lanUrls = @()
try {
  $addresses = Get-NetIPAddress -AddressFamily IPv4 -ErrorAction SilentlyContinue |
    Where-Object { $_.IPAddress -notlike "127.*" -and $_.IPAddress -notlike "169.254.*" }
  foreach ($address in $addresses) { $lanUrls += "http://$($address.IPAddress):$port/" }
} catch {}

Start-Process "http://localhost:$port/"
Write-Host ""
Write-Host "Neurology OPD is open on this computer:"
Write-Host "  http://localhost:$port/"
if ($lanUrls.Count -gt 0) {
  Write-Host ""
  Write-Host "On your phone, use the same Wi-Fi, then open ONE of these in Chrome:"
  foreach ($url in $lanUrls) { Write-Host "  $url" }
  Write-Host "If Windows asks about a firewall, allow it on private networks."
}
Write-Host ""
Write-Host "Keep this window open while you use the register."
Write-Host "Close this window when you are finished."
Write-Host ""

$types = @{
  ".html" = "text/html; charset=utf-8"
  ".css" = "text/css; charset=utf-8"
  ".js" = "text/javascript; charset=utf-8"
  ".json" = "application/json"
  ".webmanifest" = "application/manifest+json"
  ".svg" = "image/svg+xml"
  ".png" = "image/png"
  ".txt" = "text/plain; charset=utf-8"
}

function Send-Response($stream, $status, $contentType, $body) {
  $header = "HTTP/1.1 $status`r`nContent-Type: $contentType`r`nContent-Length: $($body.Length)`r`nCache-Control: no-cache`r`nConnection: close`r`n`r`n"
  $headerBytes = [Text.Encoding]::ASCII.GetBytes($header)
  $stream.Write($headerBytes, 0, $headerBytes.Length)
  if ($body.Length -gt 0) { $stream.Write($body, 0, $body.Length) }
}

try {
  while ($true) {
    $client = $listener.AcceptTcpClient()
    try {
      $stream = $client.GetStream()
      $stream.ReadTimeout = 3000
      $buffer = New-Object byte[] 8192
      $read = 0
      try { $read = $stream.Read($buffer, 0, $buffer.Length) } catch { $read = 0 }
      if ($read -le 0) { continue }
      $request = [Text.Encoding]::ASCII.GetString($buffer, 0, $read)
      $line = ($request -split "`r`n", 2)[0]
      if ($line -notmatch '^GET\s+(\S+)') {
        $empty = [Text.Encoding]::ASCII.GetBytes("")
        Send-Response $stream "405 Method Not Allowed" "text/plain" $empty
        continue
      }
      $urlPath = ($Matches[1] -split '\?')[0]
      $urlPath = [Uri]::UnescapeDataString($urlPath)
      if ([string]::IsNullOrWhiteSpace($urlPath) -or $urlPath -eq "/") { $urlPath = "/index.html" }
      $relative = $urlPath.TrimStart("/").Replace("/", [IO.Path]::DirectorySeparatorChar)
      $full = [IO.Path]::GetFullPath((Join-Path $root $relative))
      if (-not $full.StartsWith($root) -or -not (Test-Path $full -PathType Leaf)) {
        Send-Response $stream "404 Not Found" "text/plain; charset=utf-8" ([Text.Encoding]::UTF8.GetBytes("Not found"))
        continue
      }
      $ext = [IO.Path]::GetExtension($full).ToLowerInvariant()
      $contentType = $types[$ext]
      if (-not $contentType) { $contentType = "application/octet-stream" }
      Send-Response $stream "200 OK" $contentType ([IO.File]::ReadAllBytes($full))
    } catch {
    } finally {
      try { $client.Close() } catch {}
    }
  }
} finally {
  if ($listener) { $listener.Stop() }
}
