const agentSlides = [
  {
    id: 199,
    section: "オリエンテーション",
    navLabel: "オリエンテーション",
    badge: "講義",
    title: "この授業でできること",
    headline: "Claude Codeの全体像を掴む",
    goal: "対象者と到達点を明確にする。",
    paragraphs: [
      "対象: [[Claude Code初学者]]〜[[実務で使いたい人]]。",
      "ゴール: [[仕組み]]と[[使いどころ]]を理解し、[[最初の1タスク]]を実行できる。",
      "やること: 自律ループ・安全運用・チーム運用を整理する。",
      "最後に[[次の一歩]]を明確にする。"
    ],
    details: {
      "Claude Code初学者": "これから使い始める人。",
      "実務で使いたい人": "品質と安全性を重視する人。",
      "仕組み": "思考→行動→観察のループなどの内部構造。",
      "使いどころ": "向いているタスクの見極め。",
      "最初の1タスク": "最初に実行する小さな依頼。",
      "次の一歩": "授業後に行う具体行動。"
    }
  },
  {
    id: 1995,
    section: "導入ガイド",
    navLabel: "導入最短手順",
    badge: "講義",
    title: "最短で始める3ステップ",
    headline: "まず動かして手応えを掴む",
    goal: "導入の最短ルートを理解する。",
    paragraphs: [
      "Step1: 作業フォルダを[[バックアップ]]しておく。",
      "Step2: Claude Codeに[[権限]]と[[スコープ]]を渡す。",
      "Step3: まずは[[小タスク]]で挙動を確認する。",
      "問題が出たら[[実行前質問]]で止める。"
    ],
    details: {
      "バックアップ": "元に戻せる状態を作ること。",
      "権限": "実行や編集を許可する範囲。",
      "スコープ": "今回触って良い範囲の指定。",
      "小タスク": "短時間で終わる検証タスク。",
      "実行前質問": "不明点があれば止まって確認する行為。"
    }
  },
  {
    id: 200,
    section: "Claude Code入門",
    navLabel: "Claude Code入門",
    badge: "講義",
    title: "Claude Codeとは何か？",
    headline: "ターミナル常駐の開発パートナー",
    goal: "この章で扱うClaude Codeの立ち位置と強みを理解する。",
    paragraphs: [
      "[[Claude Code]]は、開発者の作業空間に直接入り込む[[CLI]]型エージェント。",
      "ブラウザのチャットではなく、[[ローカル環境]]のプロジェクトを対象に動く。",
      "必要な[[権限]]を渡すと、調査・修正・実行を[[自律実行]]できる。",
      "ここからは、その仕組みと使いどころを順に解説する。"
    ],
    details: {
      "Claude Code": "ターミナルで動作し、実際のファイルやコマンドに触れるAIエージェント。",
      "CLI": "Command Line Interface。テキストで操作する実行環境。",
      "ローカル環境": "自分のPC上の作業空間。プロジェクトやファイルが存在する場所。",
      "権限": "実行や編集を許可する範囲。安全性と引き換えに行動できる。",
      "自律実行": "目的から手順を組み立て、実行と検証を自走する動き。"
    }
  },
  {
    id: 201,
    section: "自律型エンジニア",
    navLabel: "ターミナルに住む",
    badge: "講義",
    title: "ターミナルに住む「自律型エンジニア」",
    headline: "チャットを飛び出し、環境と一体化するAI",
    goal: "Claude Codeの基本的な立ち位置と変化を理解する。",
    paragraphs: [
      "Claude Codeは、Anthropicが開発した[[CLI]]（コマンドライン）専用エージェントです。",
      "ブラウザで会話するのではなく、君の[[ターミナル]]内で直接動作します。",
      "最大の特徴は、AIが自分の意思で[[コマンド実行]]や[[ファイル操作]]を行うこと。",
      "「教えてくれるAI」から「[[一緒に働くAI]]」への進化です。"
    ],
    details: {
      "CLI": "Command Line Interface。コマンドで操作する環境。",
      "ターミナル": "コマンドを入力し、結果を確認する作業窓口。",
      "コマンド実行": "CLI上で処理やテストを走らせること。",
      "ファイル操作": "作成・編集・移動・削除などの変更作業。",
      "一緒に働くAI": "指示に加えて作業も担うパートナーとしてのAI。"
    }
  },
  {
    id: 202,
    section: "自律型エンジニア",
    navLabel: "ブラウザ型AIとの違い",
    badge: "解説",
    title: "【深掘り】ブラウザ型AIとの決定的な違い",
    headline: "「コピペ」から「権限委託」へのパラダイムシフト",
    goal: "従来型AIとの違いを明確にし、役割の変化を理解する。",
    paragraphs: [
      "従来のAIチャットは、コードの断片を提示するだけの「[[アドバイザー]]」でした。",
      "対してClaude Codeは、君のPCの[[ファイルシステム]]にアクセスし、直接エディタを操作する「[[実行者]]」です。",
      "従来: AIが書いたコードを君がコピーし、ファイルに貼り付け、自分でテストを実行する。",
      "Claude Code: AIがファイルを書き換え、テストを走り込ませ、エラーが出ればその場で修正を試みる。",
      "君の役割は「作業」から「[[承認]]」へと変わります。"
    ],
    details: {
      "アドバイザー": "助言はするが、実行は人が行う役割。",
      "ファイルシステム": "ファイルとフォルダの構造・保存場所。",
      "実行者": "手を動かして変更を加える担当。",
      "承認": "結果の妥当性を判断し、GO/NO-GOを出す役割。"
    }
  },
  {
    id: 203,
    section: "自律型エンジニア",
    navLabel: "ReActプロトコル",
    badge: "講義",
    title: "思考のループ：ReActプロトコル",
    headline: "なぜAIが勝手に動けるのか？",
    goal: "自律実行の基本ループを理解する。",
    paragraphs: [
      "エージェントは、[[思考 (Thought)]] → [[行動 (Action)]] → [[観察 (Observation)]] を繰り返します。",
      "[[思考]]: 目的達成のために、次に何をすべきか計画を立てます。",
      "[[行動]]: ファイルを書き換えたり、エラーを確認したりします。",
      "[[観察]]: 実行した結果（成功か失敗か）を読み取り、学習します。",
      "この[[自律ループ]]により、複雑なバグ修正も一人で完結させます。"
    ],
    details: {
      "思考 (Thought)": "目的達成に向けた計画や推論の段階。",
      "行動 (Action)": "コマンド実行や編集などの実操作。",
      "観察 (Observation)": "実行結果やエラーを読み取る段階。",
      "思考": "次の一手を考えるフェーズ。",
      "行動": "実作業を行うフェーズ。",
      "観察": "結果を確認し学習するフェーズ。",
      "自律ループ": "思考→行動→観察を繰り返す循環。"
    }
  },
  {
    id: 204,
    section: "自律型エンジニア",
    navLabel: "24秒間の具体例",
    badge: "講義",
    title: "【具体例】エージェントの24秒間",
    headline: "バグ修正の現場をスローモーションで見る",
    goal: "自律ループの実際の動きをイメージできるようにする。",
    paragraphs: [
      "例えば「ログインできないバグを直して」と指示したとき、AIの内部では以下のドラマが起きています。",
      "0-5秒: 全ファイルを検索し、ログイン処理が書かれた「auth.js」を特定。",
      "5-10秒: ログを確認するコマンドを実行。パスワード照合ロジックの不備を発見。",
      "10-15秒: コードを修正。しかしテストを実行すると別の場所でエラーが発生。",
      "15-24秒: 「おっと、ここも修正が必要だ」と判断し、最終的な修正を完了。",
      "人間なら30分かかる調査を、AIは[[数十秒のループ]]で終わらせます。"
    ],
    details: {
      "数十秒のループ": "調査・修正・検証を高速で回す短周期の自律運転。"
    }
  },
  {
    id: 205,
    section: "自律型エンジニア",
    navLabel: "AIの中の組織",
    badge: "講義",
    title: "AIの中にある「小さな組織」",
    headline: "一人のAIが複数の役割を演じ分ける",
    goal: "エージェント内部の役割分担を理解する。",
    paragraphs: [
      "大規模な開発では、Claude内部で[[役割の切り替え]]が発生します。",
      "[[マネージャ]]: 全体の進捗を管理し、タスクを細かく分解する司令塔。",
      "[[ワーカー]]: 実際にコードを書き、テストを通す実行部隊。",
      "[[レビュアー]]: 書かれたコードに不備がないか、客観的にチェックする監視役。",
      "この[[議論]]と[[合意形成]]が、高い精度を生み出します。"
    ],
    details: {
      "役割の切り替え": "同じAIが複数の視点を行き来すること。",
      "マネージャ": "全体設計と優先順位を決める司令塔。",
      "ワーカー": "実装・修正・テストを進める実行役。",
      "レビュアー": "品質や安全性を確認する監督役。",
      "議論": "複数の視点で案をぶつけ、精度を上げる工程。",
      "合意形成": "最終案を一つにまとめる意思決定。"
    }
  },
  {
    id: 206,
    section: "自律型エンジニア",
    navLabel: "マネージャの視点",
    badge: "解説",
    title: "【深掘り】「マネージャ」は何を見ているのか？",
    headline: "俯瞰的な視点が生む、破綻しない設計",
    goal: "マネージャ役の価値を具体的に掴む。",
    paragraphs: [
      "AIが単なる「コード生成機」で終わらないのは、マネージャ役が[[コンテキスト（文脈）]]を維持しているからです。",
      "依存関係の把握: 「A地点を直すと、全く関係ないB地点が壊れる」という[[副作用]]を事前に予測します。",
      "優先順位の決定: 「まずはデータベースの型を決めないと、フロントエンドの作業は無駄になる」といった順序を組み立てます。",
      "この[[構造的思考]]があるからこそ、数千行規模の巨大なプロジェクトでも迷子になりません。"
    ],
    details: {
      "コンテキスト（文脈）": "状況や依存関係など、判断に必要な背景情報。",
      "副作用": "一部を直すことで別の箇所に起きる影響。",
      "構造的思考": "全体の構造を見渡しながら組み立てる考え方。"
    }
  },
  {
    id: 207,
    section: "自律型エンジニア",
    navLabel: "並列思考",
    badge: "講義",
    title: "最適解を導く「並列思考」",
    headline: "一つの正解に固執しない",
    goal: "複数案の比較が精度を上げる理由を理解する。",
    paragraphs: [
      "Claude Codeは、複数の[[解決策]]を同時にシミュレーションできます（[[並列思考]]）。",
      "「A案は速いが複雑」「B案は遅いが安全」といった[[トレードオフ]]を計算します。",
      "AI同士が[[議論]]するようにプロンプトが組まれており、独りよがりのミスを防ぎます。",
      "最終的に、最もプロジェクトに適した[[合意案]]だけを君に提案します。"
    ],
    details: {
      "解決策": "問題に対する候補アプローチ。",
      "並列思考": "複数の案を同時に検討する姿勢。",
      "トレードオフ": "メリットとデメリットの釣り合い。",
      "議論": "案を比較して最適を探るプロセス。",
      "合意案": "比較の末に選ばれた最終案。"
    }
  },
  {
    id: 208,
    section: "自律型エンジニア",
    navLabel: "最強の布陣",
    badge: "講義",
    title: "最強の布陣：Claude × Gemini × GPT",
    headline: "それぞれの「脳」の強みを活かす",
    goal: "複数AIの役割分担を理解する。",
    paragraphs: [
      "[[Claude Code]]: 実装と実行の「現場監督」。プロジェクトの主軸です。",
      "[[Gemini]]: 数百万行の「過去ログ」や「巨大な仕様書」を読み込ませる検索役。",
      "[[GPT]]: アイデア出しや、ユーザーインターフェースの「感性」を問う相談役。",
      "これらを[[連携]]させることで、一人でフルスタック開発が可能になります。"
    ],
    details: {
      "Claude Code": "実装と実行を担うローカル実務エージェント。",
      "Gemini": "大量資料の読解や検索に強い補助役。",
      "GPT": "発想や体験設計に強い相談役。",
      "連携": "役割を分けて成果を合成すること。"
    }
  },
  {
    id: 209,
    section: "自律型エンジニア",
    navLabel: "ハイブリッド運用",
    badge: "講義",
    title: "【活用例】ハイブリッド・チームの運用",
    headline: "3つのAIを使いこなすシナリオ",
    goal: "複数AIの現実的な運用イメージを持つ。",
    paragraphs: [
      "Geminiに、500ページのPDF仕様書を読み込ませ、「今回の修正に必要なルール」を抽出させる。",
      "そのルールをClaude Codeに渡し、ローカル環境でコードの実装とテストを実行させる。",
      "完成したコードをGPT-4oに見せ、「ユーザーにとって使いやすいか？」という感性面のレビューを受ける。",
      "これはもはや開発ではなく、[[オーケストラの指揮]]です。"
    ],
    details: {
      "オーケストラの指揮": "複数のAIを役割分担させて統合する発想。"
    }
  },
  {
    id: 210,
    section: "自律型エンジニア",
    navLabel: "自律アクション",
    badge: "講義",
    title: "「これやっておいて」が通じる世界",
    headline: "具体的な5つの自律アクション",
    goal: "Claude Codeが担える具体的タスクを把握する。",
    paragraphs: [
      "[[バグ修正]]: エラーログを渡すと、原因究明から修正、テストまで完結。",
      "[[リファクタリング]]: 古いコードを一括で現代的な書き方に刷新。",
      "[[テスト自動生成]]: 実装コードを読み、それに対するテストを全自動で作る。",
      "[[ドキュメント整備]]: コードの変更履歴から、最新のREADMEを更新。",
      "[[ライブラリ移行]]: 面倒なバージョンアップ作業を、依存関係を考慮して代行。"
    ],
    details: {
      "バグ修正": "原因特定から修正・テストまでの一連作業。",
      "リファクタリング": "動作を変えずに内部構造を改善すること。",
      "テスト自動生成": "実装に合わせたテストコードを作成すること。",
      "ドキュメント整備": "仕様や手順の文書を最新化する作業。",
      "ライブラリ移行": "依存関係の更新や置き換え作業。"
    }
  },
  {
    id: 2105,
    section: "自律型エンジニア",
    navLabel: "PC内の従業員",
    badge: "講義",
    title: "一台のPCに「小さな会社」を雇う",
    headline: "役割を増やして同時に仕事を任せられる",
    goal: "複数役割にタスクを委ねるイメージを掴む。",
    paragraphs: [
      "Claude Codeを導入するとは、一台のPCの中に[[複数の従業員]]を雇うようなもの。",
      "君は[[社長]]として目的と優先順位を伝え、各[[担当]]に仕事を割り振る。",
      "従業員は[[同時進行]]で調査・実装・検証を進め、結果を[[報告]]してくる。",
      "君は[[最終判断]]と[[方向性]]に集中できる。"
    ],
    details: {
      "複数の従業員": "調査・実装・レビューなど複数役割の比喩。",
      "社長": "目的と優先順位を示す人間側の役割。",
      "担当": "特定の仕事を引き受ける担当者の比喩。",
      "同時進行": "複数タスクを並列で進めること。",
      "報告": "結果や進捗を返して判断材料にする工程。",
      "最終判断": "人間がGO/NO-GOを決める役割。",
      "方向性": "全体方針やゴールの意思決定。"
    }
  },
  {
    id: 2106,
    section: "自律型エンジニア",
    navLabel: "具体例: 社内分業",
    badge: "解説",
    title: "具体例：3人の社内分業",
    headline: "調査・実装・レビューを同時に走らせる",
    goal: "複数の役割がどう動くかを具体的にイメージする。",
    paragraphs: [
      "君: 「ログイン不具合を直して。影響範囲はauth周辺のみ。最終的に差分を見せて。」",
      "[[調査担当]]: ログを確認し、原因箇所の候補を3つ出す。",
      "[[実装担当]]: 最も有力な原因に対して修正を実施し、テストを回す。",
      "[[レビュー担当]]: 差分を見て、命名・安全性・副作用の有無をチェック。",
      "最後に君が[[最終判断]]してマージする。"
    ],
    details: {
      "調査担当": "ログ分析や探索を担当する役割。",
      "実装担当": "修正とテストを担当する役割。",
      "レビュー担当": "差分と品質を確認する役割。",
      "最終判断": "人間がGO/NO-GOを決める工程。"
    }
  },
  {
    id: 211,
    section: "自律型エンジニア",
    navLabel: "建築家へ",
    badge: "講義",
    title: "君は「プログラマー」から「建築家」へ",
    headline: "手を動かすのはAI、意志を決めるのは君",
    goal: "人間側に求められる役割の変化を理解する。",
    paragraphs: [
      "これからのエンジニアは、1行ずつコードを書く力よりも、[[エージェントを指揮する力]]が求められます。",
      "「何を作るか」という[[ビジョン]]と、AIの成果を正しく評価する[[審美眼]]。",
      "Claude Codeという強力な[[エージェント部下]]を使いこなし、",
      "昨日までは一人では不可能だった「大きな夢」を形にしましょう。"
    ],
    details: {
      "エージェントを指揮する力": "AIに適切な目標と役割を与える能力。",
      "ビジョン": "何を作るかという方向性。",
      "審美眼": "品質や体験を見極める目。",
      "エージェント部下": "作業を任せられるAIチームの比喩。"
    }
  },
  {
    id: 212,
    section: "使い方の前提",
    navLabel: "3つの前提",
    badge: "講義",
    title: "まず押さえる3つの前提",
    headline: "安全・範囲・ゴールを固定する",
    goal: "Claude Codeを安定運用するための前提を理解する。",
    paragraphs: [
      "Claude Codeは、与えられた[[権限]]の範囲でのみ動ける。",
      "作業対象は最初に[[スコープ]]を決めて切り分ける。",
      "ゴールは[[完成条件]]として文章で固定する。",
      "この3点が揃うと、依頼のブレが大幅に減る。"
    ],
    details: {
      "権限": "読み取り・書き込み・実行などの許可範囲。",
      "スコープ": "今回触る範囲。機能・ファイル・期間などを限定する。",
      "完成条件": "何ができたら合格かの明文化。"
    }
  },
  {
    id: 213,
    section: "使い方の前提",
    navLabel: "基本フロー",
    badge: "講義",
    title: "Claude Codeの基本フロー",
    headline: "計画→実行→レビューの順で進む",
    goal: "作業の流れを可視化し、使い方を掴む。",
    paragraphs: [
      "依頼を受けたら、まず[[計画]]を立てる。",
      "次に[[実行]]して、結果を[[観察]]する。",
      "最後に[[レビュー]]で品質と安全を確認する。",
      "うまくいかない時は[[修正ループ]]に戻る。"
    ],
    details: {
      "計画": "やること・順番・リスクを整理する段階。",
      "実行": "コマンドや編集など実作業を進める段階。",
      "観察": "結果を読み取り、次の判断材料にする段階。",
      "レビュー": "人間が最終確認してGO/NO-GOを出す工程。",
      "修正ループ": "問題があれば再計画・再実行する流れ。"
    }
  },
  {
    id: 214,
    section: "使い方の前提",
    navLabel: "依頼テンプレ",
    badge: "講義",
    title: "迷ったらこの依頼テンプレ",
    headline: "目的・範囲・条件を一行ずつ",
    goal: "伝わる依頼の型を持ち、再現性を上げる。",
    paragraphs: [
      "[[目的]]: 何を達成したいか。",
      "[[対象範囲]]: 触っていいファイルや機能。",
      "[[成果物]]: 何を出力してほしいか。",
      "[[制約]]: 禁止事項や守るルール。",
      "[[確認項目]]: 最後に人が見るポイント。"
    ],
    details: {
      "目的": "やりたいことの最終ゴール。",
      "対象範囲": "触ってよい場所・機能の限定。",
      "成果物": "期待するアウトプットの形。",
      "制約": "守るべき条件・禁止事項。",
      "確認項目": "人間がチェックする観点。"
    }
  },
  {
    id: 2145,
    section: "ミニ演習",
    navLabel: "最初の1タスク",
    badge: "講義",
    title: "最初の1タスク例",
    headline: "小さく任せて、挙動を確かめる",
    goal: "依頼テンプレを実際に使ってみる。",
    paragraphs: [
      "目的: [[README更新]]で最新の手順を反映する。",
      "対象範囲: [[docs/README]]のみ。",
      "成果物: 更新案と[[差分レビュー]]。",
      "制約: 既存の[[トーン]]を維持。",
      "確認項目: 変更点の[[一覧]]を提示。"
    ],
    details: {
      "README更新": "手順や説明を最新化する作業。",
      "docs/README": "対象ファイルの例。",
      "差分レビュー": "変更前後の違いを確認する工程。",
      "トーン": "文章の雰囲気や語り口。",
      "一覧": "変更点を箇条書きでまとめること。"
    }
  },
  {
    id: 215,
    section: "安全運転",
    navLabel: "安全運転",
    badge: "解説",
    title: "失敗を防ぐ安全運転ルール",
    headline: "大きく変える前に止まれる設計",
    goal: "リスクを抑える運用ルールを理解する。",
    paragraphs: [
      "[[破壊的操作]]や[[大量変更]]は、必ず人間の承認を挟む。",
      "変更は[[差分レビュー]]で確認し、必要なら[[ロールバック]]する。",
      "テストは[[小さく]]回して、問題点を早期に発見する。",
      "不明点があれば[[実行前質問]]で止める。"
    ],
    details: {
      "破壊的操作": "削除や大規模書き換えなど元に戻しにくい作業。",
      "大量変更": "多数のファイルや広範囲に及ぶ変更。",
      "差分レビュー": "修正前後の違いを確認する工程。",
      "ロールバック": "問題があれば元の状態に戻すこと。",
      "小さく": "変更量を分割し、影響範囲を限定する。",
      "実行前質問": "不明点があれば止まって確認する行為。"
    }
  },
  {
    id: 216,
    section: "適用範囲",
    navLabel: "向き不向き",
    badge: "講義",
    title: "向いている仕事・向いていない仕事",
    headline: "使いどころを間違えない",
    goal: "Claude Codeの強みと限界を理解する。",
    paragraphs: [
      "向いている: [[反復作業]] / [[調査]] / [[小修正]] / [[テスト実行]]。",
      "向いていない: [[仕様未確定]] / [[対人調整]] / [[倫理判断]]が必要な領域。",
      "迷ったら、まず[[小タスク]]から試す。"
    ],
    details: {
      "反復作業": "同じ手順を繰り返す作業。",
      "調査": "コード検索やログ分析などの探索作業。",
      "小修正": "影響範囲が限定的な変更。",
      "テスト実行": "テストや検証を回す作業。",
      "仕様未確定": "要件が定まっていない状態。",
      "対人調整": "関係者間の合意形成が必要な作業。",
      "倫理判断": "価値判断が重要で人間の責任が伴う領域。",
      "小タスク": "短時間で検証できる小さな依頼。"
    }
  },
  {
    id: 217,
    section: "チーム運用",
    navLabel: "チーム運用",
    badge: "講義",
    title: "チームで使うならここを揃える",
    headline: "ルールと共有が品質を上げる",
    goal: "複数人で運用するための基準を持つ。",
    paragraphs: [
      "[[コーディング規約]]や[[命名ルール]]を事前に共有する。",
      "[[レビュー手順]]を固定し、変更の確認ポイントを揃える。",
      "[[プロンプト履歴]]を残すと、再現性と引き継ぎが楽になる。"
    ],
    details: {
      "コーディング規約": "書き方の統一ルール。",
      "命名ルール": "変数・関数・ファイル名の付け方の約束。",
      "レビュー手順": "変更を確認する共通の流れ。",
      "プロンプト履歴": "依頼内容や結果の記録。"
    }
  },
  {
    id: 218,
    section: "成果の定着",
    navLabel: "成果を残す",
    badge: "講義",
    title: "成果の再現性を高める",
    headline: "ログと手順が資産になる",
    goal: "学びを積み上げる運用を意識する。",
    paragraphs: [
      "変更内容と理由を[[実行ログ]]として残す。",
      "[[再現手順]]があると、同じ修正を高速に繰り返せる。",
      "成功例だけでなく[[失敗ログ]]も貴重な資産になる。"
    ],
    details: {
      "実行ログ": "何をどう実行したかの記録。",
      "再現手順": "同じ結果を得るための手順。",
      "失敗ログ": "失敗した理由や条件を残した記録。"
    }
  },
  {
    id: 219,
    section: "用語ミニ辞典",
    navLabel: "用語ミニ辞典",
    badge: "講義",
    title: "今日よく出てきた言葉",
    headline: "ここだけ押さえれば迷わない",
    goal: "主要用語を短く整理する。",
    paragraphs: [
      "[[エージェント]]: 思考→行動→観察を回すAI。",
      "[[スコープ]]: 触ってよい範囲の指定。",
      "[[権限]]: 実行や編集を許可する範囲。",
      "[[差分レビュー]]: 変更点を確認する工程。"
    ],
    details: {
      "エージェント": "自律的に動くAIのこと。",
      "スコープ": "対象範囲の限定。",
      "権限": "行動を許可する範囲。",
      "差分レビュー": "変更前後の違いを確認する工程。"
    }
  },
  {
    id: 220,
    section: "次の一歩",
    navLabel: "次の一歩",
    badge: "講義",
    title: "3行まとめ + 次の行動",
    headline: "小さく任せて、確実に進める",
    goal: "学びを行動に変える。",
    paragraphs: [
      "まとめ1: Claude Codeは[[自律実行]]で価値を生む。",
      "まとめ2: 安全運用は[[権限]]と[[レビュー]]で守る。",
      "まとめ3: まずは[[小タスク]]から始める。",
      "次の行動: 今日中に[[最初の1タスク]]を実行する。"
    ],
    details: {
      "自律実行": "目的から手順を組み立てて進めること。",
      "権限": "許可範囲の設定。",
      "レビュー": "人間が確認する工程。",
      "小タスク": "短時間で終わる依頼。",
      "最初の1タスク": "最初に試す具体タスク。"
    }
  }
];

const navList = document.getElementById("agent-nav");
const agentTitle = document.getElementById("agent-title");
const agentHeadline = document.getElementById("agent-headline");
const agentBody = document.getElementById("agent-body");
const agentChips = document.getElementById("agent-chips");
const agentKeyword = document.getElementById("agent-keyword");
const agentText = document.getElementById("agent-text");
const agentGoal = document.getElementById("agent-goal");
const agentSection = document.getElementById("agent-section");
const agentVariant = document.getElementById("agent-variant");
const agentNumber = document.getElementById("agent-number");
const progressNumber = document.getElementById("agent-progress-number");
const progressTotal = document.getElementById("agent-progress-total");
const progressBar = document.getElementById("agent-progress-bar");
const prevBtn = document.getElementById("agent-prev");
const nextBtn = document.getElementById("agent-next");
const sizeButtons = document.querySelectorAll(".size-btn");
const zoomBtn = document.getElementById("agent-zoom-btn");
const fxTheme = document.getElementById("agent-fx-theme");
const fxBg = document.getElementById("agent-fx-bg");
const fxBoard = document.getElementById("agent-fx-board");
const fxTransition = document.getElementById("agent-fx-transition");
const focusBtn = document.getElementById("agent-focus-btn");
const fullscreenBtn = document.getElementById("agent-fullscreen-btn");
const ttsBtn = document.getElementById("agent-tts-btn");
const ttsAutoBtn = document.getElementById("agent-tts-auto-btn");
const ttsRate = document.getElementById("agent-tts-rate");
const ttsPitch = document.getElementById("agent-tts-pitch");
const ttsVoice = document.getElementById("agent-tts-voice");
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
  agentSlides.forEach((slide, index) => {
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
  const slide = agentSlides[currentIndex];
  if (!slide.details[key]) {
    return;
  }
  currentKeyword = key;
  agentKeyword.textContent = key;
  agentText.textContent = slide.details[key];
  agentGoal.textContent = slide.goal;
  highlightKeyword(key);

  detailBox.classList.remove("pulse");
  void detailBox.offsetWidth;
  detailBox.classList.add("pulse");
};

const renderSlide = () => {
  const slide = agentSlides[currentIndex];
  agentTitle.textContent = slide.title;
  agentHeadline.textContent = slide.headline;
  agentSection.textContent = slide.section;
  agentVariant.textContent = slide.badge ?? "講義";
  agentNumber.textContent = toIndex(currentIndex);

  const bodyHtml = slide.paragraphs
    .map((text) => {
      const safe = text.replace(/\[\[(.+?)\]\]/g, (_match, key) => {
        return `<span class=\"kw\" data-key=\"${key}\">${key}</span>`;
      });
      return `<p>${safe}</p>`;
    })
    .join("");

  agentBody.innerHTML = bodyHtml;

  agentChips.innerHTML = "";
  Object.keys(slide.details).forEach((key) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.dataset.key = key;
    chip.textContent = key;
    chip.addEventListener("click", () => selectKeyword(key));
    agentChips.appendChild(chip);
  });

  agentBody.querySelectorAll(".kw").forEach((el) => {
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
  progressTotal.textContent = String(agentSlides.length).padStart(2, "0");
  progressBar.style.width = `${((currentIndex + 1) / agentSlides.length) * 100}%`;

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
      nextIndex = agentSlides.length - 1;
    } else if (index >= agentSlides.length) {
      nextIndex = 0;
    }
  } else {
    if (index < 0) {
      nextIndex = 0;
    } else if (index >= agentSlides.length) {
      nextIndex = agentSlides.length - 1;
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
    agentTitle.textContent,
    agentHeadline.textContent,
    agentBody.innerText
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
      if (nextIndex >= agentSlides.length) {
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
