const STORAGE_KEY = "textbook-slide-maker";

const defaultSlides = [
  {
    id: 1,
    section: "イントロダクション",
    title: "タイトルを入力",
    headline: "ヘッドラインを入力",
    body: "本文を入力してください。",
    notes: ""
  }
];

let slides = [];
let currentIndex = 0;

const slideList = document.getElementById("slide-list");
const slideSelect = document.getElementById("slide-select");
const inputSection = document.getElementById("input-section");
const inputTitle = document.getElementById("input-title");
const inputHeadline = document.getElementById("input-headline");
const inputBody = document.getElementById("input-body");
const inputNotes = document.getElementById("input-notes");
const previewSection = document.getElementById("preview-section");
const previewTitle = document.getElementById("preview-title");
const previewHeadline = document.getElementById("preview-headline");
const previewBody = document.getElementById("preview-body");
const previewNotes = document.getElementById("preview-notes");
const zoomRange = document.getElementById("zoom-range");
const pageContainer = document.getElementById("page-container");

const addBtn = document.getElementById("slide-add");
const duplicateBtn = document.getElementById("slide-duplicate");
const deleteBtn = document.getElementById("slide-delete");
const prevBtn = document.getElementById("nav-prev");
const nextBtn = document.getElementById("nav-next");
const exportBtn = document.getElementById("export-json");
const importInput = document.getElementById("import-json");
const clearLocalBtn = document.getElementById("clear-local");

const themeSelect = document.getElementById("theme-select");
const layoutSelect = document.getElementById("layout-select");

const clampIndex = (index) => Math.min(Math.max(index, 0), slides.length - 1);

const saveState = () => {
  const payload = {
    slides,
    currentIndex,
    theme: document.body.dataset.theme,
    layout: document.body.dataset.layout
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
};

const loadState = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      slides = [...defaultSlides];
      currentIndex = 0;
      return;
    }
    const data = JSON.parse(raw);
    slides = Array.isArray(data.slides) && data.slides.length ? data.slides : [...defaultSlides];
    currentIndex = clampIndex(data.currentIndex || 0);
    if (data.theme) {
      document.body.dataset.theme = data.theme;
      themeSelect.value = data.theme;
    }
    if (data.layout) {
      document.body.dataset.layout = data.layout;
      layoutSelect.value = data.layout;
    }
  } catch (error) {
    slides = [...defaultSlides];
    currentIndex = 0;
  }
};

const renderList = () => {
  slideList.innerHTML = "";
  slideSelect.innerHTML = "";
  slides.forEach((slide, index) => {
    const item = document.createElement("div");
    item.className = `list-item${index === currentIndex ? " active" : ""}`;
    item.innerHTML = `<span>${slide.title || "無題"}</span><span>${String(index + 1).padStart(2, "0")}</span>`;
    item.addEventListener("click", () => setCurrent(index));
    slideList.appendChild(item);

    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `${String(index + 1).padStart(2, "0")} ${slide.title || "無題"}`;
    slideSelect.appendChild(option);
  });
  slideSelect.value = String(currentIndex);
};

const renderPreview = () => {
  const slide = slides[currentIndex];
  previewSection.textContent = slide.section || "セクション";
  previewTitle.textContent = slide.title || "タイトルを入力";
  previewHeadline.textContent = slide.headline || "";

  const bodyLines = (slide.body || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
  previewBody.innerHTML = bodyLines.length
    ? bodyLines.map((line) => `<p>${line}</p>`).join("")
    : "<p>本文を入力してください。</p>";

  if (slide.notes && slide.notes.trim()) {
    previewNotes.textContent = slide.notes;
    previewNotes.style.display = "block";
  } else {
    previewNotes.textContent = "";
    previewNotes.style.display = "none";
  }
};

const renderInputs = () => {
  const slide = slides[currentIndex];
  inputSection.value = slide.section || "";
  inputTitle.value = slide.title || "";
  inputHeadline.value = slide.headline || "";
  inputBody.value = slide.body || "";
  inputNotes.value = slide.notes || "";
};

const setCurrent = (index) => {
  currentIndex = clampIndex(index);
  renderInputs();
  renderPreview();
  renderList();
  saveState();
};

const updateSlide = (patch) => {
  slides[currentIndex] = { ...slides[currentIndex], ...patch };
  renderPreview();
  renderList();
  saveState();
};

const addSlide = () => {
  const nextId = slides.length ? Math.max(...slides.map((s) => s.id || 0)) + 1 : 1;
  const newSlide = {
    id: nextId,
    section: "",
    title: "",
    headline: "",
    body: "",
    notes: ""
  };
  slides.splice(currentIndex + 1, 0, newSlide);
  setCurrent(currentIndex + 1);
};

const duplicateSlide = () => {
  const base = slides[currentIndex];
  const nextId = slides.length ? Math.max(...slides.map((s) => s.id || 0)) + 1 : 1;
  const copy = { ...base, id: nextId, title: `${base.title || "無題"} (コピー)` };
  slides.splice(currentIndex + 1, 0, copy);
  setCurrent(currentIndex + 1);
};

const deleteSlide = () => {
  if (slides.length === 1) {
    slides = [{ ...defaultSlides[0], id: 1 }];
    setCurrent(0);
    return;
  }
  slides.splice(currentIndex, 1);
  setCurrent(clampIndex(currentIndex));
};

const exportJson = () => {
  const payload = JSON.stringify({ slides }, null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "slides.json";
  link.click();
  URL.revokeObjectURL(url);
};

const importJson = (file) => {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      const imported = Array.isArray(data) ? data : data.slides;
      if (!Array.isArray(imported) || imported.length === 0) {
        throw new Error("invalid");
      }
      slides = imported.map((slide, index) => ({
        id: slide.id || index + 1,
        section: slide.section || "",
        title: slide.title || "",
        headline: slide.headline || "",
        body: slide.body || "",
        notes: slide.notes || ""
      }));
      setCurrent(0);
    } catch (error) {
      alert("JSONの形式が正しくありません。");
    }
  };
  reader.readAsText(file);
};

inputSection.addEventListener("input", () => updateSlide({ section: inputSection.value }));
inputTitle.addEventListener("input", () => updateSlide({ title: inputTitle.value }));
inputHeadline.addEventListener("input", () => updateSlide({ headline: inputHeadline.value }));
inputBody.addEventListener("input", () => updateSlide({ body: inputBody.value }));
inputNotes.addEventListener("input", () => updateSlide({ notes: inputNotes.value }));

slideSelect.addEventListener("change", () => setCurrent(Number(slideSelect.value)));
addBtn.addEventListener("click", addSlide);
duplicateBtn.addEventListener("click", duplicateSlide);
deleteBtn.addEventListener("click", deleteSlide);
prevBtn.addEventListener("click", () => setCurrent(currentIndex - 1));
nextBtn.addEventListener("click", () => setCurrent(currentIndex + 1));

zoomRange.addEventListener("input", () => {
  pageContainer.style.setProperty("--zoom", zoomRange.value);
});

exportBtn.addEventListener("click", exportJson);
importInput.addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (file) {
    importJson(file);
    event.target.value = "";
  }
});

themeSelect.addEventListener("change", () => {
  document.body.dataset.theme = themeSelect.value;
  saveState();
});

layoutSelect.addEventListener("change", () => {
  document.body.dataset.layout = layoutSelect.value;
  saveState();
});

clearLocalBtn.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  slides = [...defaultSlides];
  setCurrent(0);
});

loadState();
setCurrent(currentIndex);
