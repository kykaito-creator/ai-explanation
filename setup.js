const setupSlides = [
  {
    id: 0,
    section: "オリエンテーション",
    navLabel: "オリエンテーション",
    badge: "講義",
    title: "この授業でできること",
    headline: "環境構築の全体像を掴む",
    goal: "対象者と到達点を明確にする。",
    paragraphs: [
      "対象: [[環境構築初心者]]〜[[現場で詰まりたくない人]]。",
      "ゴール: [[3層構造]]を理解し、[[最短で動かす方法]]が分かる。",
      "やること: OS・GPU・CLIの[[詰まりやすい点]]を整理。",
      "最後に[[チェックリスト]]で自分の環境を点検する。"
    ],
    details: {
      "環境構築初心者": "セットアップ経験が少ない人。",
      "現場で詰まりたくない人": "トラブル対応を減らしたい人。",
      "3層構造": "OS・ドライバ・実行環境の3層。",
      "最短で動かす方法": "必要最小限で動かす手順。",
      "詰まりやすい点": "初心者が躓きやすいポイント。",
      "チェックリスト": "確認項目を順に見る仕組み。"
    }
  },
  {
    id: 1,
    section: "導入",
    navLabel: "導入",
    badge: "講義",
    title: "指揮官のためのAI環境構築スタートガイド",
    headline: "2026年、AIは「使う」から「飼い慣らす」へ",
    goal: "AIが動くための土台をイメージできるようにする。",
    paragraphs: [
      "AIは魔法のアプリではない。[[PC]]という土地に[[環境構築]]で建物を建て、[[電源]]を通して初めて動く。",
      "インストール手順だけでなく、[[構造理解]]を持つことがプロの第一歩。",
      "この講義は「操作方法」ではなく、現場で通用する[[考え方]]を身につけることが目的。"
    ],
    details: {
      "PC": "AIが動くための物理的な土台。OSとハードが揃って初めて動く。",
      "環境構築": "OS・ドライバ・実行環境を整える作業。",
      "電源": "電気そのものではなく「正しい設定が通ること」の比喩。",
      "構造理解": "仕組みの層を知ること。原因切り分けが速くなる。",
      "考え方": "何が原因かを判断する軸。指揮官の武器。"
    }
  },
  {
    id: 101,
    section: "導入",
    navLabel: "導入（解説）",
    badge: "解説",
    title: "AIを動かす3層構造",
    headline: "OS・ドライバ・実行環境",
    goal: "何が欠けると動かないかを整理する。",
    paragraphs: [
      "AIが動くには[[OS]]、[[ドライバ]]、[[実行環境]]の3層が必要。",
      "どれか1つでも欠けると「起動しない」「遅い」「落ちる」が起きる。",
      "まず全体像を掴むと、エラーの切り分けが速くなる。"
    ],
    details: {
      "OS": "AIが動く舞台。WindowsかLinuxかで手順が変わる。",
      "ドライバ": "GPUを動かすための基盤ソフト。",
      "実行環境": "Pythonやライブラリなど、AIを実際に走らせる仕組み。"
    }
  },
  {
    id: 900,
    section: "分岐ガイド",
    navLabel: "OS/スペック分岐",
    badge: "講義",
    title: "自分の環境はどっち？",
    headline: "最短構成と推奨構成",
    goal: "環境に応じた最短ルートを理解する。",
    paragraphs: [
      "CPU中心なら[[最短構成]]: ブラウザAI + 小さなタスクから開始。",
      "GPUありなら[[推奨構成]]: [[WSL2]] + [[CUDA]] + 8GB以上の[[VRAM]]。",
      "迷ったら[[最短で動く]]ルートで検証し、後から強化。",
      "目的が決まったら[[必要スペック]]を逆算する。"
    ],
    details: {
      "最短構成": "最小手順で動かす構成。",
      "推奨構成": "安定して動く標準構成。",
      "WSL2": "WindowsにLinuxを同居させる仕組み。",
      "CUDA": "GPUでAIを動かすための基盤。",
      "VRAM": "GPUのメモリ容量。",
      "最短で動く": "まず動かして検証する考え方。",
      "必要スペック": "目的から逆算した必要性能。"
    }
  },
  {
    id: 2,
    section: "OSとWSL2",
    navLabel: "OSとWSL2",
    badge: "講義",
    title: "AIが踊る「舞台」を整える",
    headline: "Windowsの中にAI専用の部屋を作る",
    goal: "LinuxとWSL2の役割を理解する。",
    paragraphs: [
      "[[Linux]]はAI開発の標準OS。Windows利用者は[[WSL2]]でLinuxを同居させる。",
      "[[Ubuntu]]は代表的なLinux。現場では「Ubuntuで動くか」が合言葉になる。",
      "OSが違うと命令が通らない。[[改行コード]]の違いがエラーの原因になる。"
    ],
    details: {
      "Linux": "AI開発の標準OS。ツールの情報量が最も多い。",
      "WSL2": "Windowsの中でLinuxを動かす仕組み。",
      "Ubuntu": "Linuxの代表的ディストリビューション。",
      "改行コード": "WindowsはCRLF、LinuxはLF。ズレると実行失敗。"
    }
  },
  {
    id: 102,
    section: "OSとWSL2",
    navLabel: "OSとWSL2（解説）",
    badge: "解説",
    title: "OSの違いで詰まりやすい点",
    headline: "改行・権限・パス",
    goal: "WindowsとLinuxのズレを知る。",
    paragraphs: [
      "WindowsはCRLF、LinuxはLF。[[改行コード]]の差でスクリプトが動かない。",
      "「Permission denied」は[[権限]]の問題。[[sudo]]で解決する場合がある。",
      "WSL2はWindowsとは別のLinux。[[PATH]]やフォルダ場所を再確認。"
    ],
    details: {
      "改行コード": "テキストの区切り方がOSで違う。",
      "権限": "ファイルやコマンドの実行許可。",
      "sudo": "管理者権限で実行するコマンド。",
      "PATH": "コマンドの場所をOSに教える設定。"
    }
  },
  {
    id: 3,
    section: "CLIとパス",
    navLabel: "CLIとパス",
    badge: "講義",
    title: "コンピュータへの「話し方」",
    headline: "マウスを捨て、文字で指示する",
    goal: "CLIとPATHの意味を理解する。",
    paragraphs: [
      "AI運用は[[CLI]]（[[ターミナル]]）が基本。",
      "「コマンドが見つからない」は[[PATH]]が通っていないサイン。",
      "「Permission denied」は[[権限]]が不足している可能性が高い。"
    ],
    details: {
      "CLI": "コマンドで操作する黒い画面。",
      "ターミナル": "CLIを操作するアプリ。",
      "PATH": "OSがコマンドを探す検索ルート。",
      "権限": "実行できるかどうかの許可。"
    }
  },
  {
    id: 103,
    section: "CLIとパス",
    navLabel: "CLIとパス（解説）",
    badge: "解説",
    title: "ログは戦況報告書",
    headline: "エラーの起点を見つける",
    goal: "ターミナルの読み方を身につける。",
    paragraphs: [
      "エラーは最後の一行だけでなく、[[最初の警告]]を探す。",
      "PATH問題は「場所の問題」、権限問題は「許可の問題」。",
      "迷ったら[[ログ全文]]をコピーして検索する。"
    ],
    details: {
      "最初の警告": "本当の原因が書かれていることが多い。",
      "ログ全文": "前後の文脈が手がかりになる。",
      "PATH": "コマンドの場所が分からない時に疑う。",
      "権限": "実行できない時に疑う。"
    }
  },
  {
    id: 4,
    section: "GPUとVRAM",
    navLabel: "GPUとVRAM",
    badge: "講義",
    title: "AIの筋肉を理解する",
    headline: "速度はGPU、限界はVRAM",
    goal: "GPUとVRAMの関係を理解する。",
    paragraphs: [
      "[[GPU]]はAI計算を並列処理で高速化する筋肉。",
      "[[VRAM]]はGPUの作業机。机に載るサイズまでしか動かない。",
      "[[OOM]]が出たら[[量子化]]やモデル縮小を検討する。"
    ],
    details: {
      "GPU": "AI計算を高速化するパーツ。",
      "VRAM": "モデルを載せる専用メモリ。",
      "OOM": "Out of Memory。VRAM不足のサイン。",
      "量子化": "計算精度を下げてモデルを軽くする技術。"
    }
  },
  {
    id: 104,
    section: "GPUとVRAM",
    navLabel: "GPUとVRAM（解説）",
    badge: "解説",
    title: "OOMの正体と対処",
    headline: "机が足りないという合図",
    goal: "VRAM不足の対処法を知る。",
    paragraphs: [
      "OOMは「Out of Memory」＝机がいっぱいという意味。",
      "対処は[[モデル縮小]]、[[量子化]]、[[バッチサイズ]]の見直し。",
      "GPUを使っていない場合は[[GPU未使用]]の設定ミスを疑う。"
    ],
    details: {
      "モデル縮小": "軽いモデルへ切り替える判断。",
      "量子化": "精度とメモリを交換する技術。",
      "バッチサイズ": "一度に処理する量。増やすほどVRAMを使う。",
      "GPU未使用": "CPU計算になっている状態。設定確認が必要。"
    }
  },
  {
    id: 5,
    section: "CUDAとドライバ",
    navLabel: "CUDAとドライバ",
    badge: "講義",
    title: "翻訳者としてのドライバ",
    headline: "GPUとAIをつなぐ橋",
    goal: "CUDAとドライバの役割を理解する。",
    paragraphs: [
      "[[CUDA]]はGPUをAI計算に使うための翻訳基盤。",
      "ドライバと[[Toolkit]]のバージョン差が不具合の原因になる。",
      "実務では安定重視の[[Studioドライバ]]が選ばれやすい。"
    ],
    details: {
      "CUDA": "NVIDIA GPUを計算に使うための基盤。",
      "Toolkit": "CUDAの開発用ツール群。バージョンが重要。",
      "ドライバ": "GPUをOSに認識させるソフト。",
      "Studioドライバ": "安定性重視のドライバ。実務向け。"
    }
  },
  {
    id: 105,
    section: "CUDAとドライバ",
    navLabel: "CUDAとドライバ（解説）",
    badge: "解説",
    title: "バージョン不一致の見抜き方",
    headline: "合わせるべきは2つ",
    goal: "CUDA関連のトラブル切り分けを知る。",
    paragraphs: [
      "エラー「CUDA version mismatch」は翻訳ルールの不一致。",
      "[[nvidia-smi]]でドライバ、[[nvcc]]でToolkitのバージョンを確認。",
      "揃わない場合はドライバ更新かツール側バージョン変更。"
    ],
    details: {
      "nvidia-smi": "GPUとドライバの状態を確認するコマンド。",
      "nvcc": "CUDA Toolkitのバージョン確認コマンド。",
      "ドライバ": "GPUの基本動作を支える基盤。",
      "Toolkit": "CUDAの開発ツール群。"
    }
  },
  {
    id: 6,
    section: "仮想環境",
    navLabel: "仮想環境",
    badge: "講義",
    title: "AIの「部屋割り」を徹底する",
    headline: "昨日まで動いていたのにを防ぐ",
    goal: "仮想環境の意味を理解する。",
    paragraphs: [
      "[[Python]]はAI開発の中心言語。バージョン指定が重要。",
      "[[venv]]や[[Conda]]でプロジェクトごとに部屋を分ける。",
      "[[依存関係]]が混ざると環境が壊れる。"
    ],
    details: {
      "Python": "AI開発で最も使われる言語。",
      "venv": "Python標準の仮想環境。",
      "Conda": "環境管理ツール。科学計算でも定番。",
      "依存関係": "ライブラリ同士の組み合わせ。ズレると壊れる。"
    }
  },
  {
    id: 106,
    section: "仮想環境",
    navLabel: "仮想環境（解説）",
    badge: "解説",
    title: "混ぜないが鉄則",
    headline: "pip と Conda の扱い",
    goal: "環境が壊れる原因を減らす。",
    paragraphs: [
      "[[pip]]と[[Conda]]を混ぜると依存が崩れることがある。",
      "[[requirements.txt]]や[[environment.yml]]で再現性を担保する。",
      "現場では「Python 3.10固定」など[[バージョン指定]]が頻出。"
    ],
    details: {
      "pip": "Pythonのパッケージ管理ツール。",
      "Conda": "環境とパッケージをまとめて管理。",
      "requirements.txt": "pip用の依存関係リスト。",
      "environment.yml": "Conda用の環境定義ファイル。",
      "バージョン指定": "再現性を確保するために必須。"
    }
  },
  {
    id: 7,
    section: "デプロイと運用",
    navLabel: "デプロイと運用",
    badge: "講義",
    title: "開発機から「本番環境」へ",
    headline: "どこでも同じように動く箱",
    goal: "デプロイとコンテナの役割を知る。",
    paragraphs: [
      "[[Docker]]は環境を丸ごと箱に詰める技術。",
      "開発PCとサーバーで同じ動きを再現できる。",
      "APIの入口となる[[エンドポイント]]を設計し、公開後は[[監視]]と[[評価]]を続ける。"
    ],
    details: {
      "Docker": "環境ごと再現できるコンテナ技術。",
      "エンドポイント": "APIの入口。外部から呼び出す窓口。",
      "監視": "稼働状況とエラーを見守る作業。",
      "評価": "精度や品質が落ちていないかを確認する。"
    }
  },
  {
    id: 107,
    section: "デプロイと運用",
    navLabel: "デプロイと運用（解説）",
    badge: "解説",
    title: "運用で見る3つの指標",
    headline: "劣化を見逃さない",
    goal: "運用フェーズの注意点を理解する。",
    paragraphs: [
      "本番では[[レスポンス速度]]と[[エラー率]]を常に確認する。",
      "モデルの精度が落ちる[[モデルドリフト]]に注意。",
      "異常時に備えた[[ロールバック]]手順を用意する。"
    ],
    details: {
      "レスポンス速度": "遅延が増えるとユーザー体験が落ちる。",
      "エラー率": "失敗率の上昇は異常のサイン。",
      "モデルドリフト": "時間と共に精度が落ちる現象。",
      "ロールバック": "不具合時に元に戻す仕組み。"
    }
  },
  {
    id: 901,
    section: "つまずきポイント",
    navLabel: "つまずきポイント",
    badge: "講義",
    title: "詰まりやすい場所と復旧",
    headline: "よくある失敗を先に潰す",
    goal: "初心者が詰まりやすいポイントを理解する。",
    paragraphs: [
      "インストール失敗は[[バージョン不一致]]が最多。まず[[Python]]と[[CUDA]]を確認。",
      "GPUが認識しない時は[[ドライバ]]と[[WSL設定]]を見直す。",
      "動かない時は[[ログ]]の[[最初の警告]]を見る。",
      "不安なら[[最小構成]]に戻して一つずつ確認する。"
    ],
    details: {
      "バージョン不一致": "依存関係のズレが原因で起きる失敗。",
      "Python": "AI開発の中心言語。",
      "CUDA": "GPU計算の基盤ソフト。",
      "ドライバ": "GPUを動かすためのソフト。",
      "WSL設定": "WindowsとLinuxの連携設定。",
      "ログ": "エラーや進行状況の記録。",
      "最初の警告": "原因の手がかりになりやすい行。",
      "最小構成": "最小手順で動く状態に戻すこと。"
    }
  },
  {
    id: 902,
    section: "ミニ演習",
    navLabel: "ミニ演習",
    badge: "講義",
    title: "環境チェックリストを作る",
    headline: "自分のPCを点検する",
    goal: "手元環境を見直す。",
    paragraphs: [
      "項目: [[OS]] / [[GPU]] / [[VRAM]] / [[Python]] / [[PATH]]。",
      "各項目の「確認方法」を1行で書く。",
      "不明点があれば[[調査メモ]]として残す。",
      "このリストが次回の時短になる。"
    ],
    details: {
      "OS": "WindowsかLinuxかの確認。",
      "GPU": "搭載GPUの型番確認。",
      "VRAM": "GPUのメモリ容量。",
      "Python": "バージョンとインストール有無。",
      "PATH": "コマンドが通るかの確認。",
      "調査メモ": "後で調べるためのメモ。"
    }
  },
  {
    id: 903,
    section: "用語ミニ辞典",
    navLabel: "用語ミニ辞典",
    badge: "講義",
    title: "今日よく出てきた言葉",
    headline: "ここだけ押さえれば迷わない",
    goal: "主要用語を短く整理する。",
    paragraphs: [
      "[[OS]]: すべての土台となるシステム。",
      "[[ドライバ]]: GPUを動かす基盤ソフト。",
      "[[仮想環境]]: 依存関係を分ける部屋。",
      "[[PATH]]: コマンドの場所を教える設定。"
    ],
    details: {
      "OS": "Windows/Linuxなどの基盤。",
      "ドライバ": "GPUを動かすためのソフト。",
      "仮想環境": "プロジェクトごとに分ける環境。",
      "PATH": "コマンド探索の設定。"
    }
  },
  {
    id: 8,
    section: "まとめ",
    navLabel: "まとめ",
    badge: "講義",
    title: "トラブルを突破する3つの問い",
    headline: "迷った時は部屋・机・住所",
    goal: "デバッグの軸を固定する。",
    paragraphs: [
      "[[部屋（仮想環境）]]は合っているか？",
      "[[机（VRAM）]]は足りているか？",
      "[[住所（PATH）]]は通っているか？"
    ],
    details: {
      "部屋（仮想環境）": "正しい環境にいるかを最初に確認。",
      "机（VRAM）": "メモリ不足で止まっていないか。",
      "住所（PATH）": "場所が正しいかを確認する。"
    }
  },
  {
    id: 108,
    section: "まとめ",
    navLabel: "まとめ（解説）",
    badge: "解説",
    title: "順番を守れば迷わない",
    headline: "戻る場所があるだけで強い",
    goal: "現場での切り分け手順を定着させる。",
    paragraphs: [
      "まず[[環境確認]]、次に[[リソース確認]]、最後に[[パス確認]]。",
      "ログは上から読む。[[最初の警告]]が真因。",
      "背伸びせず、確実に次の一歩を進める。"
    ],
    details: {
      "環境確認": "仮想環境が正しいかの確認。",
      "リソース確認": "VRAMや空き容量の確認。",
      "パス確認": "ファイルの場所が正しいかの確認。",
      "最初の警告": "根本原因の手がかり。"
    }
  },
  {
    id: 904,
    section: "次の一歩",
    navLabel: "次の一歩",
    badge: "講義",
    title: "3行まとめ + 次の行動",
    headline: "まずは最短で動かす",
    goal: "学びを行動に変える。",
    paragraphs: [
      "まとめ1: [[環境]]は3層でできている。",
      "まとめ2: 詰まったら[[ログ]]と[[順番]]に戻る。",
      "まとめ3: 小さく動かしてから強化する。",
      "次の行動: 今日中に[[最小構成]]で1回動かす。"
    ],
    details: {
      "環境": "OS・ドライバ・実行環境の総称。",
      "ログ": "エラーや進行の記録。",
      "順番": "環境→リソース→パスの確認順。",
      "最小構成": "最小限の構成で動作確認すること。"
    }
  }
];

const navList = document.getElementById("setup-nav");
const titleEl = document.getElementById("setup-title");
const headlineEl = document.getElementById("setup-headline");
const bodyEl = document.getElementById("setup-body");
const chipsEl = document.getElementById("setup-chips");
const keywordEl = document.getElementById("setup-keyword");
const textEl = document.getElementById("setup-text");
const goalEl = document.getElementById("setup-goal");
const sectionEl = document.getElementById("setup-section");
const variantEl = document.getElementById("setup-variant");
const numberEl = document.getElementById("setup-number");
const progressNumber = document.getElementById("setup-progress-number");
const progressTotal = document.getElementById("setup-progress-total");
const progressBar = document.getElementById("setup-progress-bar");
const prevBtn = document.getElementById("setup-prev");
const nextBtn = document.getElementById("setup-next");
const sizeButtons = document.querySelectorAll(".size-btn");
const zoomBtn = document.getElementById("setup-zoom-btn");
const fxTheme = document.getElementById("setup-fx-theme");
const fxBg = document.getElementById("setup-fx-bg");
const fxBoard = document.getElementById("setup-fx-board");
const fxTransition = document.getElementById("setup-fx-transition");
const focusBtn = document.getElementById("setup-focus-btn");
const fullscreenBtn = document.getElementById("setup-fullscreen-btn");
const ttsBtn = document.getElementById("setup-tts-btn");
const ttsAutoBtn = document.getElementById("setup-tts-auto-btn");
const ttsRate = document.getElementById("setup-tts-rate");
const ttsPitch = document.getElementById("setup-tts-pitch");
const ttsVoice = document.getElementById("setup-tts-voice");
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
  setupSlides.forEach((slide, index) => {
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
  const slide = setupSlides[currentIndex];
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
  const slide = setupSlides[currentIndex];
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
  progressTotal.textContent = String(setupSlides.length).padStart(2, "0");
  progressBar.style.width = `${((currentIndex + 1) / setupSlides.length) * 100}%`;

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
        nextIndex = setupSlides.length - 1;
      } else if (index >= setupSlides.length) {
        nextIndex = 0;
      }
    } else {
      if (index < 0) {
        nextIndex = 0;
      } else if (index >= setupSlides.length) {
        nextIndex = setupSlides.length - 1;
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
    titleEl.textContent,
    headlineEl.textContent,
    bodyEl.innerText
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
        if (nextIndex >= setupSlides.length) {
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
