const promptSlides = [
  {
    id: 1,
    section: "プロンプトの本質",
    navLabel: "プロンプトの本質",
    badge: "講義",
    title: "プロンプトは「呪文」から「指示書」へ",
    headline: "指示の解像度がエージェントの知能を規定する",
    goal: "プロンプトを魔法ではなく、論理的な仕様書として再定義する。",
    paragraphs: [
      "「なんとなく」の指示は、AIに「なんとなく」の推測を強いる。",
      "エージェント時代、プロンプトは作業手順ではなく、[[達成定義（DoD）]]を明示するもの。",
      "意図を言語化して[[意図の外部化]]を行い、必要な背景や制約を[[コンテキスト注入]]で渡す。",
      "結果の再現性を上げるほど、AIは“呪文”ではなく“道具”になる。"
    ],
    details: {
      "達成定義（DoD）": "ゴールが何かを明確にする基準。『完成の条件』を言葉で決める。",
      "意図の外部化": "頭の中の意図を言語化して共有すること。曖昧さが減る。",
      "コンテキスト注入": "背景・前提・条件を明示的に与えること。",
      "仕様書": "必要条件と制約を並べた指示書。プロンプトの理想形。",
      "2026トレンド": "小手先の書き方より、良質なデータと明確なゴール設定が重要。"
    }
  },
  {
    id: 101,
    section: "プロンプトの本質",
    navLabel: "プロンプトの本質（解説）",
    badge: "解説",
    title: "DoDを言葉で固定する",
    headline: "曖昧を具体に変える",
    goal: "完成条件を明示し、再現性の高い指示に変換する。",
    paragraphs: [
      "NG例: 「いい感じの資料を作って」",
      "OK例: 「[[高校生向け]] / [[10分]] / [[3章構成]] / [[結論から]] / 箇条書き」",
      "完成の条件を[[完成条件]]として書くとブレが減る。",
      "最初に[[対象]]と[[目的]]を固定するのが近道。"
    ],
    details: {
      "高校生向け": "対象読者を固定すると語彙と難易度が安定する。",
      "10分": "時間制約は情報量の調整に直結する。",
      "3章構成": "構成を明示すると出力の順序が揃う。",
      "結論から": "優先順位の高い情報を先に出させる。",
      "完成条件": "どうなれば合格かを定義する言葉。",
      "対象": "誰に向けた出力かを明示する。",
      "目的": "何のために作るのかを言語化する。"
    }
  },
  {
    id: 2,
    section: "言語特性",
    navLabel: "言語特性",
    badge: "講義",
    title: "プロンプトの「言語的」な使い分け",
    headline: "日本語は背景に、英語は論理に強い",
    goal: "言語ごとの得意分野を理解し、使い分けるメリットを掴む。",
    paragraphs: [
      "日本語はニュアンスや文脈の共有に優れる。",
      "英語は構造化された命令や論理的ステップに強い。",
      "[[思考の連鎖（CoT）]]やStep-by-stepは、英語の方が安定することが多い。",
      "言語の特性を知るだけで、プロンプトの再現性が上がる。"
    ],
    details: {
      "言語バイアス": "モデルが学習した言語分布によって得意不得意が出ること。",
      "トークン効率": "同じ内容でも言語により消費トークンが変わる。",
      "思考の連鎖（CoT）": "推論過程を段階的に書かせる方法。",
      "主語の省略": "日本語は主語が抜けやすく、誰が誰に何をするかが曖昧になりやすい。",
      "強い動詞": "Analyze / Synthesize / Critique など明確な動詞で指示すると挙動が安定する。"
    }
  },
  {
    id: 102,
    section: "言語特性",
    navLabel: "言語特性（解説）",
    badge: "解説",
    title: "日本語×英語のハイブリッド",
    headline: "背景は日本語、指示は英語",
    goal: "言語の強みを組み合わせ、安定した出力を作る。",
    paragraphs: [
      "背景説明は日本語で丁寧に書く。",
      "命令は英語の[[強い動詞]]で固定する。",
      "日本語の[[主語補完]]を意識すると混乱が減る。",
      "混在はOK。背景=日本語、手順=英語で精度が上がる。"
    ],
    details: {
      "強い動詞": "Analyze / Summarize / Critique などで行動を明示。",
      "主語補完": "誰が誰に向けて書くのかを明記する。",
      "ハイブリッド": "日本語の文脈+英語の論理で両方の強みを使う。",
      "トーン": "日本語で雰囲気を指定すると表現が安定する。"
    }
  },
  {
    id: 3,
    section: "実践テクニック",
    navLabel: "実践テクニック",
    badge: "講義",
    title: "【即戦力】黄金のプロンプト構造",
    headline: "迷ったらこの4要素を埋めるだけ",
    goal: "汎用フレームワークを提示し、迷わず書ける状態にする。",
    paragraphs: [
      "[[役割]]: あなたは〇〇の専門家です。",
      "[[背景]]: このタスクは〇〇のために行います。",
      "[[タスク]]: 〇〇を、〇〇の形式で作成してください。",
      "[[制約]]: 予算は〇円、専門用語は使わないで。"
    ],
    details: {
      "役割": "モデルの立場を指定すると出力の視点が揃う。",
      "背景": "対象読者・目的・状況などの文脈を渡す。",
      "タスク": "やるべき作業とアウトプット形式を明記する。",
      "制約": "禁止事項・文字数・トーンなどの条件。",
      "アウトプット形式": "表・箇条書き・JSONなど、形式指定で整う。"
    }
  },
  {
    id: 103,
    section: "実践テクニック",
    navLabel: "実践テクニック（解説）",
    badge: "解説",
    title: "4要素の具体例",
    headline: "そのまま使えるテンプレ",
    goal: "テンプレを写してすぐに使える状態にする。",
    paragraphs: [
      "[[役割]]: あなたは高校の情報教師です。",
      "[[背景]]: 目的は[[15分の授業]]で基礎を理解させること。",
      "[[タスク]]: [[スライド7枚]]、[[箇条書き]]で構成する。",
      "[[制約]]: [[専門用語禁止]]、[[例を2つ]]入れる。"
    ],
    details: {
      "15分の授業": "時間制約は情報量を適切に絞る指標。",
      "スライド7枚": "枚数指定でボリュームが安定する。",
      "箇条書き": "読みやすさと整理を強制できる。",
      "専門用語禁止": "対象に合わせた難易度調整。",
      "例を2つ": "具体性を担保する条件。"
    }
  },
  {
    id: 4,
    section: "高度な制御",
    navLabel: "高度な制御",
    badge: "講義",
    title: "エージェントを暴走させない「逆プロンプト」",
    headline: "AIに『私に質問してください』と命じる",
    goal: "人間が最終判断の監督になるための具体的手法を理解する。",
    paragraphs: [
      "最初から完璧なプロンプトは書けない。",
      "不足情報があれば[[逆質問]]してもらう一文を入れる。",
      "推測で進めるのを止め、精度と安全性が上がる。",
      "最後に人間が判断する[[監督]]構造を作る。"
    ],
    details: {
      "逆質問": "『不足があれば実行前に質問してください』を入れて暴走を防ぐ。",
      "対話型プロンプト": "AIとの往復で精度を上げる設計。",
      "リスクヘッジ": "勝手な推測による失敗を減らす考え方。",
      "監督": "人間が最終判断を行う立場。",
      "2026トレンド": "小細工よりも、ゴール設定と良質データが成果を左右する。"
    }
  },
  {
    id: 104,
    section: "高度な制御",
    navLabel: "高度な制御（解説）",
    badge: "解説",
    title: "逆質問テンプレ",
    headline: "暴走を止める安全装置",
    goal: "実行前に人間を挟む設計を定着させる。",
    paragraphs: [
      "テンプレ: 「不足があれば[[実行前に質問]]してください」",
      "推測で進めないための[[停止条件]]を明記する。",
      "最後に人間が[[レビュー]]してGOを出す。",
      "重要な作業は[[ログ]]を残すと安心。"
    ],
    details: {
      "実行前に質問": "確認フェーズを必須にして誤作動を防ぐ。",
      "停止条件": "不明点がある場合は止めるというルール。",
      "レビュー": "人間が内容を確認して決定する工程。",
      "ログ": "作業記録を残し、後で検証できる状態にする。"
    }
  }
];

const navList = document.getElementById("prompt-nav");
const promptTitle = document.getElementById("prompt-title");
const promptHeadline = document.getElementById("prompt-headline");
const promptBody = document.getElementById("prompt-body");
const promptChips = document.getElementById("prompt-chips");
const promptKeyword = document.getElementById("prompt-keyword");
const promptText = document.getElementById("prompt-text");
const promptGoal = document.getElementById("prompt-goal");
const promptSection = document.getElementById("prompt-section");
const promptVariant = document.getElementById("prompt-variant");
const promptNumber = document.getElementById("prompt-number");
const progressNumber = document.getElementById("prompt-progress-number");
const progressTotal = document.getElementById("prompt-progress-total");
const progressBar = document.getElementById("prompt-progress-bar");
const prevBtn = document.getElementById("prompt-prev");
const nextBtn = document.getElementById("prompt-next");
const sizeButtons = document.querySelectorAll(".size-btn");
const zoomBtn = document.getElementById("prompt-zoom-btn");
const focusBtn = document.getElementById("prompt-focus-btn");
const fullscreenBtn = document.getElementById("prompt-fullscreen-btn");
const ttsBtn = document.getElementById("prompt-tts-btn");
const ttsAutoBtn = document.getElementById("prompt-tts-auto-btn");
const ttsRate = document.getElementById("prompt-tts-rate");
const ttsPitch = document.getElementById("prompt-tts-pitch");
const ttsVoice = document.getElementById("prompt-tts-voice");
const appEl = document.querySelector(".app");
const detailBox = document.querySelector(".detail-inner");
const slideEl = document.querySelector(".slide");

let currentIndex = 0;
let currentKeyword = null;
let ttsActive = false;
let ttsAuto = false;
let voiceList = [];
let selectedVoice = "";
const supportsSpeech = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;

const speechReplacements = [
  { pattern: /GitHub/g, replacement: "ギットハブ" },
  { pattern: /Git/g, replacement: "ギット" },
  { pattern: /Hugging Face/g, replacement: "ハギングフェイス" },
  { pattern: /WSL2/g, replacement: "ダブリューエスエルツー" },
  { pattern: /WSL/g, replacement: "ダブリューエスエル" },
  { pattern: /CLI/g, replacement: "シーエルアイ" },
  { pattern: /GPU/g, replacement: "ジーピーユー" },
  { pattern: /CPU/g, replacement: "シーピーユー" },
    { pattern: /VRAM/g, replacement: "ブイラム" },
    { pattern: /CUDA/g, replacement: "クーダ" },
    { pattern: /RTX\s*40\/50シリーズ/g, replacement: "アールティーエックスよんじゅう・ごじゅうシリーズ" },
    { pattern: /PATH/g, replacement: "パス" },
  { pattern: /Python/g, replacement: "パイソン" },
  { pattern: /Conda/g, replacement: "コンダ" },
  { pattern: /Docker/g, replacement: "ドッカー" },
  { pattern: /Ubuntu/g, replacement: "ウブントゥ" },
  { pattern: /Linux/g, replacement: "リナックス" },
  { pattern: /VS Code/g, replacement: "ブイエスコード" },
  { pattern: /LM Studio/g, replacement: "エルエムスタジオ" },
  { pattern: /RAG/g, replacement: "ラグ" },
  { pattern: /LLM/g, replacement: "エルエルエム" },
  { pattern: /nvidia-smi/gi, replacement: "エヌビディアエスエムアイ" },
  { pattern: /学び方/g, replacement: "まなびかた" },
  { pattern: /使い方/g, replacement: "つかいかた" },
  { pattern: /作り方/g, replacement: "つくりかた" },
  { pattern: /戦い方/g, replacement: "たたかいかた" },
  { pattern: /動き方/g, replacement: "うごきかた" },
  { pattern: /読み方/g, replacement: "よみかた" },
  { pattern: /見方/g, replacement: "みかた" },
  { pattern: /書き方/g, replacement: "かきかた" },
  { pattern: /考え方/g, replacement: "かんがえかた" },
  { pattern: /進め方/g, replacement: "すすめかた" }
];

const normalizeForSpeech = (text) => {
  return speechReplacements.reduce((acc, rule) => acc.replace(rule.pattern, rule.replacement), text);
};

const toIndex = (index) => String(index + 1).padStart(2, "0");

const buildNav = () => {
  navList.innerHTML = "";
  promptSlides.forEach((slide, index) => {
    const item = document.createElement("li");
    item.className = `nav-item${slide.badge === "解説" ? " detail" : ""}`;
    item.dataset.index = index;
    item.innerHTML = `<span>${slide.navLabel}</span><span class=\"nav-index\">${toIndex(index)}</span>`;
    item.addEventListener("click", () => goTo(index));
    navList.appendChild(item);
  });
};

const highlightKeyword = (key) => {
  document.querySelectorAll(".kw").forEach((el) => {
    el.classList.toggle("active", el.dataset.key === key);
  });
  document.querySelectorAll(".chip").forEach((el) => {
    el.classList.toggle("active", el.dataset.key === key);
  });
};

const selectKeyword = (key) => {
  const slide = promptSlides[currentIndex];
  if (!slide.details[key]) {
    return;
  }
  currentKeyword = key;
  promptKeyword.textContent = key;
  promptText.textContent = slide.details[key];
  promptGoal.textContent = slide.goal;
  highlightKeyword(key);

  detailBox.classList.remove("pulse");
  void detailBox.offsetWidth;
  detailBox.classList.add("pulse");
};

const renderSlide = () => {
  const slide = promptSlides[currentIndex];
  promptTitle.textContent = slide.title;
  promptHeadline.textContent = slide.headline;
  promptSection.textContent = slide.section;
  promptVariant.textContent = slide.badge ?? "講義";
  promptNumber.textContent = toIndex(currentIndex);

  const bodyHtml = slide.paragraphs
    .map((text) => {
      const safe = text.replace(/\[\[(.+?)\]\]/g, (_match, key) => {
        return `<span class=\"kw\" data-key=\"${key}\">${key}</span>`;
      });
      return `<p>${safe}</p>`;
    })
    .join("");

  promptBody.innerHTML = bodyHtml;

  promptChips.innerHTML = "";
  Object.keys(slide.details).forEach((key) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.dataset.key = key;
    chip.textContent = key;
    chip.addEventListener("click", () => selectKeyword(key));
    promptChips.appendChild(chip);
  });

  promptBody.querySelectorAll(".kw").forEach((el) => {
    el.addEventListener("click", () => selectKeyword(el.dataset.key));
  });

  const defaultKey = currentKeyword && slide.details[currentKeyword]
    ? currentKeyword
    : Object.keys(slide.details)[0];

  if (defaultKey) {
    selectKeyword(defaultKey);
  }

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", Number(item.dataset.index) === currentIndex);
  });

  progressNumber.textContent = toIndex(currentIndex);
  progressTotal.textContent = String(promptSlides.length).padStart(2, "0");
  progressBar.style.width = `${((currentIndex + 1) / promptSlides.length) * 100}%`;

  slideEl.classList.toggle("is-detail", slide.badge === "解説");
  slideEl.classList.remove("swap");
  void slideEl.offsetWidth;
  slideEl.classList.add("swap");
};

  const goTo = (index, options = {}) => {
  const wrap = options.wrap !== false;
  const shouldStop = options.stopSpeech !== false;
  let nextIndex = index;
  if (wrap) {
    if (index < 0) {
      nextIndex = promptSlides.length - 1;
    } else if (index >= promptSlides.length) {
      nextIndex = 0;
    }
  } else {
    if (index < 0) {
      nextIndex = 0;
    } else if (index >= promptSlides.length) {
      nextIndex = promptSlides.length - 1;
    }
  }
  currentIndex = nextIndex;
  if (shouldStop) {
    stopSpeech();
  }
  renderSlide();
};

const setSlideSize = (size) => {
  document.body.dataset.slideSize = size;
  sizeButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.size === size);
  });
};

const syncFullscreenButton = () => {
  const isFull = Boolean(document.fullscreenElement);
  fullscreenBtn.classList.toggle("active", isFull);
  fullscreenBtn.setAttribute("aria-pressed", String(isFull));
  fullscreenBtn.textContent = isFull ? "Exit" : "Full";
};

sizeButtons.forEach((btn) => {
  btn.addEventListener("click", () => setSlideSize(btn.dataset.size));
});

  const setTextZoom = (enabled) => {
    document.body.classList.toggle("text-zoom", enabled);
    if (zoomBtn) {
      zoomBtn.classList.toggle("active", enabled);
      zoomBtn.setAttribute("aria-pressed", String(enabled));
    }
  };

  if (zoomBtn) {
    zoomBtn.addEventListener("click", () => {
      const enabled = !document.body.classList.contains("text-zoom");
      setTextZoom(enabled);
    });
  }

  focusBtn.addEventListener("click", () => {
    const enabled = appEl.classList.toggle("focus-mode");
    focusBtn.classList.toggle("active", enabled);
    focusBtn.setAttribute("aria-pressed", String(enabled));
  });

fullscreenBtn.addEventListener("click", async () => {
  try {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  } catch (_error) {
    // ignore if blocked
  }
});

document.addEventListener("fullscreenchange", syncFullscreenButton);

prevBtn.addEventListener("click", () => goTo(currentIndex - 1));
nextBtn.addEventListener("click", () => goTo(currentIndex + 1));

const getSlideText = () => {
  const parts = [
    promptTitle.textContent,
    promptHeadline.textContent,
    promptBody.innerText
  ];
  return normalizeForSpeech(parts.filter(Boolean).join("。"));
};

const populateVoices = () => {
  if (!supportsSpeech || !ttsVoice) {
    return;
  }
  voiceList = window.speechSynthesis.getVoices();
  const preferred = voiceList.filter((voice) => voice.lang && voice.lang.toLowerCase().startsWith("ja"));
  const list = preferred.length ? preferred : voiceList;
  ttsVoice.innerHTML = "";
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "システム既定";
  ttsVoice.appendChild(defaultOption);
  list.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.textContent = `${voice.name} (${voice.lang})`;
    ttsVoice.appendChild(option);
  });
  if (list.length && !selectedVoice) {
    selectedVoice = list[0].name;
    ttsVoice.value = selectedVoice;
  }
};

const stopSpeech = (clearAuto = false) => {
  if (!supportsSpeech || !ttsBtn) {
    return;
  }
  window.speechSynthesis.cancel();
  ttsActive = false;
  if (clearAuto) {
    ttsAuto = false;
    if (ttsAutoBtn) {
      ttsAutoBtn.classList.remove("active");
      ttsAutoBtn.setAttribute("aria-pressed", "false");
    }
  }
  ttsBtn.textContent = "読み上げ";
  ttsBtn.classList.remove("is-speaking");
  ttsBtn.setAttribute("aria-pressed", "false");
};

const speakSlide = () => {
  if (!supportsSpeech || !ttsBtn) {
    return;
  }
  const text = getSlideText();
  if (!text.trim()) {
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP";
  utterance.rate = ttsRate ? Number(ttsRate.value) : 1.0;
  utterance.pitch = ttsPitch ? Number(ttsPitch.value) : 1.0;
  const chosenVoice = voiceList.find((voice) => voice.name === selectedVoice);
  if (chosenVoice) {
    utterance.voice = chosenVoice;
  }
  utterance.onend = () => {
    if (ttsAuto) {
      const nextIndex = currentIndex + 1;
      if (nextIndex >= promptSlides.length) {
        stopSpeech(true);
        return;
      }
      goTo(nextIndex, { wrap: false, stopSpeech: false });
      setTimeout(() => {
        if (ttsAuto) {
          speakSlide();
        }
      }, 350);
      return;
    }
    stopSpeech();
  };
  utterance.onerror = () => stopSpeech();
  ttsActive = true;
  ttsBtn.textContent = "停止";
  ttsBtn.classList.add("is-speaking");
  ttsBtn.setAttribute("aria-pressed", "true");
  window.speechSynthesis.speak(utterance);
};

if (ttsBtn) {
  if (!supportsSpeech) {
    ttsBtn.textContent = "読み上げ不可";
    ttsBtn.classList.add("is-disabled");
    if (ttsAutoBtn) {
      ttsAutoBtn.classList.add("is-disabled");
    }
    if (ttsRate) {
      ttsRate.disabled = true;
    }
    if (ttsPitch) {
      ttsPitch.disabled = true;
    }
    if (ttsVoice) {
      ttsVoice.disabled = true;
    }
  } else {
    ttsBtn.addEventListener("click", () => {
      if (ttsActive) {
        stopSpeech(true);
      } else {
        speakSlide();
      }
    });
    if (ttsAutoBtn) {
      ttsAutoBtn.addEventListener("click", () => {
        ttsAuto = !ttsAuto;
        ttsAutoBtn.classList.toggle("active", ttsAuto);
        ttsAutoBtn.setAttribute("aria-pressed", String(ttsAuto));
      });
    }
    if (ttsVoice) {
      ttsVoice.addEventListener("change", () => {
        selectedVoice = ttsVoice.value;
      });
    }
    populateVoices();
    if ("onvoiceschanged" in window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = populateVoices;
    }
  }
}

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "PageDown") {
    goTo(currentIndex + 1);
  }
  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    goTo(currentIndex - 1);
  }
});

buildNav();
setSlideSize("medium");
syncFullscreenButton();
renderSlide();
