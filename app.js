const STORAGE_KEY = "neuro-opd-v1";

const CATALOG = [
  { name: "Parkinson's disease", clinic: "movement", aliases: ["pd", "parkinson", "parkinsons", "parkinson disease", "parkinsons disease", "paralysis agitans", "pakinson"] },
  { name: "Parkinsonism, unspecified", clinic: "movement", aliases: ["parkinsonism"] },
  { name: "Vascular parkinsonism", clinic: "movement", aliases: ["vascular pd"] },
  { name: "Drug-induced parkinsonism", clinic: "movement", aliases: ["drug induced parkinsonism"] },
  { name: "Progressive supranuclear palsy", clinic: "movement", aliases: ["psp"] },
  { name: "Multiple system atrophy", clinic: "movement", aliases: ["msa"] },
  { name: "Corticobasal syndrome", clinic: "movement", aliases: ["cbs", "corticobasal degeneration", "cbd"] },
  { name: "Lewy body dementia", clinic: "movement", aliases: ["dementia with lewy bodies", "dlb"] },
  { name: "Essential tremor", clinic: "movement", aliases: ["et", "benign tremor", "familial tremor", "kampan", "kampak"] },
  { name: "Dystonia", clinic: "movement", aliases: ["dystonia unspecified"] },
  { name: "Cervical dystonia", clinic: "movement", aliases: ["spasmodic torticollis"] },
  { name: "Blepharospasm", clinic: "movement", aliases: [] },
  { name: "Hemifacial spasm", clinic: "movement", aliases: ["hfs"] },
  { name: "Chorea", clinic: "movement", aliases: [] },
  { name: "Huntington disease", clinic: "movement", aliases: ["huntingtons", "huntington's"] },
  { name: "Wilson disease", clinic: "movement", aliases: ["wilsons", "wilson's disease"] },
  { name: "Ataxia", clinic: "movement", aliases: ["cerebellar ataxia"] },
  { name: "Restless legs syndrome", clinic: "movement", aliases: ["rls"] },
  { name: "Tics / Tourette syndrome", clinic: "movement", aliases: ["tourette", "tics"] },
  { name: "Myoclonus", clinic: "movement", aliases: [] },
  { name: "Tardive dyskinesia", clinic: "movement", aliases: [] },
  { name: "Functional movement disorder", clinic: "movement", aliases: ["fmd"] },
  { name: "Normal pressure hydrocephalus", clinic: "movement", aliases: ["nph"] },
  { name: "Epilepsy, unspecified", clinic: "epilepsy", aliases: ["epilepsy", "mirgi", "fits", "seizure", "seizures", "daura"] },
  { name: "Focal epilepsy", clinic: "epilepsy", aliases: ["focal seizure", "focal seizures", "partial epilepsy", "partial seizure"] },
  { name: "Temporal lobe epilepsy", clinic: "epilepsy", aliases: ["tle"] },
  { name: "Generalized epilepsy", clinic: "epilepsy", aliases: ["gtcs", "generalised epilepsy", "generalized tonic clonic"] },
  { name: "Juvenile myoclonic epilepsy", clinic: "epilepsy", aliases: ["jme"] },
  { name: "Absence epilepsy", clinic: "epilepsy", aliases: ["absence seizure", "petit mal"] },
  { name: "New-onset seizure", clinic: "epilepsy", aliases: ["first seizure"] },
  { name: "Febrile seizure", clinic: "epilepsy", aliases: ["febrile seizures"] },
  { name: "Drug-resistant epilepsy", clinic: "epilepsy", aliases: ["refractory epilepsy", "dre"] },
  { name: "Post-stroke epilepsy", clinic: "epilepsy", aliases: [] },
  { name: "Psychogenic non-epileptic seizures", clinic: "epilepsy", aliases: ["pnes", "dissociative seizures", "non epileptic"] },
  { name: "Status epilepticus follow-up", clinic: "epilepsy", aliases: ["status epilepticus"] },
  { name: "Stroke", clinic: "other", aliases: ["cva", "brain stroke", "ischemic stroke", "hemorrhagic stroke", "hemiplegia", "lakwa"] },
  { name: "Transient ischemic attack", clinic: "other", aliases: ["tia", "mini stroke"] },
  { name: "Migraine", clinic: "other", aliases: ["migraine headache", "migraine"] },
  { name: "Tension-type headache", clinic: "other", aliases: ["tension headache", "headache"] },
  { name: "Peripheral neuropathy", clinic: "other", aliases: ["neuropathy", "diabetic neuropathy"] },
  { name: "Bell's palsy", clinic: "other", aliases: ["bells palsy", "bell palsy", "facial palsy"] },
  { name: "Multiple sclerosis", clinic: "other", aliases: ["ms"] },
  { name: "Myasthenia gravis", clinic: "other", aliases: ["mg", "myasthenia"] },
  { name: "Guillain-Barré syndrome", clinic: "other", aliases: ["gbs", "guillain barre", "guillain-barre"] },
  { name: "Dementia", clinic: "other", aliases: ["dementia"] },
  { name: "Alzheimer's disease", clinic: "other", aliases: ["alzheimer", "alzheimers"] },
  { name: "Motor neuron disease", clinic: "other", aliases: ["mnd", "als"] },
  { name: "Cervical spondylotic myelopathy", clinic: "other", aliases: ["cervical myelopathy", "csm"] },
  { name: "Lumbar radiculopathy", clinic: "other", aliases: ["sciatica", "radiculopathy"] },
  { name: "Vertigo", clinic: "other", aliases: ["chakkar", "giddiness", "bppv"] },
  { name: "Trigeminal neuralgia", clinic: "other", aliases: ["neuralgia"] },
  { name: "Carpal tunnel syndrome", clinic: "other", aliases: ["carpal tunnel", "cts"] },
  { name: "Meningitis follow-up", clinic: "other", aliases: ["meningitis"] },
  { name: "Encephalitis follow-up", clinic: "other", aliases: ["encephalitis"] },
  { name: "Brain tumor follow-up", clinic: "other", aliases: ["brain tumour", "brain tumor"] },
  { name: "Idiopathic intracranial hypertension", clinic: "other", aliases: ["iih", "pseudotumor cerebri"] },
  { name: "Optic neuritis", clinic: "other", aliases: [] },
  { name: "Myopathy", clinic: "other", aliases: [] },
  { name: "Other neurological disorder", clinic: "other", aliases: ["other neurology", "other neurological"] }
];

const EPILEPSY_TAGS = ["epilepsy", "seizure", "seizures", "fits", "mirgi", "daura"];
const SEIZURE_TYPES = ["Focal aware", "Focal impaired awareness", "Focal to bilateral tonic-clonic", "Generalized tonic-clonic", "Absence", "Myoclonic", "Atonic"];
const PHENO = ["Tremor", "Bradykinesia", "Rigidity", "Dystonia", "Chorea", "Myoclonus", "Tics", "Ataxia", "Gait disorder", "Hemifacial spasm"];
const MOVE_MEDS = ["Levodopa + Carbidopa", "Pramipexole", "Ropinirole", "Trihexyphenidyl", "Amantadine", "Rasagiline", "Propranolol", "Primidone", "Clonazepam", "Tetrabenazine", "Baclofen"];
const EPI_MEDS = ["Levetiracetam", "Sodium valproate", "Carbamazepine", "Oxcarbazepine", "Lamotrigine", "Phenytoin", "Clobazam", "Clonazepam", "Lacosamide", "Topiramate", "Brivaracetam"];
const OTHER_MEDS = ["Aspirin", "Clopidogrel", "Atorvastatin", "Amitriptyline", "Propranolol", "Sumatriptan", "Pregabalin", "Gabapentin", "Pyridostigmine", "Donepezil", "Carbamazepine", "Baclofen"];
const OTHER_PROBLEMS = ["Headache", "Weakness", "Numbness", "Speech problem", "Memory loss", "Dizziness", "Vision change", "Facial weakness"];

const DIGIT_WORDS = {
  zero: "0", oh: "0", o: "0", one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9",
  ek: "1", do: "2", teen: "3", tin: "3", char: "4", paanch: "5", panch: "5", chhe: "6", che: "6", saat: "7", sat: "7", aath: "8", ath: "8", nau: "9",
  shoonya: "0", sunna: "0"
};

let db = load();
let ui = { query: "", filter: "all", selectedId: null, editing: false, patientId: null, visitId: null, isNew: false };
let formSnapshot = "";
let recognition = null;
let listening = false;
let dictationTarget = null;
let bundleFinal = "";
let bundleTimer = 0;
let bundleOpen = false;
let toastTimer = 0;

function defaultSettings() {
  return { clinicName: "Neurology OPD", doctorName: "", lang: "en-IN", speakBack: false, tipsHidden: false };
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { settings: defaultSettings(), patients: [] };
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.patients)) throw new Error("bad");
    parsed.settings = Object.assign(defaultSettings(), parsed.settings || {});
    return parsed;
  } catch (error) {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) localStorage.setItem(STORAGE_KEY + "-unreadable", raw);
    return { settings: defaultSettings(), patients: [], loadError: true };
  }
}

function persist() {
  try {
    const copy = { settings: db.settings, patients: db.patients };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(copy));
  } catch (error) {
    toast("Could not save. Download a backup from Settings.");
  }
}

function uid() {
  if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
  return "id-" + Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function todayISO() {
  const n = new Date();
  return isoFromDate(n);
}

function isoFromDate(n) {
  const m = String(n.getMonth() + 1).padStart(2, "0");
  const d = String(n.getDate()).padStart(2, "0");
  return n.getFullYear() + "-" + m + "-" + d;
}

function shiftISO(days) {
  const n = new Date();
  n.setDate(n.getDate() + days);
  return isoFromDate(n);
}

function formatDate(iso) {
  if (!iso) return "";
  const parts = iso.split("-").map(Number);
  if (parts.length < 3 || parts.some((n) => !n && n !== 0)) return iso;
  const dt = new Date(parts[0], parts[1] - 1, parts[2]);
  return dt.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

function norm(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/['’.]/g, "")
    .replace(/[^a-z0-9\u0900-\u097F]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function digits(value) {
  return String(value || "").replace(/\D/g, "");
}

function phoneKey(value) {
  let d = digits(value);
  if (d.length >= 12 && d.startsWith("91")) d = d.slice(-10);
  if (d.length === 11 && d.startsWith("0")) d = d.slice(1);
  return d;
}

function clinicLabel(clinic) {
  if (clinic === "epilepsy") return "Epilepsy";
  if (clinic === "movement") return "Movement";
  if (clinic === "other") return "Other neurology";
  return "Visit";
}

function formatPhone(raw) {
  const d = digits(raw);
  if (d.length === 10) return d.slice(0, 5) + " " + d.slice(5);
  if (d.length === 12 && d.startsWith("91")) return "+91 " + d.slice(2, 7) + " " + d.slice(7);
  return String(raw || "").trim();
}

function telHref(raw) {
  const d = digits(raw);
  if (d.length === 10) return "+91" + d;
  if (d.length > 6) return "+" + d;
  return "";
}

function latestVisit(patient) {
  return (patient.visits && patient.visits[0]) || null;
}

function exactCatalogMatch(text) {
  const q = norm(text);
  if (!q) return null;
  return CATALOG.find((item) => norm(item.name) === q || item.aliases.some((alias) => norm(alias) === q)) || null;
}

function catalogForStored(diagnosis) {
  const q = norm(diagnosis);
  if (!q) return null;
  return CATALOG.find((item) => {
    const name = norm(item.name);
    if (name === q) return true;
    if (q.length > 5 && (name.includes(q) || q.includes(name))) return true;
    return item.aliases.some((alias) => norm(alias) === q);
  }) || null;
}

function diagnosisMatches(diagnosis, query) {
  const q = norm(query);
  const stored = norm(diagnosis);
  if (!q || !stored) return false;
  if (stored.includes(q)) return true;
  const item = catalogForStored(diagnosis);
  if (!item) return false;
  if (norm(item.name).includes(q)) return true;
  if (item.aliases.some((alias) => {
    const aliasNorm = norm(alias);
    if (aliasNorm.length <= 3) return aliasNorm === q;
    return aliasNorm === q || aliasNorm.includes(q) || q.includes(aliasNorm);
  })) return true;
  if (item.clinic === "epilepsy" && EPILEPSY_TAGS.some((tag) => tag === q)) return true;
  const spoken = exactCatalogMatch(query);
  if (spoken && norm(spoken.name) === norm(item.name)) return true;
  return false;
}

function passesFilter(patient) {
  const visit = latestVisit(patient);
  if (ui.filter === "all") return true;
  if (!visit) return false;
  if (ui.filter === "movement") return visit.clinic === "movement";
  if (ui.filter === "epilepsy") return visit.clinic === "epilepsy";
  if (ui.filter === "other") return visit.clinic === "other";
  if (ui.filter === "followup") return Boolean(visit.followUp) && visit.followUp <= todayISO();
  if (ui.filter === "today") return visit.date === todayISO() || visit.followUp === todayISO();
  return true;
}

function scorePatient(patient, query) {
  if (!query) return 1;
  const q = norm(query);
  let score = 0;
  const name = norm(patient.name);
  if (name.startsWith(q)) score = Math.max(score, 70);
  else if (q && name.includes(q)) score = Math.max(score, 50);
  const key = phoneKey(query);
  const storedPhone = phoneKey(patient.phone);
  if (key.length >= 4 && storedPhone && (storedPhone.includes(key) || key.includes(storedPhone))) score = Math.max(score, 90);
  if (q && norm(patient.opdNo).includes(q)) score = Math.max(score, 60);
  if (q && norm(patient.notes).includes(q)) score = Math.max(score, 24);
  for (const visit of patient.visits || []) {
    if (diagnosisMatches(visit.diagnosis, query)) score = Math.max(score, 100);
    else if (q && norm(visit.medicines).includes(q)) score = Math.max(score, 40);
    else if (q && norm(visit.complaint).includes(q)) score = Math.max(score, 30);
    else if (q && norm([visit.advice, visit.exam, visit.history, visit.seizureType, visit.phenomenology, visit.problem, visit.frequency, visit.lastEpisode].join(" ")).includes(q)) {
      score = Math.max(score, 20);
    }
  }
  return score;
}

function visiblePatients() {
  return db.patients
    .filter(passesFilter)
    .map((patient) => ({ patient, score: scorePatient(patient, ui.query.trim()) }))
    .filter((row) => row.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return (b.patient.updatedAt || "").localeCompare(a.patient.updatedAt || "");
    });
}

function el(tag, attrs, children) {
  const node = document.createElement(tag);
  Object.entries(attrs || {}).forEach(([key, value]) => {
    if (value == null || value === false) return;
    if (key === "class") node.className = value;
    else if (key === "text") node.textContent = value;
    else node.setAttribute(key, value);
  });
  (children || []).forEach((child) => {
    if (child == null || child === false) return;
    node.append(child.nodeType ? child : document.createTextNode(String(child)));
  });
  return node;
}

function toast(message) {
  const box = document.getElementById("toast");
  box.textContent = message;
  box.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => box.classList.remove("show"), 3200);
}

function speak(message) {
  if (!db.settings.speakBack || !window.speechSynthesis) return;
  const utter = new SpeechSynthesisUtterance(message);
  utter.lang = db.settings.lang || "en-IN";
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

function ask(message, yes, no) {
  const dialog = document.getElementById("confirmDialog");
  document.getElementById("confirmText").textContent = message;
  document.getElementById("confirmYes").textContent = yes || "Yes";
  document.getElementById("confirmNo").textContent = no || "No";
  dialog.hidden = false;
  return new Promise((resolve) => {
    let settled = false;
    const finish = (value) => {
      if (settled) return;
      settled = true;
      dialog.hidden = true;
      resolve(value);
    };
    document.getElementById("confirmYes").onclick = () => finish(true);
    document.getElementById("confirmNo").onclick = () => finish(false);
  });
}

function setMode(mode) {
  document.body.classList.remove("mode-list", "mode-patient", "mode-edit");
  document.body.classList.add(mode);
}

function renderShell() {
  document.getElementById("clinicName").textContent = db.settings.clinicName || "Neurology OPD";
  const primary = document.getElementById("primaryBtn");
  if (ui.editing) {
    setMode("mode-edit");
    primary.textContent = "Save";
  } else if (ui.selectedId) {
    setMode("mode-patient");
    primary.textContent = "Add visit";
  } else {
    setMode("mode-list");
    primary.textContent = "New patient";
  }
  document.getElementById("detailEmpty").hidden = Boolean(ui.selectedId) || ui.editing;
  document.getElementById("patientPane").hidden = ui.editing || !ui.selectedId;
  document.getElementById("editForm").hidden = !ui.editing;
}

function renderFilters() {
  const labels = [
    ["all", "All"],
    ["movement", "Movement"],
    ["epilepsy", "Epilepsy"],
    ["other", "Other neurology"],
    ["followup", "Follow-up due"],
    ["today", "Today"]
  ];
  const box = document.getElementById("filters");
  box.replaceChildren();
  labels.forEach(([id, label]) => {
    const button = el("button", { type: "button", "aria-pressed": ui.filter === id ? "true" : "false", text: label });
    button.addEventListener("click", () => {
      ui.filter = id;
      renderList();
    });
    box.append(button);
  });
}

function renderDxChips() {
  const box = document.getElementById("dxChips");
  box.replaceChildren();
  const counts = new Map();
  db.patients.forEach((patient) => {
    const name = (latestVisit(patient) || {}).diagnosis;
    if (!name) return;
    counts.set(name, (counts.get(name) || 0) + 1);
  });
  const chips = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8);
  const source = chips.length ? chips : [
    ["Parkinson's disease", 0],
    ["Essential tremor", 0],
    ["Focal epilepsy", 0],
    ["Stroke", 0],
    ["Migraine", 0]
  ];
  source.forEach(([name, count]) => {
    const button = el("button", { type: "button" }, [
      name,
      count ? " (" + count + ")" : ""
    ]);
    button.addEventListener("click", () => {
      document.getElementById("search").value = name;
      ui.query = name;
      ui.filter = "all";
      renderList();
    });
    box.append(button);
  });
}

function followLabel(visit) {
  if (!visit || !visit.followUp) return "";
  if (visit.followUp < todayISO()) return "Overdue " + formatDate(visit.followUp);
  if (visit.followUp === todayISO()) return "Due today";
  return "Review " + formatDate(visit.followUp);
}

function renderList() {
  renderShell();
  renderFilters();
  renderDxChips();
  const query = ui.query.trim();
  document.getElementById("clearSearch").hidden = !query;
  const rows = visiblePatients();
  const meta = document.getElementById("resultMeta");
  const phoneSearch = phoneKey(query).length >= 4 && norm(query).replace(/[0-9]/g, "").trim().length <= 1;
  if (!db.patients.length) meta.textContent = "Search by phone number or diagnosis";
  else if (query && phoneSearch) meta.textContent = rows.length + (rows.length === 1 ? " record with this phone number" : " records with this phone number");
  else if (query) meta.textContent = rows.length + (rows.length === 1 ? " record for this diagnosis" : " records for this diagnosis");
  else meta.textContent = rows.length + (rows.length === 1 ? " patient" : " patients");

  const list = document.getElementById("list");
  list.replaceChildren();
  const tip = document.getElementById("tip");
  if (!db.settings.tipsHidden && !ui.query) {
    tip.hidden = false;
    tip.replaceChildren(
      el("span", { text: "Phone numbers and diagnoses stay in this browser. They are not uploaded. Download a backup from Settings every week." }),
      el("button", { type: "button", class: "ghost", text: "Got it" })
    );
    tip.querySelector("button").addEventListener("click", () => {
      db.settings.tipsHidden = true;
      persist();
      tip.hidden = true;
    });
  } else tip.hidden = true;

  if (!rows.length) {
    const empty = el("div", { class: "empty" }, [
      el("p", { class: "kicker", text: query ? "No match" : "Empty register" }),
      el("h2", { text: query ? "No record found." : "No patients yet." }),
      el("p", { text: query
        ? "Check the phone number or the spelling of the diagnosis. Try Parkinson, stroke, migraine, or the last digits of the phone."
        : "Press Record patient details, or tap New patient. Then search later by phone number or diagnosis." })
    ]);
    if (!query && !db.patients.length) {
      const stack = el("div", { class: "stack" });
      const add = el("button", { type: "button", class: "solid", text: "New patient" });
      add.addEventListener("click", () => beginNewPatient());
      const practice = el("button", { type: "button", class: "ghost", text: "Try practice patients" });
      practice.addEventListener("click", () => addExamples());
      stack.append(add, practice);
      empty.append(stack);
    }
    list.append(empty);
    return;
  }

  rows.forEach(({ patient }) => {
    const visit = latestVisit(patient);
    const clinic = visit ? visit.clinic : "";
    const button = el("button", { type: "button", class: "card" + (patient.id === ui.selectedId ? " selected" : "") });
    const top = el("div", { class: "card-top" });
    const who = el("div", { class: "who" }, [
      el("span", { class: "badge", text: (patient.sex || "?").slice(0, 1) }),
      el("div", {}, [
        el("h3", { text: patient.name || "Unnamed" }),
        el("div", { class: "phone-line", text: patient.phone ? formatPhone(patient.phone) : "No phone number" })
      ])
    ]);
    top.append(who, el("span", { class: "sub", text: visit ? formatDate(visit.date) : "" }));
    button.append(top);
    if (visit && visit.diagnosis) {
      button.append(el("div", { class: "dx " + clinic, text: visit.diagnosis }));
    }
    const tags = el("div", { class: "tags" });
    if (clinic === "movement") tags.append(el("span", { class: "tag move", text: "Movement" }));
    if (clinic === "epilepsy") tags.append(el("span", { class: "tag epi", text: "Epilepsy" }));
    if (clinic === "other") tags.append(el("span", { class: "tag other", text: "Other neurology" }));
    if (!patient.phone) tags.append(el("span", { class: "tag warn", text: "No phone" }));
    if (visit && !visit.diagnosis) tags.append(el("span", { class: "tag warn", text: "No diagnosis" }));
    const due = followLabel(visit);
    if (due) tags.append(el("span", { class: "tag", text: due }));
    button.append(tags);
    button.addEventListener("click", () => openPatient(patient.id));
    list.append(button);
  });
}

function openPatient(id) {
  leaveEditor().then((ok) => {
    if (!ok) return;
    ui.selectedId = id;
    ui.editing = false;
    renderList();
    renderPatient();
    if (window.innerWidth < 960) window.scrollTo(0, 0);
  });
}

function renderPatient() {
  const pane = document.getElementById("patientPane");
  const patient = db.patients.find((item) => item.id === ui.selectedId);
  pane.replaceChildren();
  if (!patient) {
    pane.hidden = true;
    return;
  }
  const visit = latestVisit(patient);
  const head = el("div", { class: "form-head" }, [
    el("button", { type: "button", class: "ghost", id: "backToList", text: "Patients" }),
    el("h2", { text: patient.name || "Unnamed" }),
    el("button", { type: "button", class: "solid", id: "updateLatest", text: "Edit" })
  ]);
  pane.append(head);
  if (patient.phone) {
    const href = telHref(patient.phone);
    pane.append(el("a", { class: "patient-phone", href: "tel:" + href, text: formatPhone(patient.phone) }));
    const actions = el("div", { class: "patient-actions" });
    actions.append(linkButton("Call", "tel:" + href));
    actions.append(linkButton("Message", "sms:" + href));
    actions.append(linkButton("WhatsApp", "https://wa.me/" + href.replace("+", "")));
    const print = el("button", { type: "button", class: "ghost", text: "Print visit" });
    print.addEventListener("click", () => printVisit(patient, visit));
    actions.append(print);
    pane.append(actions);
  } else {
    pane.append(el("p", { class: "note", text: "No phone number yet. Tap Edit and add one." }));
  }
  const bits = [];
  if (patient.age) bits.push("Age " + patient.age);
  if (patient.sex) bits.push(patient.sex);
  if (patient.opdNo) bits.push("OPD " + patient.opdNo);
  if (bits.length) pane.append(el("p", { class: "sub", text: bits.join(" · ") }));
  if (patient.notes) pane.append(el("p", { class: "note", text: "Important: " + patient.notes }));
  if (patient.address) pane.append(el("p", { class: "sub", text: patient.address }));

  (patient.visits || []).forEach((item, index) => {
    const block = el("article", { class: "visit" });
    const label = clinicLabel(item.clinic) + " · " + formatDate(item.date);
    block.append(el("p", { class: "kicker", text: label }));
    block.append(el("h3", { text: item.diagnosis || "Diagnosis not written" }));
    if (item.complaint) block.append(el("p", { text: item.complaint }));
    if (item.seizureType) block.append(el("p", { text: "Seizure: " + item.seizureType }));
    if (item.frequency) block.append(el("p", { text: "Frequency: " + item.frequency }));
    if (item.lastEpisode) block.append(el("p", { text: "Last episode: " + item.lastEpisode }));
    if (item.phenomenology) block.append(el("p", { text: "Seen: " + item.phenomenology }));
    if (item.problem) block.append(el("p", { text: "Main problem: " + item.problem }));
    if (item.medicines) block.append(el("p", { text: "Medicines: " + item.medicines }));
    if (item.advice) block.append(el("p", { text: "Plan: " + item.advice }));
    if (item.history) block.append(el("p", { text: "History: " + item.history }));
    if (item.exam) block.append(el("p", { text: "Exam: " + item.exam }));
    if (item.followUp) block.append(el("p", { text: "Next visit: " + formatDate(item.followUp) }));
    const edit = el("button", { type: "button", class: "textish", text: index === 0 ? "Edit this visit" : "Edit older visit" });
    edit.addEventListener("click", () => beginEdit(patient.id, item.id, false));
    block.append(edit);
    pane.append(block);
  });

  const dangerRow = el("div", { class: "patient-actions" });
  const add = el("button", { type: "button", class: "solid", text: "Add follow-up visit" });
  add.addEventListener("click", () => beginFollowUp(patient.id));
  const remove = el("button", { type: "button", class: "danger", text: "Delete patient" });
  remove.addEventListener("click", () => deletePatient(patient.id));
  dangerRow.append(add, remove);
  pane.append(dangerRow);
  pane.hidden = false;

  document.getElementById("backToList").addEventListener("click", () => {
    ui.selectedId = null;
    renderList();
    renderPatient();
  });
  document.getElementById("updateLatest").addEventListener("click", () => {
    const current = latestVisit(patient);
    if (current) beginEdit(patient.id, current.id, false);
    else beginEdit(patient.id, null, false);
  });
}

function linkButton(label, href) {
  const attrs = { class: "ghost", href, text: label };
  if (href.startsWith("http")) {
    attrs.target = "_blank";
    attrs.rel = "noopener";
  }
  return el("a", attrs);
}

function blankVisit(from) {
  return {
    id: uid(),
    date: todayISO(),
    clinic: from ? from.clinic : "",
    diagnosis: from ? from.diagnosis : "",
    complaint: "",
    history: "",
    exam: "",
    medicines: from ? from.medicines : "",
    advice: "",
    followUp: "",
    seizureType: from ? from.seizureType : "",
    frequency: "",
    lastEpisode: "",
    phenomenology: from ? from.phenomenology : "",
    problem: from ? from.problem : ""
  };
}

function beginNewPatient() {
  return leaveEditor().then((ok) => {
    if (!ok) return false;
    ui.editing = true;
    ui.isNew = true;
    ui.patientId = uid();
    ui.visitId = uid();
    ui.selectedId = null;
    fillForm({
      name: "", age: "", sex: "", phone: "", opdNo: "", address: "", notes: "",
      visit: blankVisit(null)
    });
    document.getElementById("formTitle").textContent = "New patient";
    document.getElementById("copyNote").hidden = true;
    renderList();
    document.getElementById("f-name").focus();
    return true;
  });
}

function beginFollowUp(patientId) {
  const patient = db.patients.find((item) => item.id === patientId);
  if (!patient) return;
  const visit = blankVisit(latestVisit(patient));
  ui.editing = true;
  ui.isNew = false;
  ui.patientId = patient.id;
  ui.visitId = visit.id;
  ui.selectedId = patient.id;
  fillForm({ ...patient, visit });
  document.getElementById("formTitle").textContent = "Follow-up visit";
  document.getElementById("copyNote").hidden = false;
  renderList();
}

function beginEdit(patientId, visitId) {
  const patient = db.patients.find((item) => item.id === patientId);
  if (!patient) return;
  const visit = (patient.visits || []).find((item) => item.id === visitId) || blankVisit(null);
  ui.editing = true;
  ui.isNew = false;
  ui.patientId = patient.id;
  ui.visitId = visit.id;
  ui.selectedId = patient.id;
  fillForm({ ...patient, visit });
  document.getElementById("formTitle").textContent = "Edit visit";
  document.getElementById("copyNote").hidden = true;
  renderList();
}

function fillForm(data) {
  const visit = data.visit;
  setValue("f-name", data.name);
  setValue("f-age", data.age);
  setValue("f-phone", data.phone);
  setValue("f-opd", data.opdNo);
  setValue("f-address", data.address);
  setValue("f-notes", data.notes);
  setValue("f-date", visit.date || todayISO());
  setValue("f-diagnosis", visit.diagnosis);
  setValue("f-complaint", visit.complaint);
  setValue("f-seizure", visit.seizureType);
  setValue("f-frequency", visit.frequency);
  setValue("f-last", visit.lastEpisode);
  setValue("f-pheno", visit.phenomenology);
  setValue("f-problem", visit.problem);
  setValue("f-history", visit.history);
  setValue("f-exam", visit.exam);
  setValue("f-medicines", visit.medicines);
  setValue("f-advice", visit.advice);
  setValue("f-follow", visit.followUp);
  setSex(data.sex || "");
  setClinic(visit.clinic || "");
  const more = document.getElementById("moreDetails");
  more.open = Boolean(data.address || data.notes || visit.history || visit.exam);
  renderMedChips();
  renderCatalogPicker();
  formSnapshot = JSON.stringify(collectFields());
  document.getElementById("editForm").hidden = false;
}

function setValue(id, value) {
  const node = document.getElementById(id);
  if (node) node.value = value || "";
}

function collectFields() {
  return {
    name: valueOf("f-name"),
    age: valueOf("f-age"),
    sex: valueOf("f-sex"),
    phone: valueOf("f-phone"),
    opdNo: valueOf("f-opd"),
    address: valueOf("f-address"),
    notes: valueOf("f-notes"),
    visit: {
      id: ui.visitId,
      date: valueOf("f-date") || todayISO(),
      clinic: valueOf("f-clinic"),
      diagnosis: valueOf("f-diagnosis"),
      complaint: valueOf("f-complaint"),
      seizureType: valueOf("f-seizure"),
      frequency: valueOf("f-frequency"),
      lastEpisode: valueOf("f-last"),
      phenomenology: valueOf("f-pheno"),
      problem: valueOf("f-problem"),
      history: valueOf("f-history"),
      exam: valueOf("f-exam"),
      medicines: valueOf("f-medicines"),
      advice: valueOf("f-advice"),
      followUp: valueOf("f-follow")
    }
  };
}

function valueOf(id) {
  return (document.getElementById(id).value || "").trim();
}

function isDirty() {
  if (!ui.editing) return false;
  return JSON.stringify(collectFields()) !== formSnapshot;
}

function leaveEditor() {
  if (!ui.editing || !isDirty()) {
    ui.editing = false;
    return Promise.resolve(true);
  }
  return ask("Leave this visit without saving?", "Leave", "Stay").then((yes) => {
    if (yes) ui.editing = false;
    return yes;
  });
}

function setSex(sex) {
  document.getElementById("f-sex").value = sex;
  document.querySelectorAll("#sexButtons button").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.sex === sex ? "true" : "false");
  });
}

function setClinic(clinic) {
  document.getElementById("f-clinic").value = clinic;
  document.querySelectorAll("#clinicButtons button").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.clinic === clinic ? "true" : "false");
  });
  document.getElementById("epiFields").hidden = clinic !== "epilepsy";
  document.getElementById("moveFields").hidden = clinic !== "movement";
  document.getElementById("otherFields").hidden = clinic !== "other";
  renderMedChips();
}

function renderMedChips() {
  const clinic = valueOf("f-clinic");
  const meds = clinic === "epilepsy" ? EPI_MEDS : clinic === "movement" ? MOVE_MEDS : clinic === "other" ? OTHER_MEDS : MOVE_MEDS.concat(EPI_MEDS);
  fillChipBox(document.getElementById("medChips"), meds, (name) => appendLine("f-medicines", name));
  fillChipBox(document.getElementById("seizureChips"), SEIZURE_TYPES, (name) => appendComma("f-seizure", name));
  fillChipBox(document.getElementById("phenoChips"), PHENO, (name) => appendComma("f-pheno", name));
  fillChipBox(document.getElementById("problemChips"), OTHER_PROBLEMS, (name) => appendComma("f-problem", name));
}

function fillChipBox(box, names, onPick) {
  if (!box) return;
  box.replaceChildren();
  names.forEach((name) => {
    const button = el("button", { type: "button", text: name });
    button.addEventListener("click", () => onPick(name));
    box.append(button);
  });
}

function appendLine(id, text) {
  const node = document.getElementById(id);
  const current = node.value.trim();
  if (current.toLowerCase().includes(text.toLowerCase())) {
    toast(text + " is already written.");
    return;
  }
  node.value = current ? current + "\n" + text : text;
}

function appendComma(id, text) {
  const node = document.getElementById(id);
  const parts = node.value.split(",").map((part) => part.trim()).filter(Boolean);
  if (parts.some((part) => part.toLowerCase() === text.toLowerCase())) return;
  parts.push(text);
  node.value = parts.join(", ");
}

function renderCatalogPicker() {
  const box = document.getElementById("dxPicker");
  const list = document.getElementById("dxList");
  list.replaceChildren();
  CATALOG.forEach((item) => list.append(el("option", { value: item.name })));
  if (box.hidden) return;
  box.replaceChildren();
  const titles = { movement: "Movement disorders", epilepsy: "Epilepsy", other: "Other neurological disorders" };
  ["movement", "epilepsy", "other"].forEach((clinic) => {
    box.append(el("p", { class: "kicker", text: titles[clinic] }));
    const row = el("div", { class: "chips" });
    CATALOG.filter((item) => item.clinic === clinic).forEach((item) => {
      const button = el("button", { type: "button", text: item.name });
      button.addEventListener("click", () => applyDiagnosis(item));
      row.append(button);
    });
    box.append(row);
  });
}

function applyDiagnosis(item) {
  document.getElementById("f-diagnosis").value = item.name;
  setClinic(item.clinic);
  toast(item.name);
}

function flash(id) {
  const node = document.getElementById(id);
  node.classList.add("needs-attention");
  node.scrollIntoView({ behavior: "smooth", block: "center" });
  setTimeout(() => node.classList.remove("needs-attention"), 1600);
}

function saveForm() {
  const fields = collectFields();
  if (!fields.name) {
    flash("f-name");
    toast("Add the patient’s name, then save.");
    return;
  }
  const matched = exactCatalogMatch(fields.visit.diagnosis);
  if (matched) {
    fields.visit.diagnosis = matched.name;
    if (!fields.visit.clinic) fields.visit.clinic = matched.clinic;
    document.getElementById("f-diagnosis").value = matched.name;
    setClinic(fields.visit.clinic);
  }
  if (!fields.visit.clinic) {
    flash("clinicButtons");
    toast("Tap Movement disorder, Epilepsy, or Other neurology, then save.");
    return;
  }
  let patient = db.patients.find((item) => item.id === ui.patientId);
  if (!patient) {
    patient = { id: ui.patientId, createdAt: new Date().toISOString(), visits: [] };
    db.patients.unshift(patient);
  }
  patient.name = fields.name;
  patient.age = fields.age;
  patient.sex = fields.sex;
  patient.phone = fields.phone;
  patient.opdNo = fields.opdNo;
  patient.address = fields.address;
  patient.notes = fields.notes;
  patient.updatedAt = new Date().toISOString();
  const visits = patient.visits || [];
  const index = visits.findIndex((item) => item.id === fields.visit.id);
  if (index >= 0) visits[index] = fields.visit;
  else visits.unshift(fields.visit);
  visits.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  patient.visits = visits;
  let duplicate = "";
  const samePhone = digits(fields.phone);
  if (samePhone.length >= 8) {
    const other = db.patients.find((item) => item.id !== patient.id && digits(item.phone) === samePhone);
    if (other) duplicate = " This phone number is also saved for " + other.name + ".";
  }
  persist();
  formSnapshot = JSON.stringify(collectFields());
  ui.editing = false;
  ui.selectedId = patient.id;
  ui.isNew = false;
  const saved = "Saved " + patient.name + (fields.visit.diagnosis ? ", " + fields.visit.diagnosis : "");
  toast((fields.phone ? saved : "Saved without a phone number.") + duplicate);
  speak(saved);
  renderList();
  renderPatient();
}

function deletePatient(id) {
  const patient = db.patients.find((item) => item.id === id);
  if (!patient) return;
  ask("Delete " + patient.name + " and every visit? This cannot be undone.", "Delete", "Keep").then((yes) => {
    if (!yes) return;
    db.patients = db.patients.filter((item) => item.id !== id);
    persist();
    ui.selectedId = null;
    ui.editing = false;
    toast("Deleted " + patient.name);
    renderList();
    renderPatient();
  });
}

function addExamples() {
  const samples = [
    {
      id: "example-parkinson",
      name: "EXAMPLE — Asha Patel",
      age: "62",
      sex: "Female",
      phone: "9000000001",
      opdNo: "P-1",
      notes: "Practice record. Safe to delete.",
      visits: [{
        id: "example-parkinson-v",
        date: shiftISO(-40),
        clinic: "movement",
        diagnosis: "Parkinson's disease",
        complaint: "Slowness and right hand tremor",
        medicines: "Levodopa + Carbidopa 110 mg three times a day",
        phenomenology: "Tremor, Bradykinesia, Rigidity",
        advice: "Practice note only",
        followUp: shiftISO(-1)
      }]
    },
    {
      id: "example-jme",
      name: "EXAMPLE — Rohan Iyer",
      age: "17",
      sex: "Male",
      phone: "9000000002",
      opdNo: "P-2",
      notes: "Practice record. Safe to delete.",
      visits: [{
        id: "example-jme-v",
        date: todayISO(),
        clinic: "epilepsy",
        diagnosis: "Juvenile myoclonic epilepsy",
        complaint: "Morning jerks",
        medicines: "Levetiracetam 500 mg morning and night",
        seizureType: "Myoclonic",
        frequency: "Most mornings",
        advice: "Practice note only",
        followUp: shiftISO(30)
      }]
    },
    {
      id: "example-tremor",
      name: "EXAMPLE — Fatima Khan",
      age: "48",
      sex: "Female",
      phone: "9000000003",
      opdNo: "P-3",
      notes: "Practice record. Safe to delete.",
      visits: [{
        id: "example-tremor-v",
        date: shiftISO(-10),
        clinic: "movement",
        diagnosis: "Essential tremor",
        complaint: "Hand tremor while holding a cup",
        medicines: "Propranolol 40 mg morning and night",
        phenomenology: "Tremor",
        advice: "Practice note only",
        followUp: shiftISO(80)
      }]
    },
    {
      id: "example-stroke",
      name: "EXAMPLE — Lakshmi Behera",
      age: "58",
      sex: "Female",
      phone: "9000000004",
      opdNo: "Jajpur 21",
      notes: "Practice record. Safe to delete.",
      visits: [{
        id: "example-stroke-v",
        date: shiftISO(-3),
        clinic: "other",
        diagnosis: "Stroke",
        complaint: "Right hand weakness",
        problem: "Weakness",
        medicines: "Aspirin 75 mg morning",
        advice: "Practice note only",
        followUp: shiftISO(14)
      }]
    }
  ];
  let added = 0;
  samples.forEach((sample) => {
    if (db.patients.some((item) => item.id === sample.id)) return;
    sample.createdAt = new Date().toISOString();
    sample.updatedAt = sample.createdAt;
    db.patients.unshift(sample);
    added += 1;
  });
  persist();
  renderList();
  toast(added ? "Practice patients added. Search a diagnosis or a phone number." : "Practice patients are already in the list.");
}

function removeExamples() {
  const before = db.patients.length;
  db.patients = db.patients.filter((item) => !String(item.id).startsWith("example-"));
  persist();
  if (ui.selectedId && String(ui.selectedId).startsWith("example-")) ui.selectedId = null;
  renderList();
  renderPatient();
  toast(before === db.patients.length ? "No practice patients to remove." : "Practice patients removed.");
}

function download(filename, text, type) {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function backup() {
  const payload = {
    app: "Neurology OPD",
    exportedAt: new Date().toISOString(),
    settings: db.settings,
    patients: db.patients
  };
  download("neurology-opd-backup-" + todayISO() + ".json", JSON.stringify(payload, null, 2), "application/json");
  toast("Backup downloaded. Keep that file safe.");
}

function exportPhoneList() {
  const lines = ["Name\tPhone\tDiagnosis\tClinic\tLast visit"];
  db.patients.forEach((patient) => {
    const visit = latestVisit(patient) || {};
    lines.push([patient.name, formatPhone(patient.phone), visit.diagnosis || "", visit.clinic || "", visit.date || ""].join("\t"));
  });
  download("neurology-opd-phone-list-" + todayISO() + ".txt", lines.join("\n"), "text/plain");
  toast("Phone list downloaded.");
}

function restoreFromText(text) {
  let parsed;
  try { parsed = JSON.parse(text); } catch (error) {
    toast("That file is not a backup from this register.");
    return;
  }
  const patients = Array.isArray(parsed) ? parsed : parsed.patients;
  if (!Array.isArray(patients)) {
    toast("That file has no patient list.");
    return;
  }
  const clean = patients.filter((item) => item && item.id && item.name).map((item) => ({
    id: String(item.id),
    name: String(item.name || ""),
    age: String(item.age || ""),
    sex: String(item.sex || ""),
    phone: String(item.phone || ""),
    opdNo: String(item.opdNo || ""),
    address: String(item.address || ""),
    notes: String(item.notes || ""),
    createdAt: item.createdAt || new Date().toISOString(),
    updatedAt: item.updatedAt || new Date().toISOString(),
    visits: Array.isArray(item.visits) ? item.visits : []
  }));
  ask("Replace everyone on this device with the " + clean.length + " patients in this file?", "Replace", "Cancel").then((yes) => {
    if (!yes) return;
    db.patients = clean;
    if (parsed.settings) db.settings = Object.assign(defaultSettings(), parsed.settings);
    persist();
    ui.selectedId = null;
    ui.editing = false;
    renderList();
    renderPatient();
    toast("Backup restored.");
  });
}

function printVisit(patient, visit) {
  const sheet = document.getElementById("printSheet");
  const rows = [
    [db.settings.clinicName || "Neurology OPD", ""],
    [db.settings.doctorName || "", ""],
    [patient.name, formatPhone(patient.phone)],
    [(patient.age ? "Age " + patient.age : "") + (patient.sex ? " · " + patient.sex : ""), patient.opdNo ? "OPD " + patient.opdNo : ""],
    ["Visit " + formatDate(visit && visit.date), clinicLabel(visit && visit.clinic)]
  ];
  sheet.replaceChildren(el("h1", { text: rows[0][0] }));
  if (db.settings.doctorName) sheet.append(el("p", { text: db.settings.doctorName }));
  sheet.append(el("h2", { text: patient.name }));
  sheet.append(el("p", { text: "Phone: " + (formatPhone(patient.phone) || "—") }));
  if (visit) {
    sheet.append(el("p", { text: "Date: " + formatDate(visit.date) }));
    sheet.append(el("p", { text: "Diagnosis: " + (visit.diagnosis || "—") }));
    if (visit.complaint) sheet.append(el("p", { text: "Complaint: " + visit.complaint }));
    if (visit.medicines) sheet.append(el("p", { text: "Medicines:\n" + visit.medicines }));
    if (visit.advice) sheet.append(el("p", { text: "Advice: " + visit.advice }));
    if (visit.followUp) sheet.append(el("p", { text: "Next visit: " + formatDate(visit.followUp) }));
  }
  sheet.append(el("p", { text: "Signature" }));
  window.print();
}

function titleName(text) {
  return text.replace(/\s+/g, " ").trim().replace(/\b([a-z])/g, (letter) => letter.toUpperCase());
}

function extractPhone(text) {
  let out = "";
  String(text || "").toLowerCase().split(/[^a-z0-9\u0900-\u097F]+/).forEach((word) => {
    if (/^\d+$/.test(word)) out += word;
    else if (DIGIT_WORDS[word]) out += DIGIT_WORDS[word];
  });
  if (out.length === 12 && out.startsWith("91")) out = out.slice(2);
  if (out.length === 11 && out.startsWith("0")) out = out.slice(1);
  return out || digits(text);
}

function putField(id, text, mode) {
  const node = document.getElementById(id);
  if (!node) return;
  if (mode === "phone") node.value = formatPhone(extractPhone(text)) || text.trim();
  else if (mode === "age") node.value = (text.match(/\d+/) || [text.trim()])[0];
  else if (mode === "append") node.value = (node.value.trim() ? node.value.trim() + " " : "") + text.trim();
  else node.value = text.trim();
  node.dispatchEvent(new Event("change", { bubbles: true }));
}

function ensureEditingForVoice() {
  if (ui.editing) return Promise.resolve(true);
  return beginNewPatient();
}

function cleanSpokenValue(value) {
  let text = String(value || "").replace(/\s+/g, " ").trim();
  text = text.replace(/^(?:is|hai|:|,|and)\s+/i, "").trim();
  text = text.replace(/(?:[.,]\s*)?(?:and so on|and so forth|etcetera|etc)\.?$/i, "").trim();
  text = text.replace(/[.,]+$/g, "").trim();
  return text;
}

function parseBundle(text) {
  const source = String(text || "").replace(/\s+/g, " ").trim();
  const markers = [
    ["opd", /o\s*p\s*d(?:\s+number|\s+no)?/gi],
    ["phone", /(?:phone|mobile|फोन|मोबाइल)(?:\s+number)?/gi],
    ["name", /(?:patient\s+name|name|naam|नाम)/gi],
    ["age", /(?:age|umra|umr|उम्र)/gi],
    ["sex", /(?:sex|gender|ling)/gi],
    ["diagnosis", /(?:diagnosis|dx|nidan|निदान)/gi],
    ["complaint", /(?:complaint|complain)/gi],
    ["medicine", /(?:medicines|medicine|drugs|drug|dawai|दवा)/gi]
  ];
  const found = [];
  markers.forEach(([key, re]) => {
    let match;
    const pattern = new RegExp(re.source, re.flags);
    while ((match = pattern.exec(source))) {
      found.push({ key, start: match.index, end: match.index + match[0].length });
    }
  });
  found.sort((a, b) => a.start - b.start || (b.end - b.start) - (a.end - a.start));
  const kept = [];
  let cursor = 0;
  found.forEach((hit) => {
    if (hit.start < cursor) return;
    kept.push(hit);
    cursor = hit.end;
  });
  const fields = {};
  kept.forEach((hit, index) => {
    const next = kept[index + 1] ? kept[index + 1].start : source.length;
    const value = cleanSpokenValue(source.slice(hit.end, next));
    if (value) fields[hit.key] = value;
  });
  return fields;
}

function sexFromSpeech(value) {
  const spoken = norm(value);
  if (/female|woman|girl|mahila|महिला|स्त्री/.test(spoken)) return "Female";
  if (/male|man|boy|purush|पुरुष/.test(spoken)) return "Male";
  if (spoken.startsWith("other")) return "Other";
  return "";
}

function applyBundleFields(fields) {
  const task = ui.editing ? Promise.resolve(true) : beginNewPatient();
  return task.then((ok) => {
    if (!ok) return;
    const filled = [];
    if (fields.name) {
      putField("f-name", titleName(fields.name), "replace");
      filled.push("name");
    }
    if (fields.age) {
      putField("f-age", fields.age, "age");
      filled.push("age");
    }
    const sex = fields.sex ? sexFromSpeech(fields.sex) : "";
    if (sex) {
      setSex(sex);
      filled.push("sex");
    }
    if (fields.opd) {
      putField("f-opd", titleName(fields.opd), "replace");
      filled.push("OPD number");
    }
    if (fields.phone) {
      putField("f-phone", fields.phone, "phone");
      filled.push("phone");
    }
    if (fields.diagnosis) {
      const match = exactCatalogMatch(fields.diagnosis);
      if (match) applyDiagnosis(match);
      else {
        putField("f-diagnosis", fields.diagnosis, "replace");
        if (!valueOf("f-clinic")) setClinic("other");
      }
      filled.push("diagnosis");
    }
    if (fields.complaint) {
      putField("f-complaint", fields.complaint, "replace");
      filled.push("complaint");
    }
    if (fields.medicine) {
      putField("f-medicines", fields.medicine, "append");
      filled.push("medicine");
    }
    if (!filled.length) {
      toast("Say name, age, sex, OPD number, phone, and diagnosis in one sentence.");
      return;
    }
    toast("Filled " + filled.join(", ") + ". Check them, then tap Save.");
    document.getElementById("heard").textContent = "Heard: " + Object.values(fields).join(", ");
  });
}

function applyTranscript(raw) {
  const text = String(raw || "").replace(/\s+/g, " ").trim();
  if (!text) return;
  document.getElementById("heard").textContent = "Heard: " + text;
  if (dictationTarget && dictationTarget !== "bundle") {
    const mode = dictationTarget === "f-phone" ? "phone" : dictationTarget === "f-age" ? "age" : dictationTarget === "f-medicines" || dictationTarget === "f-complaint" || dictationTarget === "f-advice" || dictationTarget === "f-history" || dictationTarget === "f-exam" || dictationTarget === "f-notes" ? "append" : "replace";
    const writeDictation = () => {
      if (dictationTarget === "f-diagnosis") {
        const match = exactCatalogMatch(text);
        if (match) {
          applyDiagnosis(match);
          return;
        }
      }
      if (dictationTarget === "f-name") putField("f-name", titleName(text), "replace");
      else putField(dictationTarget, text, mode);
      toast("Added to the form. Tap Save when the visit is complete.");
    };
    if (dictationTarget === "search") {
      document.getElementById("search").value = text;
      ui.query = text;
      renderList();
      return;
    }
    if (!ui.editing) ensureEditingForVoice().then((ok) => { if (ok) writeDictation(); });
    else writeDictation();
    return;
  }

  const bundle = parseBundle(text);
  if (Object.keys(bundle).length >= 2) {
    applyBundleFields(bundle);
    return;
  }

  const heard = norm(text);
  if (/^(new patient|new visit|add patient|naya patient|naya mareez|नया मरीज|नया पेशेंट)$/.test(text.trim().toLowerCase()) || heard === "new patient" || heard === "naya patient") {
    beginNewPatient();
    toast("Ready for a new patient. Say the name.");
    return;
  }
  if (/^(save|save patient|save karo|सेव|सेव करो)$/.test(text.trim().toLowerCase()) || heard === "save" || heard === "save karo") {
    if (ui.editing) saveForm();
    else toast("Open a patient visit first, then say save.");
    return;
  }
  if (/^(go back|back|cancel|वापस)$/.test(text.trim().toLowerCase()) || heard === "go back" || heard === "back") {
    document.getElementById("cancelEdit").click();
    return;
  }
  if (/^(show all|all patients|clear search)$/.test(text.trim().toLowerCase()) || heard === "show all") {
    document.getElementById("search").value = "";
    ui.query = "";
    ui.filter = "all";
    ui.selectedId = null;
    renderList();
    renderPatient();
    return;
  }

  let match;
  if ((match = text.match(/^(?:search|find|look for|dhoondo|dhundo|khojo|खोजो|ढूंढो|सर्च)\s+(.+)$/i))) {
    if (ui.editing) {
      const diagnosis = exactCatalogMatch(match[1]);
      if (diagnosis) applyDiagnosis(diagnosis);
      else putField("f-diagnosis", match[1], "replace");
      toast("Put that in diagnosis. Save first, then you can search.");
      return;
    }
    document.getElementById("search").value = match[1];
    ui.query = match[1];
    ui.filter = "all";
    ui.selectedId = null;
    renderList();
    toast("Searching " + match[1]);
    return;
  }
  if ((match = text.match(/^(?:name|naam|patient name|नाम)\s+(?:is\s+|hai\s+)?(.+)$/i))) {
    ensureEditingForVoice().then(() => putField("f-name", titleName(match[1]), "replace"));
    return;
  }
  if ((match = text.match(/^(?:phone|mobile|number|fon|फोन|मोबाइल)\s+(?:is\s+|hai\s+|number\s+)?(.+)$/i))) {
    ensureEditingForVoice().then(() => putField("f-phone", match[1], "phone"));
    return;
  }
  if ((match = text.match(/^(?:age|umra|umr|उम्र)\s+(?:is\s+)?(.+)$/i))) {
    ensureEditingForVoice().then(() => putField("f-age", match[1], "age"));
    return;
  }
  if (/^(female|woman|girl|mahila|महिला|stri)$/.test(heard)) {
    ensureEditingForVoice().then(() => setSex("Female"));
    return;
  }
  if (/^(male|man|boy|purush|पुरुष)$/.test(heard)) {
    ensureEditingForVoice().then(() => setSex("Male"));
    return;
  }
  if (/^(other)$/.test(heard)) {
    ensureEditingForVoice().then(() => setSex("Other"));
    return;
  }
  if (ui.editing && /^(epilepsy clinic|epilepsy|mirgi|मिर्गी)$/.test(heard)) {
    setClinic("epilepsy");
    toast("Epilepsy clinic");
    return;
  }
  if (ui.editing && /^(movement clinic|movement disorder|movement)$/.test(heard)) {
    setClinic("movement");
    toast("Movement disorder clinic");
    return;
  }
  if (ui.editing && /^(other clinic|other neurology|other neurological disorder|other disorder)$/.test(heard)) {
    setClinic("other");
    toast("Other neurology");
    return;
  }
  if ((match = text.match(/^(?:diagnosis|dx|nidan|निदान|bimari|बीमारी)\s+(.+)$/i))) {
    ensureEditingForVoice().then(() => {
      const diagnosis = exactCatalogMatch(match[1]);
      if (diagnosis) applyDiagnosis(diagnosis);
      else putField("f-diagnosis", match[1], "replace");
    });
    return;
  }
  if ((match = text.match(/^(?:complaint|complain|shikayat)\s+(.+)$/i))) {
    ensureEditingForVoice().then(() => putField("f-complaint", match[1], "append"));
    return;
  }
  if ((match = text.match(/^(?:medicine|medicines|drug|drugs|dawai|dawa|दवा)\s+(.+)$/i))) {
    ensureEditingForVoice().then(() => putField("f-medicines", match[1], "append"));
    return;
  }
  if ((match = text.match(/^(?:advice|plan|treatment)\s+(.+)$/i))) {
    ensureEditingForVoice().then(() => putField("f-advice", match[1], "append"));
    return;
  }
  if ((match = text.match(/^follow up in (\d+)\s+(day|days|week|weeks|month|months)$/i))) {
    const amount = Number(match[1]);
    const unit = match[2].toLowerCase();
    const days = unit.startsWith("day") ? amount : unit.startsWith("week") ? amount * 7 : amount * 30;
    ensureEditingForVoice().then(() => { document.getElementById("f-follow").value = shiftISO(days); });
    return;
  }

  if (!ui.editing) {
    document.getElementById("search").value = text;
    ui.query = text;
    ui.filter = "all";
    renderList();
    toast("Searching “" + text + "”");
    return;
  }
  const active = document.activeElement;
  if (active && active.form && active.id) {
    putField(active.id, active.id === "f-name" ? titleName(text) : text, active.id === "f-phone" ? "phone" : "append");
    return;
  }
  const diagnosis = exactCatalogMatch(text);
  if (diagnosis) {
    applyDiagnosis(diagnosis);
    return;
  }
  putField("f-complaint", text, "append");
  toast("Added to today’s complaint.");
}

function speechEngine() {
  const Engine = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Engine) return null;
  if (!recognition) {
    recognition = new Engine();
    recognition.interimResults = true;
    recognition.continuous = false;
    recognition.onresult = (event) => {
      if (!listening && !bundleOpen) return;
      if (dictationTarget === "bundle" && bundleOpen) {
        let finalText = "";
        let interim = "";
        for (let i = 0; i < event.results.length; i += 1) {
          const bit = event.results[i][0].transcript;
          if (event.results[i].isFinal) finalText += (finalText ? " " : "") + bit.trim();
          else interim += bit;
        }
        bundleFinal = (finalText + " " + interim).replace(/\s+/g, " ").trim();
        document.getElementById("heard").textContent = "Heard: " + bundleFinal;
        clearTimeout(bundleTimer);
        bundleTimer = setTimeout(() => {
          try { recognition.stop(); } catch (error) { /* already stopped */ }
        }, 1400);
        return;
      }
      let finalText = "";
      let interim = "";
      for (let i = event.resultIndex; i < event.results.length; i += 1) {
        const bit = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalText += bit;
        else interim += bit;
      }
      document.getElementById("heard").textContent = "Heard: " + (finalText || interim);
      if (finalText.trim()) applyTranscript(finalText.trim());
    };
    recognition.onend = () => {
      const spoken = bundleFinal;
      const wasBundle = dictationTarget === "bundle" && bundleOpen;
      bundleOpen = false;
      listening = false;
      dictationTarget = null;
      bundleFinal = "";
      clearTimeout(bundleTimer);
      recognition.continuous = false;
      document.body.classList.remove("listening");
      document.getElementById("micBtn").textContent = "Tap and speak";
      const recordBtn = document.getElementById("recordBtn");
      if (recordBtn) recordBtn.textContent = "Record patient details";
      if (wasBundle) {
        const fields = parseBundle(spoken);
        if (Object.keys(fields).length) applyBundleFields(fields);
        else {
          document.getElementById("heard").textContent = "Press Record patient details once, or search by a phone number or a diagnosis.";
          if (spoken) toast("Say name, age, sex, OPD number, phone, and diagnosis in one sentence.");
        }
      }
    };
    recognition.onerror = (event) => {
      const recordBtn = document.getElementById("recordBtn");
      if (recordBtn) recordBtn.textContent = "Record patient details";
      document.getElementById("micBtn").textContent = "Tap and speak";
      document.body.classList.remove("listening");
      if (event.error === "aborted") return;
      listening = false;
      if (event.error === "not-allowed") toast("Allow the microphone when Chrome asks. You can still type.");
      else if (event.error === "no-speech") toast("No speech heard. Tap and try again.");
      else toast("Voice did not start. You can type instead.");
    };
  }
  recognition.lang = db.settings.lang || "en-IN";
  return recognition;
}

function startListening(target) {
  const engine = speechEngine();
  if (!engine) {
    toast("Voice needs Google Chrome. Every box can still be typed.");
    return;
  }
  if (listening) {
    engine.stop();
    return;
  }
  dictationTarget = target || null;
  bundleFinal = "";
  bundleOpen = target === "bundle";
  clearTimeout(bundleTimer);
  try {
    engine.continuous = target === "bundle";
    engine.start();
    listening = true;
    document.body.classList.add("listening");
    document.getElementById("micBtn").textContent = "Listening… tap to stop";
    const recordBtn = document.getElementById("recordBtn");
    if (target === "bundle" && recordBtn) recordBtn.textContent = "Recording… tap to finish";
    document.getElementById("heard").textContent = target === "bundle"
      ? "Listening… say the details, then pause."
      : (target ? "Listening for that box…" : "Listening…");
  } catch (error) {
    toast("Voice is already starting. Wait a second and tap again.");
  }
}

function openSettings() {
  document.getElementById("setClinic").value = db.settings.clinicName || "";
  document.getElementById("setDoctor").value = db.settings.doctorName || "";
  document.getElementById("setLang").value = db.settings.lang || "en-IN";
  document.getElementById("setSpeak").checked = Boolean(db.settings.speakBack);
  document.getElementById("settingsDialog").showModal();
}

function saveSettingsFromForm() {
  db.settings.clinicName = document.getElementById("setClinic").value.trim() || "Neurology OPD";
  db.settings.doctorName = document.getElementById("setDoctor").value.trim();
  db.settings.lang = document.getElementById("setLang").value;
  db.settings.speakBack = document.getElementById("setSpeak").checked;
  persist();
  document.getElementById("clinicName").textContent = db.settings.clinicName;
}

function wire() {
  document.getElementById("search").addEventListener("input", (event) => {
    ui.query = event.target.value;
    renderList();
  });
  document.getElementById("clearSearch").addEventListener("click", () => {
    document.getElementById("search").value = "";
    ui.query = "";
    renderList();
    document.getElementById("search").focus();
  });
  document.getElementById("searchMic").addEventListener("click", () => startListening("search"));
  document.getElementById("recordBtn").addEventListener("click", () => startListening("bundle"));
  document.getElementById("micBtn").addEventListener("click", () => startListening(null));
  document.getElementById("primaryBtn").addEventListener("click", () => {
    if (ui.editing) saveForm();
    else if (ui.selectedId) beginFollowUp(ui.selectedId);
    else beginNewPatient();
  });
  document.getElementById("settingsBtn").addEventListener("click", openSettings);
  document.getElementById("newPatientBtn").addEventListener("click", () => beginNewPatient());
  document.getElementById("editForm").addEventListener("submit", (event) => {
    event.preventDefault();
    saveForm();
  });
  document.getElementById("editForm").addEventListener("keydown", (event) => {
    if (event.key === "Enter" && event.target.tagName !== "TEXTAREA") event.preventDefault();
  });
  document.getElementById("cancelEdit").addEventListener("click", () => {
    leaveEditor().then((ok) => {
      if (!ok) return;
      ui.editing = false;
      renderList();
      if (ui.selectedId) renderPatient();
    });
  });
  document.getElementById("sexButtons").addEventListener("click", (event) => {
    const button = event.target.closest("[data-sex]");
    if (button) setSex(button.dataset.sex);
  });
  document.getElementById("clinicButtons").addEventListener("click", (event) => {
    const button = event.target.closest("[data-clinic]");
    if (button) setClinic(button.dataset.clinic);
  });
  document.body.addEventListener("click", (event) => {
    const button = event.target.closest("[data-dictate]");
    if (!button) return;
    event.preventDefault();
    startListening(button.dataset.dictate);
  });
  document.getElementById("toggleDx").addEventListener("click", () => {
    const box = document.getElementById("dxPicker");
    box.hidden = !box.hidden;
    document.getElementById("toggleDx").textContent = box.hidden ? "Common diagnoses" : "Hide diagnoses";
    renderCatalogPicker();
  });
  document.getElementById("f-diagnosis").addEventListener("change", () => {
    const match = exactCatalogMatch(document.getElementById("f-diagnosis").value);
    if (match) applyDiagnosis(match);
  });
  document.getElementById("followChips").addEventListener("click", (event) => {
    const button = event.target.closest("[data-follow]");
    if (!button) return;
    document.getElementById("f-follow").value = shiftISO(Number(button.dataset.follow));
  });
  ["setClinic", "setDoctor", "setLang", "setSpeak"].forEach((id) => {
    document.getElementById(id).addEventListener("change", saveSettingsFromForm);
    document.getElementById(id).addEventListener("input", saveSettingsFromForm);
  });
  document.getElementById("backupBtn").addEventListener("click", backup);
  document.getElementById("exportListBtn").addEventListener("click", exportPhoneList);
  document.getElementById("restoreBtn").addEventListener("click", () => document.getElementById("restoreFile").click());
  document.getElementById("restoreFile").addEventListener("change", (event) => {
    const file = event.target.files && event.target.files[0];
    event.target.value = "";
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => restoreFromText(String(reader.result || ""));
    reader.readAsText(file);
  });
  document.getElementById("examplesBtn").addEventListener("click", addExamples);
  document.getElementById("removeExamplesBtn").addEventListener("click", removeExamples);
  document.getElementById("wipeBtn").addEventListener("click", () => {
    ask("Delete every patient on this device? Download a backup first if you are not sure.", "Delete all", "Cancel").then((yes) => {
      if (!yes) return;
      db.patients = [];
      ui.selectedId = null;
      ui.editing = false;
      persist();
      renderList();
      renderPatient();
      toast("All patients deleted from this browser.");
    });
  });
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

wire();
renderCatalogPicker();
renderList();
if (db.loadError) toast("Older saved records could not be read. Restore a backup if you have one.");
