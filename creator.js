const creatorSlides = [
  {
    id: 1,
    section: "AIの裏側とクリエイターの責任",
    navLabel: "今日のゴール",
    badge: "講義",
    title: "今日のゴール",
    headline: "APIとトークンを理解する",
    goal: "API・トークン・注意点の全体像を掴む。",
    paragraphs: [
      "[[API]]の正体を知る：AIを『部品』としてプログラムに繋ぐ方法。",
      "[[トークン]]の仕組みを理解する：AIが言葉を処理する単位とコスト。",
      "[[注意点]]を学ぶ：[[セキュリティ]]と[[予算管理]]の重要性。",
      "チャットの『[[消費者]]』から、APIを使う『[[生産者]]』へ進む。"
    ],
    details: {
      "API": "AIを外部から呼び出すための窓口。",
      "トークン": "AIが文字を処理する最小単位。",
      "注意点": "安全とコストの両面を押さえること。",
      "セキュリティ": "キー管理と情報保護が最優先。",
      "予算管理": "使った分だけ課金される仕組み。",
      "消費者": "チャット画面で使うだけの立場。",
      "生産者": "AIを組み込んで価値を作る立場。"
    }
  },
  {
    id: 2,
    section: "APIの基礎",
    navLabel: "APIとは",
    badge: "講義",
    title: "AIを『部品』として使う『API』",
    headline: "ソフト同士を繋ぐ接点",
    goal: "APIの役割とメリットを理解する。",
    paragraphs: [
      "[[API]]はソフトウェア同士を繋ぐ[[接点]]（インターフェース）。",
      "自分のプログラムからAIモデルを呼び出す[[窓口]]になる。",
      "巨大AIを自前で動かすのは[[限界]]がある。",
      "だからこそ、ネット経由で[[機能のレンタル]]を行う。",
      "例：Unityゲームの[[村人のセリフ]]をAPIで生成する。"
    ],
    details: {
      "API": "外部サービスを呼び出すための仕組み。",
      "接点": "ソフト同士がやり取りする境界面。",
      "窓口": "AIに依頼を届ける入口。",
      "限界": "自前GPUでは現実的でない規模。",
      "機能のレンタル": "計算結果だけを受け取る方式。",
      "村人のセリフ": "AIが返した文章をゲームに表示する。"
    }
  },
  {
    id: 3,
    section: "セキュリティ",
    navLabel: "APIキー注意",
    badge: "講義",
    title: "API利用の注意点（セキュリティ）",
    headline: "APIキーは銀行の暗証番号",
    goal: "キーの危険性と管理方法を理解する。",
    paragraphs: [
      "APIを使うには[[APIキー]]が必要。これは『[[銀行の暗証番号]]』と同じ。",
      "[[GitHub公開]]は厳禁。数秒でボットに盗まれる。",
      "盗まれると[[被害]]は利用者の負担になる。",
      "[[環境変数]]を使って、キーをコードから隔離する。"
    ],
    details: {
      "APIキー": "本人確認のための秘密情報。",
      "銀行の暗証番号": "漏れたら損失が出ることの比喩。",
      "GitHub公開": "ソースを公開すると自動収集される。",
      "被害": "第三者の利用料が請求される。",
      "環境変数": "キーを安全に保存する方法。"
    }
  },
  {
    id: 4,
    section: "トークン基礎",
    navLabel: "トークンとは",
    badge: "講義",
    title: "AIが言葉を食べる単位『トークン』",
    headline: "文字ではなく意味のかたまり",
    goal: "トークンの概念と言語差を理解する。",
    paragraphs: [
      "[[トークン]]はAIが文字を処理する[[最小単位]]。",
      "人間は文字数で数えるが、AIは意味の塊で数える。",
      "[[英語]]は効率が良く、[[日本語]]は不利になりやすい。",
      "例：「AI」は少数トークン、「[[人工知能]]」は分割される。"
    ],
    details: {
      "トークン": "AIにとっての計算単位。",
      "最小単位": "これ以上分割できない処理の粒度。",
      "英語": "単語単位で効率が良い。",
      "日本語": "文字ごとに割れやすい。",
      "人工知能": "同じ意味でもコストが増える例。"
    }
  },
  {
    id: 5,
    section: "コストと限界",
    navLabel: "限界とコスト",
    badge: "講義",
    title: "トークンが『限界』と『コスト』を決める",
    headline: "記憶容量と従量課金",
    goal: "コンテキスト限界と料金の仕組みを理解する。",
    paragraphs: [
      "AIには[[コンテキストウィンドウ]]という記憶容量がある。",
      "限界を超えると古い会話から[[忘れる]]。",
      "料金は[[従量課金]]：送信＋返信のトークン合計で決まる。",
      "会話が長いほど[[送信量]]が増え、コストも上がる。"
    ],
    details: {
      "コンテキストウィンドウ": "一度に扱える最大情報量。",
      "忘れる": "古い内容が切り捨てられる現象。",
      "従量課金": "使った分だけ支払う料金体系。",
      "送信量": "過去の会話も毎回送るため増える。"
    }
  },
  {
    id: 6,
    section: "節約術",
    navLabel: "節約術",
    badge: "講義",
    title: "賢いトークン節約術",
    headline: "短く、構造化して伝える",
    goal: "トークン消費を抑える具体策を知る。",
    paragraphs: [
      "挨拶や前置きを[[削る]]と無駄なトークンが減る。",
      "[[構造化]]（箇条書き・JSON）で短く正確に伝える。",
      "[[出力制限]]をかけて長文を防ぐ。",
      "例：API呼び出し時に[[max_tokens]]を設定する。"
    ],
    details: {
      "削る": "不要な文章を省いて効率化。",
      "構造化": "情報を整理して読み取りやすくする。",
      "出力制限": "返答の長さを制御する。",
      "max_tokens": "出力上限を指定する設定。"
    }
  },
  {
    id: 7,
    section: "倫理と制限",
    navLabel: "倫理と制限",
    badge: "講義",
    title: "API利用の『倫理』と『制限』",
    headline: "回数制限とデータの扱い",
    goal: "制限とプライバシー意識を持つ。",
    paragraphs: [
      "[[レートリミット]]：短時間の大量呼び出しは停止される。",
      "[[データ利用ポリシー]]：API送信データは学習に使われないことが多い。",
      "ただし[[機密情報]]を送って良いわけではない。",
      "開発者は[[プライバシー]]を守る責任がある。"
    ],
    details: {
      "レートリミット": "1分間などの呼び出し上限。",
      "データ利用ポリシー": "送信データの扱いルール。",
      "機密情報": "個人情報や社外秘データ。",
      "プライバシー": "利用者の情報を守る義務。"
    }
  },
  {
    id: 8,
    section: "まとめ",
    navLabel: "まとめ",
    badge: "まとめ",
    title: "まとめ",
    headline: "生産者として動き出す",
    goal: "API活用の意義と注意点を持ち帰る。",
    paragraphs: [
      "APIはAIを世界と繋ぐ[[魔法の杖]]。",
      "ただし杖を振るたびに[[燃料]]（トークン）を消費する。",
      "[[APIキー管理]]は財産を守る最優先事項。",
      "君たちは『[[エンジニア視点]]』でAIを組み込む側へ。"
    ],
    details: {
      "魔法の杖": "強力だが使い方が重要な道具。",
      "燃料": "トークンは使うほど減る資源。",
      "APIキー管理": "漏洩対策の最重要ポイント。",
      "エンジニア視点": "使う側から作る側へ切り替える意識。"
    }
  }
];

const navList = document.getElementById("creator-nav");
const creatorTitle = document.getElementById("creator-title");
const creatorHeadline = document.getElementById("creator-headline");
const creatorBody = document.getElementById("creator-body");
const creatorChips = document.getElementById("creator-chips");
const creatorKeyword = document.getElementById("creator-keyword");
const creatorText = document.getElementById("creator-text");
const creatorGoal = document.getElementById("creator-goal");
const creatorSection = document.getElementById("creator-section");
const creatorVariant = document.getElementById("creator-variant");
const creatorNumber = document.getElementById("creator-number");
const progressNumber = document.getElementById("creator-progress-number");
const progressTotal = document.getElementById("creator-progress-total");
const progressBar = document.getElementById("creator-progress-bar");
const prevBtn = document.getElementById("creator-prev");
const nextBtn = document.getElementById("creator-next");
const sizeButtons = document.querySelectorAll(".size-btn");
const zoomBtn = document.getElementById("creator-zoom-btn");
const fxTheme = document.getElementById("creator-fx-theme");
const fxBg = document.getElementById("creator-fx-bg");
const fxBoard = document.getElementById("creator-fx-board");
const fxTransition = document.getElementById("creator-fx-transition");
const focusBtn = document.getElementById("creator-focus-btn");
const fullscreenBtn = document.getElementById("creator-fullscreen-btn");
const ttsBtn = document.getElementById("creator-tts-btn");
const ttsAutoBtn = document.getElementById("creator-tts-auto-btn");
const ttsRate = document.getElementById("creator-tts-rate");
const ttsPitch = document.getElementById("creator-tts-pitch");
const ttsVoice = document.getElementById("creator-tts-voice");
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
  { pattern: /〇〇/g, replacement: "まるまる" },
  { pattern: /言語的/g, replacement: "げんごてき" },
  { pattern: /上げる/g, replacement: "あげる" },
  { pattern: /方向修正/g, replacement: "ほうこうしゅうせい" },
  { pattern: /方向性/g, replacement: "ほうこうせい" },
  { pattern: /方向/g, replacement: "ほうこう" },
  { pattern: /方法/g, replacement: "ほうほう" },
  { pattern: /の方が/g, replacement: "のほうが" },

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
  creatorSlides.forEach((slide, index) => {
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
  const slide = creatorSlides[currentIndex];
  if (!slide.details[key]) {
    return;
  }
  currentKeyword = key;
  creatorKeyword.textContent = key;
  creatorText.textContent = slide.details[key];
  creatorGoal.textContent = slide.goal;
  highlightKeyword(key);

  detailBox.classList.remove("pulse");
  void detailBox.offsetWidth;
  detailBox.classList.add("pulse");
};

const renderSlide = () => {
  const slide = creatorSlides[currentIndex];
  creatorTitle.textContent = slide.title;
  creatorHeadline.textContent = slide.headline;
  creatorSection.textContent = slide.section;
  creatorVariant.textContent = slide.badge ?? "講義";
  creatorNumber.textContent = toIndex(currentIndex);

  const bodyHtml = slide.paragraphs
    .map((text) => {
      const safe = text.replace(/\[\[(.+?)\]\]/g, (_match, key) => {
        return `<span class=\"kw\" data-key=\"${key}\">${key}</span>`;
      });
      return `<p>${safe}</p>`;
    })
    .join("");

  creatorBody.innerHTML = bodyHtml;

  creatorChips.innerHTML = "";
  Object.keys(slide.details).forEach((key) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.dataset.key = key;
    chip.textContent = key;
    chip.addEventListener("click", () => selectKeyword(key));
    creatorChips.appendChild(chip);
  });

  creatorBody.querySelectorAll(".kw").forEach((el) => {
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
  progressTotal.textContent = String(creatorSlides.length).padStart(2, "0");
  progressBar.style.width = `${((currentIndex + 1) / creatorSlides.length) * 100}%`;

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
      nextIndex = creatorSlides.length - 1;
    } else if (index >= creatorSlides.length) {
      nextIndex = 0;
    }
  } else {
    if (index < 0) {
      nextIndex = 0;
    } else if (index >= creatorSlides.length) {
      nextIndex = creatorSlides.length - 1;
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

  const effectStorageKey = "ai-briefing-effects";
  const effectDefaults = {
    theme: "night",
    bg: "classic",
    board: "diagonal",
    transition: "fade"
  };
  const storedEffects = (() => {
    try {
      return JSON.parse(localStorage.getItem(effectStorageKey) || "{}");
    } catch (error) {
      return {};
    }
  })();
  const effectSelects = {
    theme: fxTheme,
    bg: fxBg,
    board: fxBoard,
    transition: fxTransition
  };
  const initEffects = () => {
    Object.keys(effectSelects).forEach((key) => {
      const value = storedEffects[key] || document.body.dataset[key] || effectDefaults[key];
      document.body.dataset[key] = value;
      const select = effectSelects[key];
      if (select) {
        select.value = value;
        select.addEventListener("change", () => {
          const next = select.value;
          document.body.dataset[key] = next;
          storedEffects[key] = next;
          try {
            localStorage.setItem(effectStorageKey, JSON.stringify(storedEffects));
          } catch (error) {
            // ignore storage errors
          }
        });
      }
    });
  };
  initEffects();

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
    creatorTitle.textContent,
    creatorHeadline.textContent,
    creatorBody.innerText
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
      if (nextIndex >= creatorSlides.length) {
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






