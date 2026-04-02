const masSlides = [
  {
    id: 0,
    section: "イントロダクション",
    navLabel: "イントロ",
    badge: "講義",
    title: "マルチエージェント・シミュレーション（MAS）入門",
    headline: "個の動きから「社会」や「未来」を予測する技術",
    goal: "MASの全体像と価値を掴む。",
    paragraphs: [
      "問い: 「もし、[[何千人]]もの人間が参加する社会実験を、[[ボタン一つ]]で、しかも[[何度もやり直せる]]としたら？」",
      "MASは[[個々の行動]]を積み上げて[[社会現象]]を再現するシミュレーション手法。",
      "結果として政策・都市・ビジネスの[[未来予測]]を、低コストで試せる。"
    ],
    details: {
      "何千人": "大規模な集団を対象にするというスケール感。",
      "ボタン一つ": "現実では難しい実験を高速に回せること。",
      "何度もやり直せる": "条件を変えて比較できるのがシミュレーションの強み。",
      "個々の行動": "一人ひとりの小さなルールや判断。",
      "社会現象": "渋滞、行列、流行など、集団で起こる現象。",
      "未来予測": "将来の傾向や副作用を事前に検証すること。"
    }
  },
  {
    id: 1,
    section: "エージェント基礎",
    navLabel: "エージェントとは",
    badge: "講義",
    title: "そもそも「エージェント」って何？",
    headline: "自律的に判断して動くデジタル上の個体",
    goal: "エージェントの定義と相互作用の感覚を掴む。",
    paragraphs: [
      "エージェントは[[自律的]]に判断して動く[[デジタル上の個体]]。",
      "イメージは[[RPGの村人]]を究極に進化させたもの。",
      "例: 「[[雨が降ってきた]]」とき、あるエージェントは[[傘をさす]]、別のエージェントは[[雨宿りをする]]。",
      "さらに「[[ぶつかりそうなら避ける]]」といった[[相互作用]]が積み重なると、自然に[[右側通行の列]]が生まれる。"
    ],
    details: {
      "自律的": "中央の指示ではなく、自分のルールで動くこと。",
      "デジタル上の個体": "シミュレーション内の一人ひとりの登場人物。",
      "RPGの村人": "決められた行動を持つNPCの比喩。",
      "雨が降ってきた": "周囲の状況の入力例。",
      "傘をさす": "同じ状況でも違う判断をする例。",
      "雨宿りをする": "行動の多様性を示す例。",
      "ぶつかりそうなら避ける": "単純な回避ルール。",
      "相互作用": "エージェント同士や環境との影響し合い。",
      "右側通行の列": "局所ルールが生む秩序の例。"
    }
  },
  {
    id: 2,
    section: "仕組み",
    navLabel: "ボトムアップ",
    badge: "講義",
    title: "マルチエージェント・シミュレーションの仕組み",
    headline: "ボトムアップで全体像を作る",
    goal: "トップダウンとの違いと創発を理解する。",
    paragraphs: [
      "従来の[[トップダウン]]は平均値の数式で全体を計算する。",
      "MASは[[ボトムアップ]]で[[車を1台ずつ]]走らせ、[[個人のクセ]]をルールにする。",
      "その結果、予測していない[[渋滞]]や[[行列]]が自然に発生する。",
      "[[創発（Emergence）]]とは、個別ルールに書いていないのに現れる集団の秩序。[[鳥の群れ]]が巨大な一体のように舞う現象が代表例。"
    ],
    details: {
      "トップダウン": "全体を数式で一括計算する方法。",
      "ボトムアップ": "個体のルールから全体を組み上げる方法。",
      "車を1台ずつ": "個体単位で動かすという発想。",
      "個人のクセ": "イライラして加速するなどの個別ルール。",
      "渋滞": "局所ルールの積み重ねで起きる現象。",
      "行列": "秩序が自然発生する典型例。",
      "創発（Emergence）": "部分にはない性質が全体で現れること。",
      "鳥の群れ": "創発を直感的に示す例。"
    }
  },
  {
    id: 3,
    section: "活用例",
    navLabel: "身近な活用",
    badge: "講義",
    title: "身近な活用例",
    headline: "「もしも」をデジタルで実験する",
    goal: "現実の課題にどう使えるか想像する。",
    paragraphs: [
      "感染症シミュレーションでは、[[活動範囲]]や[[マスク着用率]]、[[接触頻度]]などの条件を詳細に設定できる。",
      "[[施設閉鎖]]や[[ワクチン配布]]の影響を、地域ごとに比較できる。",
      "AI議論の例: [[頑固な論客]]と[[平和主義者]]をAIで作り、議論を[[1,000パターン]]試行する。",
      "これにより、どうすれば[[対立が解消]]するかという[[勝ち筋]]を先に探索できる。"
    ],
    details: {
      "活動範囲": "年齢や職業によって移動範囲が違う設定。",
      "マスク着用率": "地域や世代での行動差を反映する変数。",
      "接触頻度": "人と人が出会う回数の設定。",
      "施設閉鎖": "学校や商業施設の停止などの政策。",
      "ワクチン配布": "接種順や配布速度の違いを検証する。",
      "頑固な論客": "譲らない立場を持つエージェント。",
      "平和主義者": "対立を抑える調整役のエージェント。",
      "1,000パターン": "条件を変えた大量試行。",
      "対立が解消": "合意形成に至る状態。",
      "勝ち筋": "対話がうまく進む条件の組み合わせ。"
    }
  },
  {
    id: 4,
    section: "進化の理由",
    navLabel: "なぜ今",
    badge: "講義",
    title: "なぜ今、注目されているのか？",
    headline: "LLMとの融合で「人格」を持つ",
    goal: "LLMで何が変わったかを理解する。",
    paragraphs: [
      "従来のエージェントは[[数値ルール]]中心で、「空腹度が80以上なら食事」などの条件分岐だけだった。",
      "LLMを積んだエージェントは[[文脈判断]]を行い、「[[伝統を重んじる職人]]なので効率化に慎重」といった[[人格的な判断]]ができる。",
      "さらに[[自律型エージェント]]は曖昧な目標に対し、[[役割分担]]を相談して進める。",
      "必要なら[[ツール利用]]まで自走し、タスクを完遂する段階に来ている。"
    ],
    details: {
      "数値ルール": "閾値や条件分岐だけで動くシンプルな仕組み。",
      "文脈判断": "状況や価値観を加味した判断。",
      "伝統を重んじる職人": "人格の一例。立場が意思決定に影響する。",
      "人格的な判断": "単純な数値では説明できない選好。",
      "自律型エージェント": "目標から自分で行動計画を立てるエージェント。",
      "役割分担": "広告担当、調査担当などを自律的に決めること。",
      "ツール利用": "ブラウザや画像生成など外部ツールを使うこと。"
    }
  },
  {
    id: 5,
    section: "まとめ",
    navLabel: "まとめ",
    badge: "講義",
    title: "MASが変える未来",
    headline: "複雑な社会を読み解くデジタルな顕微鏡",
    goal: "MASの価値を一言で説明できるようにする。",
    paragraphs: [
      "MASは[[他者への共感]]や[[合意形成]]のトレーニングにもなる。",
      "異なる価値観を持つ人の思考をAIで再現し、対話の「[[安全な練習場]]」を作れる。",
      "MASは単なる予測ツールではなく、[[社会の動向]]や[[人の心]]を解き明かす[[デジタル顕微鏡]]である。",
      "最後に: 小さな世界でルールを作り、[[仮説検証]]を回してみよう。"
    ],
    details: {
      "他者への共感": "自分と違う価値観を理解する力。",
      "合意形成": "対立する意見をまとめるプロセス。",
      "安全な練習場": "現実の衝突を避けて試せる場所。",
      "社会の動向": "政策・市場・流行などの動き。",
      "人の心": "感情や価値観といった内面の要素。",
      "デジタル顕微鏡": "複雑な現象を観察するための比喩。",
      "仮説検証": "条件を変えて結果を比較する作業。"
    }
  },
  {
    id: 6,
    section: "導入と運用",
    navLabel: "導入全体像",
    badge: "講義",
    title: "MAS導入の全体ロードマップ",
    headline: "設計→検証→運用の3レイヤーで考える",
    goal: "導入から運用までの流れを俯瞰する。",
    paragraphs: [
      "Step1: [[目的定義]]と[[意思決定ポイント]]を明確にする。",
      "Step2: [[エージェント設計]]と[[環境設計]]でモデルを構築する。",
      "Step3: [[検証]]で現実とのズレを確認し、[[運用ループ]]に入る。",
      "必要なことは「質問の整理」「モデル化」「検証」「更新」の4本柱。"
    ],
    details: {
      "目的定義": "何を予測・評価したいかを決める。",
      "意思決定ポイント": "誰が何を判断するためのモデルかを固定する。",
      "エージェント設計": "個体の行動ルールやタイプの設計。",
      "環境設計": "地図・ルール・制約などの世界設定。",
      "検証": "結果が妥当かをチェックする工程。",
      "運用ループ": "更新→再計算→意思決定を繰り返す運用。"
    }
  },
  {
    id: 7,
    section: "導入と運用",
    navLabel: "Step1 目的",
    badge: "講義",
    title: "Step1: 目的と評価指標を固める",
    headline: "「何を決めるためのMASか？」を言語化する",
    goal: "目的の曖昧さをなくし、評価軸を揃える。",
    paragraphs: [
      "最初に[[問いの形]]を決める。「どの政策が渋滞を減らすか？」などの形にする。",
      "次に[[評価指標]]を設定する。例: 平均移動時間、感染者数、満足度。",
      "[[期間設定]]（1週間/1年など）と[[範囲設定]]（都市全体/特定地区）を決める。",
      "意思決定者・利用者など[[関係者の合意]]を取ってから設計に進む。"
    ],
    details: {
      "問いの形": "シミュレーションの目的を一文で言える状態。",
      "評価指標": "成功・失敗を測る具体的な数値。",
      "期間設定": "いつまでの変化を見るかの時間軸。",
      "範囲設定": "地理や対象集団のスコープ。",
      "関係者の合意": "誰のためのモデルかを揃えること。"
    }
  },
  {
    id: 8,
    section: "導入と運用",
    navLabel: "Step2 設計",
    badge: "講義",
    title: "Step2: モデル設計（エージェントと環境）",
    headline: "現実を「ルール」と「世界」に翻訳する",
    goal: "設計で迷わないための観点を理解する。",
    paragraphs: [
      "エージェントは[[タイプ分け]]し、年齢・職業・価値観などを持たせる。",
      "行動は[[ルール化]]する。「混雑度が高いと避ける」などの単純ルールで始める。",
      "環境は[[地図データ]]や[[制約条件]]（道路容量、営業時間など）を設定する。",
      "初期状態は[[初期分布]]として明示し、データが足りない部分は[[仮定]]を記録する。"
    ],
    details: {
      "タイプ分け": "エージェントの多様性を表現する分類。",
      "ルール化": "行動をif-thenで記述すること。",
      "地図データ": "都市や施設配置などの空間情報。",
      "制約条件": "現実の制限をモデルに反映すること。",
      "初期分布": "開始時点の人口・位置・状態の配置。",
      "仮定": "データ不足を補う前提。必ず記録する。"
    }
  },
  {
    id: 9,
    section: "導入と運用",
    navLabel: "Step3 検証",
    badge: "講義",
    title: "Step3: 検証とチューニング",
    headline: "現実データと照らしてズレを減らす",
    goal: "信頼できるモデルにするための検証観点を理解する。",
    paragraphs: [
      "まず[[整合性チェック]]で「当たり前の結果」が出るか確認する。",
      "次に[[過去データ]]と比較し、再現性を評価する。",
      "[[感度分析]]で「どのパラメータが結果に強く効くか」を把握する。",
      "ズレが大きい場合は[[ルール修正]]や[[データ補強]]を行う。"
    ],
    details: {
      "整合性チェック": "直感と一致するかの初期確認。",
      "過去データ": "現実の観測データで妥当性を見る。",
      "感度分析": "入力変化に対する結果の変化を調べる。",
      "ルール修正": "行動ルールや仮定の見直し。",
      "データ補強": "足りないデータを追加して精度を上げる。"
    }
  },
  {
    id: 10,
    section: "導入と運用",
    navLabel: "Step4 運用",
    badge: "講義",
    title: "Step4: 運用と改善ループ",
    headline: "「一度作って終わり」にしない",
    goal: "運用フェーズで必要な管理項目を理解する。",
    paragraphs: [
      "運用では[[シナリオ更新]]と[[定期再計算]]を行い、状況変化に追随する。",
      "[[監視指標]]を決め、結果が現実とかけ離れたらアラートを出す。",
      "[[バージョン管理]]で「どの条件・データで出た結果か」を追跡可能にする。",
      "最後に[[説明責任]]を果たすため、仮定・限界・不確実性を明示する。"
    ],
    details: {
      "シナリオ更新": "新しい政策や外部要因を反映する更新。",
      "定期再計算": "時間経過に合わせて再シミュレーションする。",
      "監視指標": "運用中に見るべき品質・差分の指標。",
      "バージョン管理": "モデル・データ・パラメータの履歴管理。",
      "説明責任": "結果の根拠と限界を示す姿勢。"
    }
  },
  {
    id: 11,
    section: "導入と運用",
    navLabel: "実装準備",
    badge: "講義",
    title: "導入準備チェックリスト（ガチ準備）",
    headline: "データ・ルール・意思決定者を先に揃える",
    goal: "MAS導入前に必要な準備項目を把握する。",
    paragraphs: [
      "準備1: [[目的]]と[[KPI]]を固定し、どの意思決定に使うかを決める。",
      "準備2: [[現実データ]]（人口・移動・施設・ログ）と[[ルール情報]]を集める。",
      "準備3: [[シナリオ]]と[[実験計画]]を用意し、比較軸を明確にする。",
      "準備4: [[予算]]・[[計算資源]]・[[評価体制]]を決め、運用責任者を置く。"
    ],
    details: {
      "目的": "何を判断するためのシミュレーションかを定義する。",
      "KPI": "成果を測る具体的な評価指標。",
      "現実データ": "人口分布、移動ログ、施設データなどの実データ。",
      "ルール情報": "政策ルール、営業時間、交通規制などの条件。",
      "シナリオ": "試したい政策・施策パターンの一覧。",
      "実験計画": "比較方法や試行回数、統計の取り方。",
      "予算": "APIコストや人件費を含めた運用コスト。",
      "計算資源": "クラウド/オンプレの計算枠やGPUなど。",
      "評価体制": "結果の妥当性を判断する担当者とプロセス。"
    }
  },
  {
    id: 12,
    section: "導入と運用",
    navLabel: "構築スタック",
    badge: "講義",
    title: "何で構築する？実装スタックの選び方",
    headline: "シミュレータ×LLM×データ基盤で組む",
    goal: "構築に必要な主要コンポーネントを理解する。",
    paragraphs: [
      "オープン系: Pythonなら[[Mesa]]、教育・可視化なら[[NetLogo]]、空間重視なら[[GAMA]]。",
      "商用系: [[AnyLogic]]はABM/離散/システムダイナミクスを統合できる。",
      "LLM連携: [[OpenAI]]/[[Anthropic]]/[[Gemini]]/[[Mistral]]/[[Cohere]]のAPIを接続。",
      "データ層: [[地図データ]]・[[統計データ]]・[[ログデータ]]をETLし再利用する。"
    ],
    details: {
      "Mesa": "Pythonのエージェントベース・モデリング框架。",
      "NetLogo": "学習から研究まで使えるABMプラットフォーム。",
      "GAMA": "空間表現に強いオープンソースのABM環境。",
      "AnyLogic": "産業用途で広く使われる商用シミュレーションソフト。",
      "OpenAI": "高性能LLMをAPIで提供するプラットフォーム。",
      "Anthropic": "Claude系モデルを提供するLLMプラットフォーム。",
      "Gemini": "GoogleのGemini APIで提供されるモデル群。",
      "Mistral": "欧州発の高性能モデルを提供するAPI/オープンウェイト。",
      "Cohere": "RAGやエージェント向けの商用モデル群。",
      "地図データ": "道路・施設・地域境界などの空間情報。",
      "統計データ": "人口、移動、経済指標などの基礎統計。",
      "ログデータ": "行動履歴や需要ログなどの時系列データ。"
    }
  },
  {
    id: 13,
    section: "導入と運用",
    navLabel: "商用LLM",
    badge: "講義",
    title: "今使える商用LLM/APIの選択肢",
    headline: "用途別にモデルを使い分ける",
    goal: "主要LLMの選択肢と特徴を把握する。",
    paragraphs: [
      "高精度/長文: OpenAIの[[GPT-5.4]]系（[[GPT-5.4 mini]]/[[GPT-5.4 nano]]）。",
      "エージェント/推論: Anthropicの[[Claude Opus 4.6]]、[[Claude Sonnet 4.5]]。",
      "コスパ重視: Googleの[[Gemini 2.5 Flash]]/[[Gemini 2.5 Flash-Lite]]/[[Gemini 2.5 Pro]]。",
      "欧州系API: [[Mistral Large 3]]/[[Mistral Small 4]]、[[Cohere Command A]]。"
    ],
    details: {
      "GPT-5.4": "OpenAIのフラッグシップモデル。",
      "GPT-5.4 mini": "高性能とコストのバランスが良いモデル。",
      "GPT-5.4 nano": "大量処理に向く低コストモデル。",
      "Claude Opus 4.6": "Anthropicの最上位モデル。",
      "Claude Sonnet 4.5": "高性能と速度のバランス型モデル。",
      "Gemini 2.5 Flash": "価格性能が良い高速モデル。",
      "Gemini 2.5 Flash-Lite": "低コスト・低遅延に特化したモデル。",
      "Gemini 2.5 Pro": "複雑な推論やコーディング向けの上位モデル。",
      "Mistral Large 3": "高性能な汎用モデル。",
      "Mistral Small 4": "軽量で扱いやすいモデル。",
      "Cohere Command A": "エージェント・RAG向けの高性能モデル。"
    }
  },
  {
    id: 14,
    section: "導入と運用",
    navLabel: "実装パターン",
    badge: "講義",
    title: "LLMをMASに組み込む実装パターン",
    headline: "LLMは意思決定器として使う",
    goal: "LLM活用の設計パターンを理解する。",
    paragraphs: [
      "パターン1: [[ルール+LLM]]。普段はルール、迷いだけLLMで判断。",
      "パターン2: [[役割プロンプト]]で人格・価値観を固定し、行動ログを保存。",
      "パターン3: [[RAG]]で政策文書や地域ルールを参照させる。",
      "パターン4: [[サンドボックス]]で安全に試行し、結果のみ反映。"
    ],
    details: {
      "ルール+LLM": "ルール主体で安定性を担保し、難所だけLLMで補助。",
      "役割プロンプト": "職業や価値観を固定して一貫性を出す設計。",
      "RAG": "外部ドキュメントを検索して回答に反映する手法。",
      "サンドボックス": "安全な環境で試してから本番に反映する設計。"
    }
  }
];
const navList = document.getElementById("mas-nav");
const masTitle = document.getElementById("mas-title");
const masHeadline = document.getElementById("mas-headline");
const masBody = document.getElementById("mas-body");
const masChips = document.getElementById("mas-chips");
const masKeyword = document.getElementById("mas-keyword");
const masText = document.getElementById("mas-text");
const masGoal = document.getElementById("mas-goal");
const masSection = document.getElementById("mas-section");
const masVariant = document.getElementById("mas-variant");
const masNumber = document.getElementById("mas-number");
const progressNumber = document.getElementById("mas-progress-number");
const progressTotal = document.getElementById("mas-progress-total");
const progressBar = document.getElementById("mas-progress-bar");
const prevBtn = document.getElementById("mas-prev");
const nextBtn = document.getElementById("mas-next");
const sizeButtons = document.querySelectorAll(".size-btn");
const zoomBtn = document.getElementById("mas-zoom-btn");
const fxTheme = document.getElementById("mas-fx-theme");
const fxBg = document.getElementById("mas-fx-bg");
const fxBoard = document.getElementById("mas-fx-board");
const fxTransition = document.getElementById("mas-fx-transition");
const focusBtn = document.getElementById("mas-focus-btn");
const fullscreenBtn = document.getElementById("mas-fullscreen-btn");
const ttsBtn = document.getElementById("mas-tts-btn");
const ttsAutoBtn = document.getElementById("mas-tts-auto-btn");
const ttsRate = document.getElementById("mas-tts-rate");
const ttsPitch = document.getElementById("mas-tts-pitch");
const ttsVoice = document.getElementById("mas-tts-voice");
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
  { pattern: /MAS/g, replacement: "エムエーエス" },
  { pattern: /LLM/g, replacement: "エルエルエム" },
  { pattern: /KPI/g, replacement: "ケーピーアイ" },
  { pattern: /ETL/g, replacement: "イーティーエル" },
  { pattern: /OpenAI/g, replacement: "オープンエーアイ" },
  { pattern: /Anthropic/g, replacement: "アンソロピック" },
  { pattern: /Gemini/g, replacement: "ジェミニ" },
  { pattern: /Mistral/g, replacement: "ミストラル" },
  { pattern: /Cohere/g, replacement: "コヒア" },
  { pattern: /AnyLogic/g, replacement: "エニーロジック" },
  { pattern: /NetLogo/g, replacement: "ネットロゴ" },
  { pattern: /Mesa/g, replacement: "メサ" },
  { pattern: /GAMA/g, replacement: "ガマ" },
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
  masSlides.forEach((slide, index) => {
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
  const slide = masSlides[currentIndex];
  if (!slide.details[key]) {
    return;
  }
  currentKeyword = key;
  masKeyword.textContent = key;
  masText.textContent = slide.details[key];
  masGoal.textContent = slide.goal;
  highlightKeyword(key);

  detailBox.classList.remove("pulse");
  void detailBox.offsetWidth;
  detailBox.classList.add("pulse");
};

const renderSlide = () => {
  const slide = masSlides[currentIndex];
  masTitle.textContent = slide.title;
  masHeadline.textContent = slide.headline;
  masSection.textContent = slide.section;
  masVariant.textContent = slide.badge ?? "講義";
  masNumber.textContent = toIndex(currentIndex);

  const bodyHtml = slide.paragraphs
    .map((text) => {
      const safe = text.replace(/\[\[(.+?)\]\]/g, (_match, key) => {
        return `<span class=\"kw\" data-key=\"${key}\">${key}</span>`;
      });
      return `<p>${safe}</p>`;
    })
    .join("");

  masBody.innerHTML = bodyHtml;

  masChips.innerHTML = "";
  Object.keys(slide.details).forEach((key) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.dataset.key = key;
    chip.textContent = key;
    chip.addEventListener("click", () => selectKeyword(key));
    masChips.appendChild(chip);
  });

  masBody.querySelectorAll(".kw").forEach((el) => {
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
  progressTotal.textContent = String(masSlides.length).padStart(2, "0");
  progressBar.style.width = `${((currentIndex + 1) / masSlides.length) * 100}%`;

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
      nextIndex = masSlides.length - 1;
    } else if (index >= masSlides.length) {
      nextIndex = 0;
    }
  } else {
    if (index < 0) {
      nextIndex = 0;
    } else if (index >= masSlides.length) {
      nextIndex = masSlides.length - 1;
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
    masTitle.textContent,
    masHeadline.textContent,
    masBody.innerText
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
      if (nextIndex >= masSlides.length) {
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



