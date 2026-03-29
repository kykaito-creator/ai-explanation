const roadmapSlides = [
  {
    id: 1,
    section: "OSとシェル",
    navLabel: "OSとシェル",
    badge: "講義",
    title: "AIが動く「土台」と、話し方",
    headline: "WindowsでもLinuxを知る理由",
    goal: "OSの役割と、CLIでの基本操作を理解する。",
    paragraphs: [
      "疑問: Windowsなのに[[Linux]]の話が出るのはなぜ？",
      "実務では『操作はWindows／計算は[[Ubuntu]]』が一般的。",
      "[[WSL2]]はWindowsの中に“本物のLinux”を同居させる技術。",
      "AI運用は[[CLI]]（[[ターミナル]]）で指示を出すのが基本。"
    ],
    details: {
      "Linux": "AI研究や開発の標準OS。情報量も圧倒的に多い。",
      "Ubuntu": "Linuxの代表的なディストリビューション。",
      "WSL2": "Windows上でLinuxを動かす仕組み。",
      "CLI": "コマンドで操作する黒い画面。自動化に強い。",
      "ターミナル": "CLIを操作するためのアプリ。"
    }
  },
  {
    id: 101,
    section: "OSとシェル",
    navLabel: "OSとシェル（解説）",
    badge: "解説",
    title: "現場の会話に強くなる",
    headline: "よく出る言い回しを理解",
    goal: "現場の会話とトラブルの入口を知る。",
    paragraphs: [
      "現場の会話: 「Ubuntuじゃないとライブラリが入らない」→ [[WSL2]]が必要。",
      "現場の会話: 「WSL上でGPU認識してる？」→ Linux側の設定を確認。",
      "CLIのエラーは閉じずに[[最後の数行]]をコピーして検索。",
      "重箱の隅: [[改行コード]]（LF/CRLF）と[[PATH]]が詰まりやすい。"
    ],
    details: {
      "最後の数行": "エラー原因が書かれていることが多い。",
      "改行コード": "WindowsはCRLF、LinuxはLF。ずれると実行失敗。",
      "PATH": "コマンドの場所をOSに知らせる設定。",
      "WSL2": "Windowsの皮をかぶったLinux環境。",
      "GPU認識": "Linux側のドライバ設定が必要。"
    }
  },
  {
    id: 2,
    section: "ハードウェアとドライバ",
    navLabel: "ハードウェアとドライバ",
    badge: "講義",
    title: "AIの「計算速度」と「限界値」",
    headline: "GPUとVRAMが性能を決める",
    goal: "GPU・VRAM・CUDAの役割を理解する。",
    paragraphs: [
      "[[GPU]]はAI計算を並列処理で高速化する心臓部。",
      "[[VRAM]]はGPU専用の作業机。机に載るサイズまでしか動かせない。",
      "[[CUDA]]はNVIDIA GPUをAI計算に使うための翻訳ソフト。",
      "「遅すぎる」はCPU計算になっている可能性が高い。"
    ],
    details: {
      "GPU": "AI推論と学習を高速化するパーツ。",
      "VRAM": "モデルを載せるメモリ。容量が限界を決める。",
      "CUDA": "GPUを計算に使うための基盤ソフト。",
      "CPU": "一般的な計算装置。AIでは遅くなりやすい。"
    }
  },
  {
    id: 102,
    section: "ハードウェアとドライバ",
    navLabel: "ハードウェアとドライバ（解説）",
    badge: "解説",
    title: "エラーが出た時の読み方",
    headline: "現場の会話を翻訳する",
    goal: "GPUまわりの典型トラブルを理解する。",
    paragraphs: [
      "現場の会話: 「計算が遅すぎる」→ [[GPU未使用]]の疑い。",
      "現場の会話: 「Out of Memory (OOM)」→ [[VRAM不足]]。",
      "現場の会話: 「CUDAのバージョンが合わない」→ 翻訳ルールが不一致。",
      "対策は「モデルを小さくする」「ドライバを合わせる」から始める。"
    ],
    details: {
      "GPU未使用": "CPUで計算している状態。設定ミスが原因。",
      "VRAM不足": "机が足りない状態。モデルを軽くする必要がある。",
      "OOM": "Out of Memory。VRAM不足を示すエラー。",
      "CUDA": "ツール側とPC側のバージョン一致が必須。"
    }
  },
  {
    id: 3,
    section: "パッケージ管理と仮想環境",
    navLabel: "パッケージ管理と仮想環境",
    badge: "講義",
    title: "AIの「部屋割り」と「道具箱」",
    headline: "混ざると壊れる",
    goal: "Python・仮想環境・パッケージ管理の重要性を理解する。",
    paragraphs: [
      "[[Python]]はAI開発の中心言語。バージョン指定が重要。",
      "[[仮想環境]]（venv / Conda / Docker）でプロジェクトごとに部屋を分ける。",
      "[[GitHub]]は設計図、[[Hugging Face]]はAIの脳を手に入れる場所。"
    ],
    details: {
      "Python": "AI開発で最も使われる言語。",
      "仮想環境": "依存関係を分離する専用の部屋。",
      "venv": "Python標準の仮想環境。",
      "Conda": "科学計算向けの環境管理。",
      "Docker": "環境ごとパッケージ化する方法。",
      "GitHub": "コード共有の中心。",
      "Hugging Face": "学習済みモデルの倉庫。"
    }
  },
  {
    id: 103,
    section: "パッケージ管理と仮想環境",
    navLabel: "パッケージ管理と仮想環境（解説）",
    badge: "解説",
    title: "現場で使う言葉",
    headline: "会話の意味を理解する",
    goal: "実務で出る指示を理解する。",
    paragraphs: [
      "現場の会話: 「Python 3.10じゃないと動かない」→ [[バージョン指定]]が必要。",
      "現場の会話: 「環境が汚れる」→ 部屋を分けずに混ぜた状態。",
      "現場の会話: 「GitHubからプルして」→ 最新コードを取り込む。",
      "現場の会話: 「モデルはHugging Faceから？」→ 脳の入手元確認。"
    ],
    details: {
      "バージョン指定": "依存のズレを防ぐために必須。",
      "環境が汚れる": "複数のツールを同じ環境で混ぜて壊れる状態。",
      "プル": "リモートの最新コードを取得する操作。",
      "モデル": "AIの知能そのもの。"
    }
  },
  {
    id: 4,
    section: "運用と監視",
    navLabel: "運用と監視",
    badge: "講義",
    title: "動いているかを見える化する",
    headline: "監視が安定運用の近道",
    goal: "リソースとログの見方を知る。",
    paragraphs: [
      "モデルは重い。まず[[ディスク容量]]と[[読み込み速度]]を確保する。",
      "GPUの状態は[[nvidia-smi]]やOSのモニタで確認する。",
      "メモリ/温度/使用率を見て[[ボトルネック]]を判断する。",
      "オンライン取得が必要なら[[ネットワーク]]と[[認証]]を確認。"
    ],
    details: {
      "ディスク容量": "モデルは巨大。空き容量不足で止まりやすい。",
      "読み込み速度": "SSDの速度が初回ロードに影響する。",
      "nvidia-smi": "GPU使用率やVRAMを確認できるコマンド。",
      "ボトルネック": "性能の足を引っ張っている部分。",
      "ネットワーク": "プロキシやファイアウォールで詰まることがある。",
      "認証": "Hugging Faceなどはトークンが必要な場合がある。"
    }
  },
  {
    id: 104,
    section: "運用と監視",
    navLabel: "運用と監視（解説）",
    badge: "解説",
    title: "最低限のチェック手順",
    headline: "動かない前に見る",
    goal: "トラブルの芽を早く見つける。",
    paragraphs: [
      "起動前: [[空き容量]]・[[ドライバ]]・[[モデル配置]]を確認。",
      "動作中: [[GPU使用率]]・[[VRAM使用量]]・[[温度]]を見る。",
      "通信系: [[HFトークン]]や[[プロキシ]]を確認。",
      "ログは上から読む。[[最初の警告]]が原因。"
    ],
    details: {
      "空き容量": "不足するとロードに失敗する。",
      "ドライバ": "CUDAと合わせる必要がある。",
      "モデル配置": "正しいフォルダに置かれているか。",
      "GPU使用率": "GPUで計算できているかを確認。",
      "VRAM使用量": "不足していないかを確認。",
      "温度": "高温だと性能が落ちる。",
      "HFトークン": "Hugging Faceの認証トークン。",
      "プロキシ": "社内ネットワークで必要になることがある。",
      "最初の警告": "根本原因が書かれていることが多い。"
    }
  },
  {
    id: 5,
    section: "指揮官へのアドバイス",
    navLabel: "指揮官へのアドバイス",
    badge: "講義",
    title: "トラブル時の3点チェック",
    headline: "部屋・机・住所を確認せよ",
    goal: "現場で迷わない確認軸を作る。",
    paragraphs: [
      "[[環境（部屋）]]は合っているか？（正しい仮想環境に入っているか）",
      "[[リソース（机）]]は足りているか？（VRAM不足ではないか）",
      "[[パス（住所）]]は正しいか？（場所を間違えていないか）",
      "この3点がデバッグの入口。デプロイは“公開と運用”の別章で扱う。"
    ],
    details: {
      "環境（部屋）": "仮想環境が正しいかを最初に確認。",
      "リソース（机）": "VRAM不足で止まっていないかを確認。",
      "パス（住所）": "ファイルやフォルダの場所が合っているか。",
      "デプロイ": "サービスとして公開・運用するフェーズ。"
    }
  },
  {
    id: 105,
    section: "指揮官へのアドバイス",
    navLabel: "指揮官へのアドバイス（解説）",
    badge: "解説",
    title: "超基礎が会話を滑らかにする",
    headline: "順番を守れば迷わない",
    goal: "エンジニアとの会話がスムーズになる基礎を固める。",
    paragraphs: [
      "この3つが頭にあるだけで、会話が圧倒的にスムーズになる。",
      "まず[[環境確認]]、次に[[リソース確認]]、最後に[[パス確認]]。",
      "詰まったら順番を崩さずに戻る。",
      "背伸びせず、確実に次の一歩を進む。"
    ],
    details: {
      "環境確認": "正しい仮想環境で動かしているかを確認する。",
      "リソース確認": "VRAMや空き容量の確認。",
      "パス確認": "作業対象の場所が正しいかを確認する。"
    }
  }
];

const navList = document.getElementById("roadmap-nav");
const titleEl = document.getElementById("roadmap-title");
const headlineEl = document.getElementById("roadmap-headline");
const bodyEl = document.getElementById("roadmap-body");
const chipsEl = document.getElementById("roadmap-chips");
const keywordEl = document.getElementById("roadmap-keyword");
const textEl = document.getElementById("roadmap-text");
const goalEl = document.getElementById("roadmap-goal");
const sectionEl = document.getElementById("roadmap-section");
const variantEl = document.getElementById("roadmap-variant");
const numberEl = document.getElementById("roadmap-number");
const progressNumber = document.getElementById("roadmap-progress-number");
const progressTotal = document.getElementById("roadmap-progress-total");
const progressBar = document.getElementById("roadmap-progress-bar");
const prevBtn = document.getElementById("roadmap-prev");
const nextBtn = document.getElementById("roadmap-next");
const sizeButtons = document.querySelectorAll(".size-btn");
const focusBtn = document.getElementById("roadmap-focus-btn");
const fullscreenBtn = document.getElementById("roadmap-fullscreen-btn");
const appEl = document.querySelector(".app");
const detailBox = document.querySelector(".detail-inner");
const slideEl = document.querySelector(".slide");

let currentIndex = 0;
let currentKeyword = null;

const toIndex = (index) => String(index + 1).padStart(2, "0");

const buildNav = () => {
  navList.innerHTML = "";
  roadmapSlides.forEach((slide, index) => {
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
  const slide = roadmapSlides[currentIndex];
  if (!slide.details[key]) {
    return;
  }
  currentKeyword = key;
  keywordEl.textContent = key;
  textEl.textContent = slide.details[key];
  goalEl.textContent = slide.goal;
  highlightKeyword(key);

  detailBox.classList.remove("pulse");
  void detailBox.offsetWidth;
  detailBox.classList.add("pulse");
};

const renderSlide = () => {
  const slide = roadmapSlides[currentIndex];
  titleEl.textContent = slide.title;
  headlineEl.textContent = slide.headline;
  sectionEl.textContent = slide.section;
  variantEl.textContent = slide.badge ?? "講義";
  numberEl.textContent = toIndex(currentIndex);

  const bodyHtml = slide.paragraphs
    .map((text) => {
      const safe = text.replace(/\[\[(.+?)\]\]/g, (_match, key) => {
        return `<span class=\"kw\" data-key=\"${key}\">${key}</span>`;
      });
      return `<p>${safe}</p>`;
    })
    .join("");

  bodyEl.innerHTML = bodyHtml;

  chipsEl.innerHTML = "";
  Object.keys(slide.details).forEach((key) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.dataset.key = key;
    chip.textContent = key;
    chip.addEventListener("click", () => selectKeyword(key));
    chipsEl.appendChild(chip);
  });

  bodyEl.querySelectorAll(".kw").forEach((el) => {
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
  progressTotal.textContent = String(roadmapSlides.length).padStart(2, "0");
  progressBar.style.width = `${((currentIndex + 1) / roadmapSlides.length) * 100}%`;

  slideEl.classList.toggle("is-detail", slide.badge === "解説");
  slideEl.classList.remove("swap");
  void slideEl.offsetWidth;
  slideEl.classList.add("swap");
};

const goTo = (index) => {
  if (index < 0) {
    currentIndex = roadmapSlides.length - 1;
  } else if (index >= roadmapSlides.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
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
