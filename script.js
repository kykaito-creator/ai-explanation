const slides = [
  {
    id: 1,
    section: "イントロダクション",
    sectionLabel: "イントロダクション",
    navLabel: "イントロダクション",
    variant: "overview",
    title: "2026年、AIは「魔法」から「君の技術」へ",
    headline: "昨日の「すごい！」は、今日の当たり前。",
    goal: "AIを使うだけの立場から、仕組みを理解して指揮する立場へ意識を切り替える。",
    paragraphs: [
      "昨日の「すごい！」は、今日の「[[当たり前]]」。",
      "AIに質問するだけの時代は終わりました。",
      "今日は、AIを動かす「[[脳]]」と「[[筋肉]]」の仕組みを知り、君のPCを世界最強の研究所にする方法を伝授します。",
      "キーワード： [[使う側]]から、[[指揮する側]]へ。"
    ],
    details: {
      "当たり前": "新技術が日常化する速度が上がり、驚きよりも運用が価値になるフェーズを示します。",
      "脳": "AIモデルそのもの。言語理解や推論を行う中心部分です。",
      "筋肉": "計算資源。GPUや高速メモリが大量の計算を並列で回す役割を担います。",
      "使う側": "質問して答えを受け取るだけの受動的な使い方。",
      "指揮する側": "目的に合わせてモデル・環境・データを選び、AIの力を引き出す立場です。"
    }
  },
  {
    id: 101,
    section: "イントロダクション",
    sectionLabel: "イントロダクション / 解説",
    navLabel: "イントロダクション（解説）",
    variant: "detail",
    title: "使うAIから、設計するAIへ",
    headline: "仕組みを理解すると、武器になる。",
    goal: "AIの進化速度と、司令官視点の価値を理解する。",
    paragraphs: [
      "AIの進化は[[生活]]を変えるだけでなく、[[学び方]]も変えました。",
      "AIは[[次トークン予測]]で「次に来る最も確率の高いデータ」を計算する[[確率的推論]]エンジン。",
      "意味を理解しているというより、確率で続きを選んでいると考えると整理しやすい。",
      "質問→回答の[[受け身]]だけでは差がつきません。",
      "これから必要なのは、[[目的]]に合わせて[[道具]]と[[手順]]を組む力です。",
      "AIの「[[脳]]」（モデル）と「[[筋肉]]」（計算資源）を知れば、君のPCは実験室になります。",
      "つまり、[[魔法]]ではなく[[技術]]として扱うということです。"
    ],
    details: {
      "生活": "AIは日常の検索・翻訳・作業効率まで一気に変え始めています。",
      "学び方": "調べるだけでなく、作りながら学ぶスタイルが主流になります。",
      "次トークン予測": "文章の続きを確率で予測する仕組み。意味理解というより統計的推論に近い。",
      "確率的推論": "正解を断定するのではなく、確率が高い候補を選ぶ計算。",
      "受け身": "ただ答えをもらうだけでは成果が伸びにくい段階です。",
      "目的": "ゴールを先に決めると、AIの使い方がブレません。",
      "道具": "モデルやツール、環境設定などの選択肢。",
      "手順": "AIに任せる範囲と人がやる範囲を決める作業設計。",
      "脳": "AIモデルそのもの。推論や生成を担う中核。",
      "筋肉": "GPUなどの計算資源。速さと規模を支えます。",
      "魔法": "理由が分からないまま使う状態。",
      "技術": "原理を理解して再現・改善できる状態。"
    }
  },
  {
    id: 2,
    section: "AIモデルの4大巨頭",
    sectionLabel: "AIモデルの4大巨頭",
    navLabel: "AIモデルの4大巨頭",
    variant: "overview",
    title: "性格が違う！最強のAIモデルたち",
    headline: "目的に合わせて“脳”を選ぶ。",
    goal: "AIモデルの違いを理解し、用途ごとに最適なモデルを選べるようにする。",
    paragraphs: [
      "[[GPT]] (OpenAI): どんな話題もこなす「全知全能の長老」。",
      "[[Gemini]] (Google): 数百万文字を一度に覚える「超記憶の天才」。",
      "[[Grok]] (xAI): Xのリアルタイム情報を読み取る「最速の毒舌家」。",
      "[[Claude]] (Anthropic): 嘘が少なく、プログラミングが得意な「誠実な職人」。",
      "ポイント： 目的に合わせて「どの[[脳]]を借りるか」を選ぶのが司令官の第一歩。"
    ],
    details: {
      "GPT": "汎用性が高く、要約・発想・文章作成など幅広い用途に使えるモデル。",
      "Gemini": "長文コンテキストが強み。大量の資料やログをまとめる用途に向きます。",
      "Grok": "リアルタイム性や軽快な対話が魅力。速報や時事のニュアンスに強い。",
      "Claude": "慎重で構造的な回答が得意。長い文章やコードレビューに向く。",
      "脳": "AIモデルのこと。複数のモデルから“借りる脳”を選ぶのが司令官の仕事です。"
    }
  },
  {
    id: 102,
    section: "AIモデルの4大巨頭",
    sectionLabel: "AIモデルの4大巨頭 / 解説",
    navLabel: "AIモデルの4大巨頭（解説）",
    variant: "detail",
    title: "モデル選びは作戦立案",
    headline: "強みと制約を見極める。",
    goal: "モデルの特性と選定軸を明確にする。",
    paragraphs: [
      "モデル選定は「[[精度]]」「[[速度]]」「[[文脈の長さ]]」の3軸で考える。",
      "創造性が欲しいなら[[GPT]]、大量資料なら[[Gemini]]、速報なら[[Grok]]、安全性と構造なら[[Claude]]。",
      "同じ質問でもモデルで答えが変わる。[[比較]]して使うのが司令官。",
      "重要なのは、[[用途]]に合わせて“借りる脳”を切り替えること。"
    ],
    details: {
      "精度": "正確性や論理性の高さ。",
      "速度": "応答の速さと処理時間。",
      "文脈の長さ": "一度に扱える情報量。",
      "GPT": "発想力や汎用性を重視するときに強い。",
      "Gemini": "長文をまとめる作業に向く。",
      "Grok": "時事や速報のニュアンスに強い。",
      "Claude": "安全性と構造的な出力が得意。",
      "比較": "同じ質問を複数モデルで投げて特徴を掴むこと。",
      "用途": "目的に合わせてモデルを切り替える発想が重要。"
    }
  },
  {
    id: 3,
    section: "話すAIから動くAIへ",
    sectionLabel: "話すAIから動くAIへ",
    navLabel: "話すAIから動くAIへ",
    variant: "overview",
    title: "Claude Code と Codex の衝撃",
    headline: "AIが“手を動かす”時代へ。",
    goal: "対話型AIと自律実行型AIの違いを掴み、活用イメージを持つ。",
    paragraphs: [
      "[[Codex]]: AIがプログラムの書き方を学習した「コードの翻訳機」。GitHub Copilotの心臓。",
      "[[Claude Code]]: 2026年最大の革命。チャットするだけでなく、君の代わりにPCのファイルを書き換え、テストし、アプリを完成させる。",
      "違い： 「答えを教える」のがChatGPTなら、「勝手にやっておいてくれる」のが今の最新AI。",
      "つまり、[[対話]]から[[実行]]へ。"
    ],
    details: {
      "Codex": "コード生成に特化したモデル。コメントや要件から実装の雛形を作ります。",
      "Claude Code": "複数ファイルの編集やテスト実行など、作業全体を進めるタイプのAI。",
      "対話": "質問に答える、相談に乗るといった“会話中心”の使い方。",
      "実行": "タスクを渡して、AIが具体的な操作まで担う使い方です。"
    }
  },
  {
    id: 103,
    section: "話すAIから動くAIへ",
    sectionLabel: "話すAIから動くAIへ / 解説",
    navLabel: "話すAIから動くAIへ（解説）",
    variant: "detail",
    title: "AIが動くと何が変わる？",
    headline: "作業フローごと任せられる。",
    goal: "自律実行型AIの使い所と注意点を理解する。",
    paragraphs: [
      "対話AIは[[回答]]まで、動くAIは[[実装]]まで担当する。",
      "例：仕様を渡す→[[ファイル編集]]→[[テスト]]→結果報告。",
      "自律型は速いが、[[権限]]と[[安全]]の設計が重要。",
      "最後に人間が[[レビュー]]して品質保証する。"
    ],
    details: {
      "回答": "質問に対する説明や提案まで。",
      "実装": "実際にファイルを編集し、動く成果物を作ること。",
      "ファイル編集": "コードや設定ファイルを書き換える操作。",
      "テスト": "動作確認の自動実行。",
      "権限": "AIにどこまで操作を許すかの境界。",
      "安全": "予期しない変更を防ぐための設計。",
      "レビュー": "人間が最終チェックする工程。"
    }
  },
  {
    id: 4,
    section: "AIの筋肉",
    sectionLabel: "AIの筋肉",
    navLabel: "AIの筋肉",
    variant: "overview",
    title: "なぜAIには「グラボ」が必要なのか？",
    headline: "計算を“並列”で回すため。",
    goal: "CPUとGPUの違いを理解し、GPUがAIに必要な理由を説明できるようにする。",
    paragraphs: [
      "AIの計算は、単純な足し算・掛け算を数兆回繰り返すこと。",
      "[[CPU]]（普通の脳）は「1人の天才」、[[GPU]]（AIの筋肉）は「1万人の力持ち」。",
      "[[RTX 3060]]（VRAM 12GB）: 「広い机」を持つ、ローカルAIの登竜門。",
      "[[RTX 40/50シリーズ]]: 圧倒的なスピードでAIを走らせる、現代のスーパーコンピュータ。"
    ],
    details: {
      "CPU": "少数のコアで高精度な処理を行う。AIの大量計算には時間がかかります。",
      "GPU": "大量の小さな計算を並列で処理できるため、AI推論や学習が高速化します。",
      "RTX 3060": "VRAM容量が多めで、ローカルAIの入門機として扱いやすいGPU。",
      "RTX 40/50シリーズ": "高性能GPUの代表例として、速度とVRAMの余裕を強調しています。"
    }
  },
  {
    id: 104,
    section: "AIの筋肉",
    sectionLabel: "AIの筋肉 / 解説",
    navLabel: "AIの筋肉（解説）",
    variant: "detail",
    title: "GPUはなぜ速いのか",
    headline: "並列計算とメモリ帯域。",
    goal: "AI計算のボトルネックを把握する。",
    paragraphs: [
      "AIは[[行列計算]]が中心で、同じ処理を大量に並列実行する。",
      "GPUは[[コア]]数が多く、[[メモリ帯域]]も広い。",
      "VRAMは「[[作業机]]」。大きいほどモデルを丸ごと載せられる。",
      "学習データは[[重み]]として圧縮され、[[コンテキストウィンドウ]]にも物理的な限界がある。",
      "小さい場合は[[量子化]]や[[分割読み込み]]で工夫する。"
    ],
    details: {
      "行列計算": "AIが大量に行う掛け算の塊。",
      "コア": "並列処理を行う計算ユニット。",
      "メモリ帯域": "データを運ぶ速度。広いほど高速。",
      "作業机": "VRAM容量の比喩。机が大きいほど作業が楽になる。",
      "重み": "学習結果が数値として保存されたもの。個別の事実をそのまま覚えているわけではない。",
      "コンテキストウィンドウ": "一度に扱える情報量の上限。長文ほどメモリを使う。",
      "量子化": "モデルを軽量化してGPU負荷を下げる方法。",
      "分割読み込み": "モデルを小さく区切って使う工夫。"
    }
  },
  {
    id: 5,
    section: "ローカルAI",
    sectionLabel: "ローカルAI",
    navLabel: "ローカルAI",
    variant: "overview",
    title: "ネットを切り、自分のPCでAIを動かす",
    headline: "自分だけの知能を飼う。",
    goal: "ローカルAIのメリットを理解し、具体的な導入イメージを持つ。",
    paragraphs: [
      "[[LM Studio]]: 誰でも簡単に、世界中の最新AIを自分のPCにダウンロードできる基地。",
      "なぜローカルか？:",
      "- 秘密が漏れない（[[プライバシー]]）。",
      "- ネットがなくても動く（[[オフライン]]）。",
      "- AIを自分好みに「[[改造]]」できる。",
      "君のRTX 3060やRTX 40/50シリーズは、AIを飼うための「[[ケージ]]」だ。"
    ],
    details: {
      "LM Studio": "GUIでモデルを探し、ダウンロードして実行できるローカルAIツール。",
      "プライバシー": "機密情報を外部に送らないことで、安心して利用できる。",
      "オフライン": "ネットワークが無い環境でも使えるため、場所を選ばない。",
      "改造": "モデル設定やプロンプト、追加知識でAIの個性を作れる。",
      "ケージ": "GPUとメモリが、AIを走らせる“器”になるという比喩。"
    }
  },
  {
    id: 105,
    section: "ローカルAI",
    sectionLabel: "ローカルAI / 解説",
    navLabel: "ローカルAI（解説）",
    variant: "detail",
    title: "ローカルAI運用のイメージ",
    headline: "手元にAIを置く理由。",
    goal: "ローカル導入の価値と運用の流れを理解する。",
    paragraphs: [
      "[[ダウンロード]]したモデルをPCで動かすと、[[速度]]と自由度が上がる。",
      "社外に出せない[[機密データ]]や作品プロットはローカル処理が安心。",
      "機密情報を外に出さない[[プライバシー]]運用ができる。",
      "オフラインでも動くので、[[環境]]を選ばない。",
      "さらに[[プロンプト設計]]や[[追加知識]]で“自分専用”に近づけられる。"
    ],
    details: {
      "ダウンロード": "モデルをローカルPCに保存して使うこと。",
      "速度": "ネット通信が無い分、反応が安定しやすい。",
      "機密データ": "社外秘資料や個人情報など外部に出せない情報。",
      "プライバシー": "社内情報や個人情報を安全に扱える。",
      "環境": "ネットが不安定な場所でも活用できる。",
      "プロンプト設計": "指示文を工夫して出力品質を上げる。",
      "追加知識": "FAQや設定資料などを与えて“専用AI”に近づける。"
    }
  },
  {
    id: 6,
    section: "NVIDIA NeMo",
    sectionLabel: "NVIDIA NeMo",
    navLabel: "NVIDIA NeMo",
    variant: "overview",
    title: "既存のAIを「君専用」に染め上げる",
    headline: "知識を教える工場。",
    goal: "ファインチューニングの概念とNeMoの役割を理解する。",
    paragraphs: [
      "世の中にあるAIは「一般的なこと」しか知らない。",
      "[[NeMo]]: 特定の知識（例：君の趣味、自作ゲームの設定）をAIに叩き込むための工場。",
      "「[[ファインチューニング]]」という魔法を使えば、世界に一つだけのAIが誕生する。",
      "必要なのは、良質な[[データセット]]と目的設計。"
    ],
    details: {
      "NeMo": "モデル学習や微調整を支援するNVIDIAのフレームワーク。",
      "ファインチューニング": "既存モデルに追加学習させ、特定領域に強くする手法。",
      "データセット": "学習に使う例文や資料。質と量が結果を左右します。"
    }
  },
  {
    id: 106,
    section: "NVIDIA NeMo",
    sectionLabel: "NVIDIA NeMo / 解説",
    navLabel: "NVIDIA NeMo（解説）",
    variant: "detail",
    title: "AIに“教科書”を渡す",
    headline: "ファインチューニングとRAGの使い分け。",
    goal: "NeMoを使う意義と学習設計を理解する。",
    paragraphs: [
      "NeMoはモデルを[[学習]]させるための工場。",
      "少量データなら[[微調整]]、大量知識なら[[RAG]]が効く。",
      "質の高い[[教材データ]]が成果を決める。",
      "目的を決め、[[評価]]しながら改善する。"
    ],
    details: {
      "学習": "AIに新しい知識を教える作業。",
      "微調整": "既存モデルに少量データで追加学習する手法。",
      "RAG": "検索で知識を引き出して回答する仕組み。",
      "教材データ": "教えたい内容を整理した資料群。",
      "評価": "精度や安全性を確認し改善する工程。"
    }
  },
  {
    id: 7,
    section: "生成AI",
    sectionLabel: "生成AI",
    navLabel: "生成AI",
    variant: "overview",
    title: "画像・動画・音楽。AIの「想像力」",
    headline: "言葉から世界を作る。",
    goal: "生成AIの仕組みと用途を俯瞰してイメージできるようにする。",
    paragraphs: [
      "[[画像]]: 言葉を色に変える（Flux / Nano Banana 2）。",
      "[[動画]]: 数秒のテキストから映画を作る（Sora / Veo）。",
      "[[音楽]]: 感情を音符に変える（Lyria 3）。",
      "本質: AIは絵を描いているのではない。[[ノイズ]]だらけの砂嵐の中から、言葉に合う「形」を彫りだしている。"
    ],
    details: {
      "画像": "テキストから1枚絵やコンセプトアートを生成する領域。",
      "動画": "短い映像をテキストから作る技術で、広告や映像試作に活用されます。",
      "音楽": "作曲やサウンドスケープ生成に使われる分野。",
      "ノイズ": "ランダムな状態から徐々に形を整える生成手法のイメージ。"
    }
  },
  {
    id: 107,
    section: "生成AI",
    sectionLabel: "生成AI / 解説",
    navLabel: "生成AI（解説）",
    variant: "detail",
    title: "生成AIの中身",
    headline: "ノイズから形を彫り出す。",
    goal: "生成AIの基本プロセスを理解する。",
    paragraphs: [
      "拡散モデルは[[ノイズ]]から少しずつ画像を整える。",
      "テキストは[[条件]]として働き、生成の方向を決める。",
      "画像・動画・音楽は[[表現]]が違うだけで、生成原理は似ている。",
      "出力には[[著作権]]や[[倫理]]の配慮が必要。"
    ],
    details: {
      "ノイズ": "ランダムな状態から徐々に形を作る生成手法。",
      "条件": "プロンプトや制約条件のこと。",
      "表現": "画像・映像・音など出力の形式。",
      "著作権": "既存作品との類似に配慮する必要がある。",
      "倫理": "差別・誤情報など社会的影響への配慮。"
    }
  },
  {
    id: 8,
    section: "GitHub",
    sectionLabel: "GitHub",
    navLabel: "GitHub",
    variant: "overview",
    title: "世界中の「設計図」が集まる場所",
    headline: "知能の貯蔵庫。",
    goal: "GitHubの役割を理解し、AI学習との関係を説明できる。",
    paragraphs: [
      "[[GitHub]]: プログラムのコードを保存し、みんなで磨き上げる巨大な基地。",
      "AI（Codex）はここにある数億のコードを読んで賢くなった。",
      "君が作ったものをGitHubに置けば、今度はAIが君を助けてくれる。",
      "キーワードは[[リポジトリ]]と[[コミュニティ]]。"
    ],
    details: {
      "GitHub": "コードを保存・共有するためのプラットフォーム。",
      "リポジトリ": "プロジェクト単位の保管庫。履歴や変更点を追跡できます。",
      "コミュニティ": "世界中の開発者が協力し、コードを改善していく仕組み。"
    }
  },
  {
    id: 108,
    section: "GitHub",
    sectionLabel: "GitHub / 解説",
    navLabel: "GitHub（解説）",
    variant: "detail",
    title: "GitHubで知識が回る",
    headline: "コードは共同編集の資産。",
    goal: "GitHubの仕組みとAIとの関係を説明できる。",
    paragraphs: [
      "GitHubは[[バージョン管理]]の中心。",
      "[[Issue]]で課題を管理し、[[Pull Request]]で改善する。",
      "AIは公開コードを学び、[[パターン]]を獲得した。",
      "公開する時は[[ライセンス]]を確認する。"
    ],
    details: {
      "バージョン管理": "変更履歴を残し、過去に戻れる仕組み。",
      "Issue": "課題やタスクを共有する仕組み。",
      "Pull Request": "変更内容をレビューして取り込む流れ。",
      "パターン": "よく使われる実装の型。",
      "ライセンス": "利用条件を定める契約。"
    }
  },
  {
    id: 9,
    section: "未来の形",
    sectionLabel: "未来の形",
    navLabel: "未来の形",
    variant: "overview",
    title: "エージェント（自律型AI）",
    headline: "プロンプトはもういらない？",
    goal: "目標駆動型AIのイメージを持ち、従来のプロンプト型と比較できる。",
    paragraphs: [
      "「○○を調べて」「○○を作って」と細かく指示するのはもう古い。",
      "[[エージェント]]: 「夏休みの旅行を予約して」「面白いゲームを作って」と[[目標]]を投げるだけ。",
      "AIが自分で考え、[[ツール]]を使い、コードを書き、目的を達成する。",
      "人間は最後の判断をする[[監督]]になる。"
    ],
    details: {
      "エージェント": "複数の作業を連続で実行できる自律型AIの概念。",
      "目標": "達成したい結果だけを渡し、手順はAIに任せる。",
      "ツール": "ブラウザ操作、ファイル編集、API呼び出しなどの実行手段。",
      "監督": "最終判断や方向修正を行う人間の役割。"
    }
  },
  {
    id: 109,
    section: "未来の形",
    sectionLabel: "未来の形 / 解説",
    navLabel: "未来の形（解説）",
    variant: "detail",
    title: "エージェントの動き方",
    headline: "計画→実行→観測のループ。",
    goal: "エージェントの基本ループと制御点を理解する。",
    paragraphs: [
      "エージェントは[[計画]]を立て、[[実行]]し、[[観測]]して修正する。",
      "ツール利用は強力だが、[[制約]]と[[ログ]]が必要。",
      "目標が曖昧だと暴走しやすい。[[定義]]が重要。",
      "人間は[[監督]]として最終判断する。"
    ],
    details: {
      "計画": "タスクを分解して順序を決める工程。",
      "実行": "実際にツールを動かす工程。",
      "観測": "結果を確認し、次の行動に反映する。",
      "制約": "やってはいけないことを決めるルール。",
      "ログ": "どの操作をしたかの記録。",
      "定義": "目標を具体化すること。",
      "監督": "最後に判断する人間の役割。"
    }
  },
  {
    id: 10,
    section: "PC環境の作り方",
    sectionLabel: "PC環境の作り方",
    navLabel: "PC環境の作り方",
    variant: "overview",
    title: "RTX 3060からRTX 40/50シリーズまで、それぞれの戦い方",
    headline: "装備が変われば戦術も変わる。",
    goal: "GPU性能に合わせた戦い方を理解し、共通ツールを把握する。",
    paragraphs: [
      "[[RTX 3060]]（VRAM 12GB）: 重いモデルも「[[量子化]]」すれば動く。工夫で勝つ技術力が身につく。",
      "[[RTX 40/50シリーズ]]: 圧倒的パワーで「試行錯誤の回数」を稼げる。",
      "共通の武器: [[VS Code]]、[[Python]]、[[LM Studio]]。これがあれば誰でもエンジニア。"
    ],
    details: {
      "RTX 3060": "VRAMに制限がある環境では、軽量化や工夫が重要。",
      "量子化": "モデルの重みを低精度化して軽くする手法。性能と速度のバランスを取る。",
      "RTX 40/50シリーズ": "高性能GPUは試行回数を増やし、開発速度を上げられる。",
      "VS Code": "定番のコードエディタ。拡張機能でAI開発環境を整えられる。",
      "Python": "AI開発の中心言語。多くのライブラリが揃っている。",
      "LM Studio": "ローカルAI環境を作るためのGUIツールとして再登場。"
    }
  },
  {
    id: 110,
    section: "PC環境の作り方",
    sectionLabel: "PC環境の作り方 / 解説",
    navLabel: "PC環境の作り方（解説）",
    variant: "detail",
    title: "環境設計のコツ",
    headline: "性能差を戦略に変える。",
    goal: "自分のPCに合った運用を組めるようにする。",
    paragraphs: [
      "GPUの[[VRAM]]容量と[[速度]]で動くモデルが変わる。",
      "RTX 3060は[[軽量モデル]]や[[量子化]]で工夫。",
      "RTX 40/50シリーズは[[試行回数]]を稼げ、学習も有利。",
      "共通の基盤は[[Python]]、[[エディタ]]、[[ローカル環境]]。"
    ],
    details: {
      "VRAM": "GPU上のメモリ容量。モデルサイズに影響。",
      "速度": "計算性能。反復試行の回数が増える。",
      "軽量モデル": "小さめのモデルで省メモリ運用。",
      "量子化": "重みを低精度化して軽量化。",
      "試行回数": "繰り返し実験できる回数。",
      "Python": "AI開発で中心となる言語。",
      "エディタ": "VS Codeなどの開発環境。",
      "ローカル環境": "自分のPCで完結する開発環境。"
    }
  },
  {
    id: 11,
    section: "AIリテラシー",
    sectionLabel: "AIリテラシー",
    navLabel: "AIリテラシー",
    variant: "overview",
    title: "AIは「もっともらしい嘘」をつく",
    headline: "最後は君が決める。",
    goal: "AIの限界を理解し、検証・判断の重要性を理解する。",
    paragraphs: [
      "AIには[[真実判定]]がなく、文脈的にもっともらしい文章を合成するため[[ハルシネーション]]が起きる。",
      "事実確認には[[一次情報]]や[[RAG]]が必要。",
      "[[司令官]]の責任: AIの出してきた成果物をチェックし、最後に「GO」を出すのは、君という人間だ。",
      "AIに命令されるな。AIを[[指揮]]せよ。"
    ],
    details: {
      "ハルシネーション": "文脈的にもっともらしいが、事実と違う内容が生成される現象。",
      "真実判定": "生成内容の真偽を自動で保証する機能は持たない。",
      "RAG": "検索で根拠を引き出し、回答に反映する方法。",
      "司令官": "AIの成果を検証し、最終判断する人間の役割。",
      "指揮": "目的・制約・品質を設定し、AIに正しく働かせること。"
    }
  },
  {
    id: 111,
    section: "AIリテラシー",
    sectionLabel: "AIリテラシー / 解説",
    navLabel: "AIリテラシー（解説）",
    variant: "detail",
    title: "AIを使いこなす判断力",
    headline: "検証と責任を手放さない。",
    goal: "AI出力の評価方法を理解する。",
    paragraphs: [
      "AIは[[もっともらしい]]説明を作れる。",
      "AIは[[真実判定]]を持たないため、[[一次情報]]で確認する。",
      "必要なら[[RAG]]で根拠を補う。",
      "誤りが出たら[[原因]]を振り返り、プロンプトやデータを修正する。",
      "最後の[[責任]]は人間にある。"
    ],
    details: {
      "もっともらしい": "正しそうに見えるが誤りを含む出力。",
      "真実判定": "AIが正否を保証する機能は持たないという前提。",
      "一次情報": "公式ドキュメントや実測などの根拠。",
      "RAG": "検索や資料参照で根拠を補う仕組み。",
      "原因": "誤りの理由を分析して改善につなげる。",
      "責任": "最終判断を下すのは人間。"
    }
  },
  {
    id: 12,
    section: "エンディング",
    sectionLabel: "エンディング",
    navLabel: "エンディング",
    variant: "overview",
    title: "さあ、何を作る？",
    headline: "AIは君の限界を突破するための翼。",
    goal: "行動を促し、次の一歩を明確にする。",
    paragraphs: [
      "知識は揃った。道具（PC）もある。",
      "AIは君の限界を突破するための「[[翼]]」だ。",
      "今日、この後すぐに[[GitHub]]のアカウントを作り、[[最初のコード]]をAIと一緒に書いてみよう。"
    ],
    details: {
      "翼": "AIを使うことで行動範囲が広がるという比喩。",
      "GitHub": "成果を公開し、学びを共有する最初の場所。",
      "最初のコード": "小さくても良い。1行のプログラムから始めることが重要。"
    }
  },
  {
    id: 112,
    section: "エンディング",
    sectionLabel: "エンディング / 解説",
    navLabel: "エンディング（解説）",
    variant: "detail",
    title: "今日からの一歩",
    headline: "行動すれば技術になる。",
    goal: "具体的な行動に繋げる。",
    paragraphs: [
      "小さくてもいいから[[プロジェクト]]を作る。",
      "[[GitHub]]に置くと履歴が残り、成長が見える。",
      "AIに相談しながら[[改善]]を続ける。",
      "大事なのは[[継続]]。"
    ],
    details: {
      "プロジェクト": "自分で動かせる成果物を作ること。",
      "GitHub": "成果と履歴を残す場所。",
      "改善": "少しずつ手を入れて品質を上げる行為。",
      "継続": "続けることが一番の成長要素。"
    }
  },
  {
    id: 113,
    section: "メッセージ",
    sectionLabel: "メッセージ",
    navLabel: "メッセージ",
    variant: "message",
    badge: "メッセージ",
    title: "このスライドはAIで作成しました",
    headline: "今の自分の位置を確かめる。",
    goal: "AI活用の段階を自覚し、次の一歩を見つける。",
    paragraphs: [
      "このスライドは[[AI制作]]で作成しました。",
      "AIで作成した部分は、スライドの文面のすべて、解説のすべて、HTMLのコードのすべて、JavaScriptのコードのすべて、CSSのコードのすべて、ホームページとして公開することのすべてです。",
      "ここまで読んでどう思いましたか？",
      "・AIでなんでもできる",
      "・AIすごい",
      "・どんなプロンプトを打ち込んだのだろうか",
      "・このサイトを作る[[きっかけ]]はなんだったんだろうか",
      "・自分ならもっとこうするのに",
      "様々な段階があります。自分が今どこにいるのか確認し、背伸びせず確実に[[次の一歩]]を進みましょう。"
    ],
    details: {
      "AI制作": "企画から実装・公開まで、AIと共同で進めたという宣言。",
      "きっかけ": "作り始めた動機を振り返ると、次に作りたいものが見えてくる。",
      "次の一歩": "今の理解度に合わせた小さな挑戦を選ぶこと。"
    }
  }
];

const navList = document.getElementById("nav-list");
const slideSection = document.getElementById("slide-section");
const slideVariant = document.getElementById("slide-variant");
const slideNumber = document.getElementById("slide-number");
const slideTitle = document.getElementById("slide-title");
const slideHeadline = document.getElementById("slide-headline");
const slideBody = document.getElementById("slide-body");
const keywordChips = document.getElementById("keyword-chips");
const detailKeyword = document.getElementById("detail-keyword");
const detailText = document.getElementById("detail-text");
const detailGoal = document.getElementById("detail-goal");
const progressNumber = document.getElementById("progress-number");
const progressTotal = document.getElementById("progress-total");
const progressBar = document.getElementById("progress-bar");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const slideEl = document.querySelector(".slide");
const detailBox = document.querySelector(".detail-inner");
const sizeButtons = document.querySelectorAll(".size-btn");
const focusBtn = document.getElementById("focus-btn");
const fullscreenBtn = document.getElementById("fullscreen-btn");
const appEl = document.querySelector(".app");

let currentIndex = 0;
let currentKeyword = null;

const toIndex = (index) => String(index + 1).padStart(2, "0");

const buildNav = () => {
  navList.innerHTML = "";
  slides.forEach((slide, index) => {
    const item = document.createElement("li");
    item.className = `nav-item${slide.variant === "detail" ? " detail" : ""}`;
    item.dataset.index = index;
    item.innerHTML = `<span>${slide.navLabel}</span><span class="nav-index">${toIndex(index)}</span>`;
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
  const slide = slides[currentIndex];
  if (!slide.details[key]) {
    return;
  }
  currentKeyword = key;
  detailKeyword.textContent = key;
  detailText.textContent = slide.details[key];
  detailGoal.textContent = slide.goal;
  highlightKeyword(key);

  detailBox.classList.remove("pulse");
  void detailBox.offsetWidth;
  detailBox.classList.add("pulse");
};

const renderSlide = () => {
  const slide = slides[currentIndex];
  slideSection.textContent = slide.sectionLabel;
  slideNumber.textContent = toIndex(currentIndex);
  slideTitle.textContent = slide.title;
  slideHeadline.textContent = slide.headline;
  slideVariant.textContent = slide.badge ?? (slide.variant === "detail" ? "解説" : "説明");

  slideEl.classList.toggle("is-detail", slide.variant === "detail");
  slideEl.classList.toggle("is-overview", slide.variant !== "detail");

  const bodyHtml = slide.paragraphs
    .map((text) => {
      const safe = text.replace(/\[\[(.+?)\]\]/g, (_match, key) => {
        return `<span class="kw" data-key="${key}">${key}</span>`;
      });
      return `<p>${safe}</p>`;
    })
    .join("");

  slideBody.innerHTML = bodyHtml;

  keywordChips.innerHTML = "";
  Object.keys(slide.details).forEach((key) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.dataset.key = key;
    chip.textContent = key;
    chip.addEventListener("click", () => selectKeyword(key));
    keywordChips.appendChild(chip);
  });

  slideBody.querySelectorAll(".kw").forEach((el) => {
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
  progressTotal.textContent = String(slides.length).padStart(2, "0");
  progressBar.style.width = `${((currentIndex + 1) / slides.length) * 100}%`;

  slideEl.classList.remove("swap");
  void slideEl.offsetWidth;
  slideEl.classList.add("swap");
};

const goTo = (index) => {
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  renderSlide();
};

prevBtn.addEventListener("click", () => goTo(currentIndex - 1));
nextBtn.addEventListener("click", () => goTo(currentIndex + 1));

const setSlideSize = (size) => {
  document.body.dataset.slideSize = size;
  sizeButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.size === size);
  });
};

sizeButtons.forEach((btn) => {
  btn.addEventListener("click", () => setSlideSize(btn.dataset.size));
});

focusBtn.addEventListener("click", () => {
  const enabled = appEl.classList.toggle("focus-mode");
  focusBtn.classList.toggle("active", enabled);
  focusBtn.setAttribute("aria-pressed", String(enabled));
});

const syncFullscreenButton = () => {
  const isFull = Boolean(document.fullscreenElement);
  fullscreenBtn.classList.toggle("active", isFull);
  fullscreenBtn.setAttribute("aria-pressed", String(isFull));
  fullscreenBtn.textContent = isFull ? "Exit" : "Full";
};

fullscreenBtn.addEventListener("click", async () => {
  try {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  } catch (_error) {
    // Fullscreen may be blocked by the browser; fail silently.
  }
});

document.addEventListener("fullscreenchange", syncFullscreenButton);

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
