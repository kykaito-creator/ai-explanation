const multimodalSlides = [
  {
    id: 1,
    section: "AI・マルチモーダル活用術",
    navLabel: "今日のゴール",
    badge: "講義",
    title: "今日のゴール",
    headline: "「1人の天才」より「最強のチーム」",
    goal: "AI連携の考え方と到達点を理解する。",
    paragraphs: [
      "単一AIの[[限界]]を知る（なぜ1つじゃダメなのか？）",
      "「[[適材適所]]」の[[連携パターン]]を理解する。",
      "AIを「信じる」から「[[使いこなす]]」へステップアップ。",
      "目的は[[精度]]を極限まで高める思考法を身につけること。"
    ],
    details: {
      "限界": "1つのAIだけでは偏りや誤りを見抜きにくい。",
      "適材適所": "得意分野に応じて役割を分ける考え方。",
      "連携パターン": "複数AIの使い分け手順。",
      "使いこなす": "依存せず道具として操る姿勢。",
      "精度": "再現性と正確性を高めること。"
    }
  },
  {
    id: 2,
    section: "現状認識",
    navLabel: "1人の助手",
    badge: "講義",
    title: "君たちはすでに「1人の助手」を持っている",
    headline: "今のAI利用は単独プレイ",
    goal: "現状の使い方を客観視する。",
    paragraphs: [
      "コードを書くときは[[GitHub Copilot]]（[[Codex]]）。",
      "調べ物や文章作成は[[ChatGPT]]や[[Gemini]]。",
      "「そのAIの答え、[[100%正しい]]と言い切れる？」",
      "「もっと複雑になったとき、[[今のままで足りる]]？」",
      "1人の助手に頼りすぎると、[[癖]]や[[間違い]]に気づけない。"
    ],
    details: {
      "GitHub Copilot": "エディタ内補完に強いAIアシスタント。",
      "Codex": "コード生成に特化したAIモデル。",
      "ChatGPT": "対話と論理整理に強いAI。",
      "Gemini": "長文読解や検索連携に強いAI。",
      "100%正しい": "AI出力の正確性を盲信しない姿勢。",
      "今のままで足りる": "複雑化で弱点が露呈すること。",
      "癖": "モデル固有の偏り。",
      "間違い": "ハルシネーションや推測による誤り。"
    }
  },
  {
    id: 201,
    section: "現状認識",
    navLabel: "現状認識（解説）",
    badge: "解説",
    title: "具体例：1人の助手の限界",
    headline: "「得意」と「苦手」を見分ける",
    goal: "単独AIの限界を具体例で理解する。",
    paragraphs: [
      "Copilotは「[[今書いているコード]]」の続きを作るのが得意。",
      "でも「[[アプリ全体のセキュリティ設計]]」はChatGPTの方が向く。",
      "1つのAIに頼りすぎると、[[盲点]]が増える。",
      "だからこそ、役割分担が必要になる。"
    ],
    details: {
      "今書いているコード": "局所的な文脈に強い。",
      "アプリ全体のセキュリティ設計": "全体設計と論理性が必要。",
      "盲点": "見落としやすいリスク。"
    }
  },
  {
    id: 3,
    section: "連携の理由",
    navLabel: "連携が必要",
    badge: "講義",
    title: "なぜ「連携」が必要なのか？",
    headline: "3つの理由で精度が上がる",
    goal: "連携の必然性を理解する。",
    paragraphs: [
      "理由1: [[専門性の違い]]がある。",
      "理由2: [[ハルシネーション]]を[[相互検証]]できる。",
      "理由3: [[コンテキスト限界]]を役割分担で突破する。",
      "つまり[[3人寄れば文殊の知恵]]をAIで実践する。",
      "例: [[Gemini]]は最新情報、[[ChatGPT]]は論理推論、[[Codex]]は実装速度。"
    ],
    details: {
      "専門性の違い": "モデルごとに得意なタスクが違う。",
      "ハルシネーション": "もっともらしい誤情報を出す現象。",
      "相互検証": "別AIで答えをチェックする方法。",
      "コンテキスト限界": "一度に扱える情報量の上限。",
      "3人寄れば文殊の知恵": "複数の知恵を合わせて精度を上げる比喩。",
      "Gemini": "検索・長文理解に強いAI。",
      "ChatGPT": "論理構成や推論に強いAI。",
      "Codex": "実装や補完のスピードに強いAI。"
    }
  },
  {
    id: 301,
    section: "連携の理由",
    navLabel: "役割分担（解説）",
    badge: "解説",
    title: "役割分担の早見表",
    headline: "誰に何を頼むかを固定する",
    goal: "モデルごとの役割を整理する。",
    paragraphs: [
      "[[Gemini]]: 最新情報・長文資料の読解。",
      "[[ChatGPT]]: 論理構成・推論・説明。",
      "[[Codex]]: コード補完・実装スピード。",
      "[[Claude]]: レビュー・安全性チェック。",
      "役割が決まると、依頼がブレない。"
    ],
    details: {
      "Gemini": "検索や長文理解が強い。",
      "ChatGPT": "論理整理と説明が強い。",
      "Codex": "実装補完が強い。",
      "Claude": "慎重なレビューが強い。"
    }
  },
  {
    id: 4,
    section: "黄金パターン",
    navLabel: "設計・実装・検証",
    badge: "講義",
    title: "連携の黄金パターン【設計・実装・検証】",
    headline: "脳・手・目を分業する",
    goal: "開発現場の3ステップ連携を理解する。",
    paragraphs: [
      "【脳】[[設計]]（Gemini / [[GPT-4o]]）",
      "「こんなアプリを作りたい。[[クラス図]]と[[機能一覧]]を箇条書きにして」",
      "【手】[[実装]]（Codex / Copilot）",
      "設計図を貼り付け、[[リアルタイム補完]]で爆速コーディング。",
      "【目】[[検証]]（ChatGPT / [[Claude]]）",
      "「[[セキュリティ]]ホールやバグをレビューして」"
    ],
    details: {
      "設計": "要件と構成を決める工程。",
      "GPT-4o": "論理構成と設計支援に強いモデル。",
      "クラス図": "構造を図で表した設計図。",
      "機能一覧": "必要な機能を列挙したリスト。",
      "実装": "コードとして形にする工程。",
      "リアルタイム補完": "エディタでの高速補完機能。",
      "検証": "バグや脆弱性をチェックする工程。",
      "Claude": "慎重なレビューに強いAI。",
      "セキュリティ": "脆弱性や危険を避ける視点。"
    }
  },
  {
    id: 401,
    section: "黄金パターン",
    navLabel: "黄金パターン（解説）",
    badge: "解説",
    title: "具体例：Unity 2Dアクション開発",
    headline: "設計→実装→検証を回す",
    goal: "黄金パターンの具体像を掴む。",
    paragraphs: [
      "Geminiに「[[最新Unity]]で2Dアクションを作る手順」を質問。",
      "手順をVS Codeに貼り付け、Copilotで実装を加速。",
      "動かない部分をChatGPTに渡し、原因を特定。",
      "最後にClaudeで[[安全性]]や設計の穴をレビュー。"
    ],
    details: {
      "最新Unity": "バージョン差で手順が変わる点に注意。",
      "安全性": "見落としやリスクを最後に潰す視点。"
    }
  },
  {
    id: 5,
    section: "ワークフロー",
    navLabel: "具体例",
    badge: "講義",
    title: "ワークフローの具体例",
    headline: "情報のバトンをつなぐ",
    goal: "複数AIをつないだ流れを理解する。",
    paragraphs: [
      "例：Pythonで[[データ分析]]をする場合。",
      "[[Gemini]]: 最新[[データセット]]を探し、分析手法を提案。",
      "[[Codex]]: 提案された手法で[[グラフ描画]]コードを作成。",
      "[[ChatGPT]]: グラフの[[解釈]]が正しいかを検証。",
      "重要なのは[[情報のバトン]]をつなぐ感覚。"
    ],
    details: {
      "データ分析": "データから意味を読み取る作業。",
      "Gemini": "検索・資料整理に強いAI。",
      "データセット": "分析対象となるデータ群。",
      "Codex": "実装と補完を得意とするAI。",
      "グラフ描画": "可視化コードを作る工程。",
      "ChatGPT": "論理的な検証に強いAI。",
      "解釈": "結果の意味付け。",
      "情報のバトン": "役割間で情報を受け渡すこと。"
    }
  },
  {
    id: 6,
    section: "高度テクニック",
    navLabel: "クロスバリデーション",
    badge: "講義",
    title: "AI同士を戦わせる「クロスバリデーション」",
    headline: "磨き上げてから人間が決める",
    goal: "AI同士で品質を高める手法を理解する。",
    paragraphs: [
      "AI(A)に[[解答作成]]を依頼。",
      "AI(B)に「矛盾点を[[指摘]]して」と依頼。",
      "AI(C)に[[清書]]させて品質を高める。",
      "この[[クロスバリデーション]]で精度が上がる。",
      "人間は最後に[[採用]]だけを決める。"
    ],
    details: {
      "解答作成": "最初の案を作る工程。",
      "指摘": "矛盾や穴を見つける作業。",
      "清書": "内容を整えて完成度を上げる工程。",
      "クロスバリデーション": "複数AIで相互チェックする方法。",
      "採用": "最終的に採用するか判断すること。"
    }
  },
  {
    id: 601,
    section: "高度テクニック",
    navLabel: "クロスバリ（解説）",
    badge: "解説",
    title: "具体例：A君→B君→C君の磨き上げ",
    headline: "AI同士で品質を上げる",
    goal: "クロスバリデーションの流れを具体化する。",
    paragraphs: [
      "AI(A)が小論文を[[作成]]する。",
      "AI(B)が[[採点]]し、矛盾点を指摘する。",
      "AI(C)が指摘を反映して[[清書]]する。",
      "人間は最後の完成版だけを確認する。"
    ],
    details: {
      "作成": "最初のアウトプットを作る工程。",
      "採点": "評価基準でチェックする工程。",
      "清書": "完成度を高める工程。"
    }
  },
  {
    id: 7,
    section: "人間の役割",
    navLabel: "人間の役割",
    badge: "講義",
    title: "【重要】人間（君たち）の役割は何？",
    headline: "意思決定を担うディレクター",
    goal: "人間が担うべき役割を理解する。",
    paragraphs: [
      "AIが増えても最後に[[採用判断]]するのは人間。",
      "[[監督]]として、意見の矛盾を見抜く[[論理力]]が必要。",
      "AIに渡す[[指示]]の解像度を上げる。",
      "役割は「コードを書く人」から「[[意思決定]]する人」へ。"
    ],
    details: {
      "採用判断": "どの案を使うか決める行為。",
      "監督": "全体を見て判断する役割。",
      "論理力": "主張の正しさを見抜く力。",
      "指示": "AIに渡すプロンプト。",
      "意思決定": "最終的な選択を行うこと。"
    }
  },
  {
    id: 701,
    section: "人間の役割",
    navLabel: "人間の役割（解説）",
    badge: "解説",
    title: "人間が見る3つの観点",
    headline: "最後の品質保証は人間の仕事",
    goal: "判断基準を明確にする。",
    paragraphs: [
      "観点1: [[正確性]]（事実と矛盾しないか）。",
      "観点2: [[実行可能性]]（現実的に実装できるか）。",
      "観点3: [[リスク]]（安全性や影響範囲）。",
      "この3点を押さえると、迷いが減る。"
    ],
    details: {
      "正確性": "事実・仕様に合っているか。",
      "実行可能性": "今の環境で実行できるか。",
      "リスク": "副作用や安全面の懸念。"
    }
  },
  {
    id: 8,
    section: "まとめ",
    navLabel: "まとめ",
    badge: "講義",
    title: "まとめ",
    headline: "AIはチームメンバー",
    goal: "学びを行動に変える。",
    paragraphs: [
      "AIは「[[ツール]]」ではなく「[[チームメンバー]]」。",
      "1つのAIに固執せず[[複数視点]]を取り入れる。",
      "作る作業はAIに任せ、君は[[考える]]ことに集中。",
      "メッセージ: 「オーケストラの指揮者」の感覚を身につけよう。"
    ],
    details: {
      "ツール": "目的達成のための手段。",
      "チームメンバー": "一緒に働く仲間としてのAI。",
      "複数視点": "異なる視点を取り入れる姿勢。",
      "考える": "人間が担う意思決定の役割。"
    }
  }
];

const navList = document.getElementById("multimodal-nav");
const multimodalTitle = document.getElementById("multimodal-title");
const multimodalHeadline = document.getElementById("multimodal-headline");
const multimodalBody = document.getElementById("multimodal-body");
const multimodalChips = document.getElementById("multimodal-chips");
const multimodalKeyword = document.getElementById("multimodal-keyword");
const multimodalText = document.getElementById("multimodal-text");
const multimodalGoal = document.getElementById("multimodal-goal");
const multimodalSection = document.getElementById("multimodal-section");
const multimodalVariant = document.getElementById("multimodal-variant");
const multimodalNumber = document.getElementById("multimodal-number");
const progressNumber = document.getElementById("multimodal-progress-number");
const progressTotal = document.getElementById("multimodal-progress-total");
const progressBar = document.getElementById("multimodal-progress-bar");
const prevBtn = document.getElementById("multimodal-prev");
const nextBtn = document.getElementById("multimodal-next");
const sizeButtons = document.querySelectorAll(".size-btn");
const zoomBtn = document.getElementById("multimodal-zoom-btn");
const fxTheme = document.getElementById("multimodal-fx-theme");
const fxBg = document.getElementById("multimodal-fx-bg");
const fxBoard = document.getElementById("multimodal-fx-board");
const fxTransition = document.getElementById("multimodal-fx-transition");
const focusBtn = document.getElementById("multimodal-focus-btn");
const fullscreenBtn = document.getElementById("multimodal-fullscreen-btn");
const ttsBtn = document.getElementById("multimodal-tts-btn");
const ttsAutoBtn = document.getElementById("multimodal-tts-auto-btn");
const ttsRate = document.getElementById("multimodal-tts-rate");
const ttsPitch = document.getElementById("multimodal-tts-pitch");
const ttsVoice = document.getElementById("multimodal-tts-voice");
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
  multimodalSlides.forEach((slide, index) => {
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
  const slide = multimodalSlides[currentIndex];
  if (!slide.details[key]) {
    return;
  }
  currentKeyword = key;
  multimodalKeyword.textContent = key;
  multimodalText.textContent = slide.details[key];
  multimodalGoal.textContent = slide.goal;
  highlightKeyword(key);

  detailBox.classList.remove("pulse");
  void detailBox.offsetWidth;
  detailBox.classList.add("pulse");
};

const renderSlide = () => {
  const slide = multimodalSlides[currentIndex];
  multimodalTitle.textContent = slide.title;
  multimodalHeadline.textContent = slide.headline;
  multimodalSection.textContent = slide.section;
  multimodalVariant.textContent = slide.badge ?? "講義";
  multimodalNumber.textContent = toIndex(currentIndex);

  const bodyHtml = slide.paragraphs
    .map((text) => {
      const safe = text.replace(/\[\[(.+?)\]\]/g, (_match, key) => {
        return `<span class=\"kw\" data-key=\"${key}\">${key}</span>`;
      });
      return `<p>${safe}</p>`;
    })
    .join("");

  multimodalBody.innerHTML = bodyHtml;

  multimodalChips.innerHTML = "";
  Object.keys(slide.details).forEach((key) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.dataset.key = key;
    chip.textContent = key;
    chip.addEventListener("click", () => selectKeyword(key));
    multimodalChips.appendChild(chip);
  });

  multimodalBody.querySelectorAll(".kw").forEach((el) => {
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
  progressTotal.textContent = String(multimodalSlides.length).padStart(2, "0");
  progressBar.style.width = `${((currentIndex + 1) / multimodalSlides.length) * 100}%`;

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
      nextIndex = multimodalSlides.length - 1;
    } else if (index >= multimodalSlides.length) {
      nextIndex = 0;
    }
  } else {
    if (index < 0) {
      nextIndex = 0;
    } else if (index >= multimodalSlides.length) {
      nextIndex = multimodalSlides.length - 1;
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
    multimodalTitle.textContent,
    multimodalHeadline.textContent,
    multimodalBody.innerText
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
      if (nextIndex >= multimodalSlides.length) {
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




