import React from "react";

const UzbekPlovPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-[72px]">
          {/* Левая часть - Логотип и текст */}
          <div className="flex items-center">
            {/* Логотип */}
            <div>
              {" "}
              <img
                src="/logo.png"
                alt="Uラボ Logo"
                className="h-14 w-auto object-contain"
              />
            </div>

            <div className="text-sm text-gray-600 font-medium  pl-4 ml-4">
              ウズベキスタン情報局
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-500 cursor-pointer">
              <span className="text-sm font-medium">基本情報</span>
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-500 cursor-pointer">
              <span className="text-sm font-medium">エリアガイド</span>
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-500 cursor-pointer text-sm font-medium"
            >
              モデルコース
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-500 cursor-pointer text-sm font-medium"
            >
              ビジネス
            </a>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium">
              お問い合わせする
            </button>
          </nav>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[72px]"></div>

      <div className="bg-gray-50 py-1">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-600">
            Uラボ｜ウズベキスタン情報局 ＞
            ウズベキスタン完全ガイド：主要料理地や旅行予算を徹底解説！
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-400 via-blue-300 to-green-300 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm inline-block mb-4 font-medium">
            #ウズベキスタン料理
          </div>
          <div className="text-sm text-white mb-2 opacity-90">
            公開日：2025/08/01 ｜ 作成者：ウラボ編集部
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            ウズベキスタンプロフ完全ガイド：主要材料や料理予算を徹底解説！
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
        {/* Main Article */}
        <main className="flex-1">
          {/* Hero Image */}
          <div className="mb-8">
            <img
              src="/assets/images/palov.jpg"
              alt="ウズベキスタンの伝統的なプロフ"
              className="w-full h-100 object-cover rounded-lg"
            />
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
              シルクロードの美食文化が息づくウズベキスタンの国民食「プロフ」。本格レシピ、文化的背景、日本で味わえる場所まで、プロフの全てを詳しく解説します。
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-center mb-6 text-gray-800">
              目次
            </h2>
            <div className="space-y-1 text-sm">
              <div className="font-bold text-gray-800">
                1. ウズベキスタンのプロフとは？基本知識と文化的意義
              </div>
              <div className="ml-6 text-gray-700">1-1. プロフの基本情報</div>
              <div className="ml-6 text-gray-700">1-2. 文化的・社会的意義</div>
              <div className="ml-8 text-gray-600">
                1-2-1. 国民食としての地位
              </div>
              <div className="ml-8 text-gray-600">
                1-2-2. プロフの語源と歴史
              </div>
              <div className="ml-8 text-gray-600">
                1-2-3. 男性が作る伝統料理
              </div>

              <div className="font-bold text-gray-800 pt-2">
                2. プロフの種類と地域別特徴
              </div>
              <div className="ml-6 text-gray-700">2-1. 主要な種類</div>
              <div className="ml-6 text-gray-700">
                2-2. 使用される米と肉の種類
              </div>

              <div className="font-bold text-gray-800 pt-2">
                3. 本格プロフの作り方（家庭版レシピ）
              </div>
              <div className="ml-6 text-gray-700">3-1. 必要な材料</div>
              <div className="ml-6 text-gray-700">3-2. 調理手順</div>

              <div className="font-bold text-gray-800 pt-2">
                4. 日本でプロフを味わえる場所
              </div>

              <div className="font-bold text-blue-600 pt-2">まとめ</div>
            </div>
          </div>

          {/* Article Content */}
          <article className="prose max-w-none">
            {/* Section 1 */}
            <div className="mb-12">
              <div className="border-l-4 border-blue-500 pl-4 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-0">
                  1. ウズベキスタンのプロフとは？基本知識と文化的意義
                </h2>
              </div>

              <div className="border-l-4 border-blue-300 pl-4 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-0">
                  1-1. プロフの基本情報
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                プロフ（ウズベク語：Palov）は、ウズベキスタンをはじめとする中央アジア諸国の国民食として愛され続けている米料理です。単なる炊き込みご飯を超えた、深い文化的意義を持つ特別な料理として位置づけられています。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8 border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="font-semibold">正式名称：</span>
                    Palov（パロフ）/ Plov（プロフ）
                  </div>
                  <div>
                    <span className="font-semibold">料理分類：</span>
                    米料理（炊き込みご飯系）
                  </div>
                  <div>
                    <span className="font-semibold">主な材料：</span>
                    米、羊肉（牛肉）、人参、玉ねぎ
                  </div>
                  <div>
                    <span className="font-semibold">調理法：</span>
                    大きな釜での炊き込み
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-300 pl-4 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-0">
                  1-2. 文化的・社会的意義
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                プロフは単なる料理以上の存在です。ウズベキスタンの社会において、家族の絆を深め、客人をもてなし、特別な日を祝う象徴的な料理として機能しています。その文化的重要性を理解することで、プロフの真の魅力を感じることができるでしょう。
              </p>

              <h4 className="font-bold text-gray-800 mb-3">
                1-2-1. 国民食としての地位
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                プロフはウズベキスタンをはじめ、タジキスタン、カザフスタン、キルギスタン、トルクメニスタンの中央アジア5カ国で国民食として愛されています。結婚式、誕生日、宗教的な祝日など、人生の重要な節目には必ずプロフが振る舞われます。
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                興味深いことに、プロフは宴会の「締めくくり」を意味する料理でもあります。家の主人がプロフを作って出すことで、「今日の集まりはここでお開きです」という合図になるのです。この慣習は現在でも厳格に守られています。
              </p>

              <h4 className="font-bold text-gray-800 mb-3">
                1-2-2. プロフの語源と歴史
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                プロフの語源は、トルコやインドの伝統的な米料理「プラウ（Pulao）」に由来すると考えられています。シルクロードを通じた文化交流により、各地の調理法や香辛料が融合し、現在のプロフの形が完成しました。
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                中国からヨーロッパに至るシルクロードの要所に位置するウズベキスタンでは、東西の食文化が出会い、独自の発展を遂げました。そのため、プロフには中国の炒飯、インドのビリヤニ、中東のピラフの要素が巧みに組み合わされているのです。
              </p>

              <h4 className="font-bold text-gray-800 mb-3">
                1-2-3. 男性が作る伝統料理
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                ウズベキスタンでは伝統的に、プロフは男性（特に家の主人）が作る料理とされています。これは単なる習慣ではなく、プロフ作りが一種の技術であり、社会的責任の表れと考えられているからです。
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                大勢の客人をもてなすために大量のプロフを作ることは、家の主人としての威厳と技量を示す重要な機会です。そのため、プロフの腕前は男性の社会的評価にも影響を与えるほど重要視されています。
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <div className="border-l-4 border-blue-500 pl-4 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-0">
                  2. プロフの種類と地域別特徴
                </h2>
              </div>

              <div className="border-l-4 border-blue-300 pl-4 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-0">
                  2-1. 主要な種類
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                ウズベキスタン国内でも地域によってプロフの作り方や具材に違いがあります。それぞれの地域の特色を活かした個性豊かなプロフが存在し、その多様性もプロフの魅力の一つです。
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    サマルカンド・プロフ
                  </h4>
                  <p className="text-sm text-gray-700">
                    最もシンプルで伝統的なスタイル。肉、人参、玉ねぎのみを使用し、素材の味を最大限に活かした上品な仕上がりが特徴です。
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    タシケント・プロフ
                  </h4>
                  <p className="text-sm text-gray-700">
                    より豪華なバージョンで、ひよこ豆、レーズン、バーベリーなどを加えます。甘みと酸味のバランスが絶妙な現代的なスタイルです。
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    結婚式のプロフ
                  </h4>
                  <p className="text-sm text-gray-700">
                    特別な日のための最高級プロフ。ゆで卵、馬肉ソーセージ、様々なドライフルーツを贅沢に使用した華やかな一皿です。
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-blue-300 pl-4 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-0">
                  2-2. 使用される米と肉の種類
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                プロフの美味しさを左右する重要な要素が、米と肉の選択です。本場ウズベキスタンでは特定の品種が使われますが、日本でも入手可能な材料で十分美味しいプロフを作ることができます。
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg border">
                  <h4 className="font-semibold text-gray-800 mb-3">米の種類</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">デヴズィラ米：</span>
                      ウズベキスタンの最高級米
                    </div>
                    <div>
                      <span className="font-medium">バスマティ米：</span>
                      長粒米、日本でも入手可能
                    </div>
                    <div>
                      <span className="font-medium">日本の米：</span>
                      短粒米でも美味しく作れる
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border">
                  <h4 className="font-semibold text-gray-800 mb-3">肉の種類</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">羊肉：</span>
                      最も伝統的、本格的な味わい
                    </div>
                    <div>
                      <span className="font-medium">牛肉：</span>
                      日本人に馴染みやすい
                    </div>
                    <div>
                      <span className="font-medium">鶏肉：</span>
                      あっさりとしたプロフに
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <div className="border-l-4 border-blue-500 pl-4 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-0">
                  3. 本格プロフの作り方（家庭版レシピ）
                </h2>
              </div>

              <div className="border-l-4 border-blue-300 pl-4 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-0">
                  3-1. 必要な材料（4人分）
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    メイン材料
                  </h4>
                  <div className="space-y-1 text-sm">
                    <div>• 米（バスマティまたは長粒米）: 500g</div>
                    <div>• 牛肉または羊肉（角切り）: 300g</div>
                    <div>• 人参: 2本（細切り）</div>
                    <div>• 玉ねぎ: 2個（薄切り）</div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    スパイス・調味料
                  </h4>
                  <div className="space-y-1 text-sm">
                    <div>• クミンシード: 小さじ1</div>
                    <div>• 塩: 適量</div>
                    <div>• 黒胡椒: 少々</div>
                    <div>• 植物油: 大さじ4-5</div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-300 pl-4 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-0">
                  3-2. 調理手順
                </h3>
              </div>

              <div className="space-y-6 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg border">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    ステップ1: 下準備
                  </h4>
                  <p className="text-sm text-gray-700 mb-2">
                    米を洗い、15分間水に浸してから水切りします。肉は一口大にカットし、軽く塩胡椒を振ります。野菜は人参を細切り、玉ねぎを薄切りにします。
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    ステップ2: 肉と野菜を炒める
                  </h4>
                  <p className="text-sm text-gray-700 mb-2">
                    厚手の鍋に油を熱し、強火で肉を焼きます。焼き色がついたら玉ねぎ、続いて人参を加えて炒めます。クミンシードを加え、香りが立つまで炒めます。
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    ステップ3: 米を加えて炊く
                  </h4>
                  <p className="text-sm text-gray-700 mb-2">
                    炒めた具材の上に米を平らに敷きます。熱湯を米が隠れるまで注ぎ（約600ml）、塩で味を調えます。強火で沸騰させた後、弱火で15-20分炊きます。
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    ステップ4: 蒸らしと仕上げ
                  </h4>
                  <p className="text-sm text-gray-700 mb-2">
                    火を止めて10分間蒸らします。全体を混ぜ合わせて器に盛り、お好みでゆで卵やレーズンをトッピングして完成です。
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">調理のコツ</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div>
                    • <span className="font-medium">油の量：</span>
                    伝統的には多めの油を使用（旨味の源）
                  </div>
                  <div>
                    • <span className="font-medium">火加減：</span>
                    最初は強火、米を加えたら弱火で
                  </div>
                  <div>
                    • <span className="font-medium">混ぜるタイミング：</span>
                    炊いている間は混ぜない
                  </div>
                  <div>
                    • <span className="font-medium">蒸らし：</span>
                    必ず蒸らし時間を取る
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <div className="border-l-4 border-blue-500 pl-4 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-0">
                  4. 日本でプロフを味わえる場所
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                日本国内でも本格的なウズベキスタン料理を提供するレストランが増えており、本場の味を楽しむことができます。特に東京都内には数軒の専門店があります。
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg border">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    サマルカンド（高田馬場）
                  </h4>
                  <p className="text-sm text-gray-700 mb-3">
                    日本で数少ない本格的なプロフ釜を持つレストラン。サマルカンド出身のシェフが作る
                    authentic な味が楽しめます。週末は予約必須の人気店です。
                  </p>
                  <div className="text-xs text-gray-600">
                    <div>📍 東京都新宿区高田馬場</div>
                    <div>⏰ 11:30-15:00, 17:30-23:00</div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    ウズベキスタン料理 アロカ（新大久保）
                  </h4>
                  <p className="text-sm text-gray-700 mb-3">
                    新大久保の国際色豊かなエリアにある隠れた名店。家庭的な雰囲気で本場の味を楽しめます。プロフ以外のウズベキスタン料理も充実しています。
                  </p>
                  <div className="text-xs text-gray-600">
                    <div>📍 東京都新宿区大久保</div>
                    <div>⏰ 12:00-15:00, 18:00-23:00</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">
                  食べ方のマナー
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div>
                    • <span className="font-medium">共有文化：</span>
                    大皿から皆で分け合って食べるのが伝統
                  </div>
                  <div>
                    • <span className="font-medium">感謝の表現：</span>
                    「ラフマット」（ありがとう）と言って感謝を示す
                  </div>
                  <div>
                    • <span className="font-medium">ゆっくりと：</span>
                    会話を楽しみながらゆっくりと味わう
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mb-12">
              <div className="border-l-4 border-blue-500 pl-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-0">
                  まとめ
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                ウズベキスタンのプロフは、単なる米料理を超えた文化的価値を持つ特別な料理です。シルクロードで育まれた豊かな味わいと、家族や友人との絆を深める社会的意義を併せ持っています。
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                家庭でも比較的簡単に作ることができ、日本人の味覚にも合う優しい味わいが魅力です。本格的なウズベキスタン料理を体験したい方は、ぜひ一度チャレンジしてみてください。また、東京都内の専門レストランで本場の味を楽しむのもおすすめです。
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                プロフを通じて、遠いシルクロードの文化に触れ、新たな美食体験を楽しんでみてはいかがでしょうか。きっと、その奥深い味わいと文化的背景に魅了されることでしょう。
              </p>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-lg p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Contact</h3>
              <p className="text-lg mb-6 opacity-90">お問い合わせ</p>

              <div className="space-y-2 mb-6 text-sm opacity-90">
                <div>• ウズベキスタン料理教室を検討している方</div>
                <div>• 本格的なプロフのレシピをお求めの方</div>
                <div>• ウズベキスタン文化について取材したいメディアの方</div>
              </div>

              <div className="bg-white rounded-lg p-6 text-gray-800">
                <p className="mb-4 text-sm">
                  無料でのご相談も承りますので、お気軽にお問い合わせください
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
                  1分で簡単お問い合わせ ＞
                </button>
              </div>
            </div>
          </article>
        </main>

        {/* Sidebar */}
        {/* <aside className="w-80 hidden lg:block">
          <div className="sticky top-4">
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="text-blue-500 mr-2">C</span>ategory
              </h3>
              <div className="text-sm text-gray-600 mb-3">見出し</div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded text-xs">
                  ウズベキスタン料理
                </span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded text-xs">
                  プロフ・レシピ
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-500 text-white px-3 py-1 rounded text-xs">
                  中央アジア
                </span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded text-xs">
                  シルクロード文化
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <p className="text-blue-500 mr-2">R</p>anking
              </h3>
              <div className="text-sm text-gray-600 mb-4">ランキング</div>

              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div
                    key={num}
                    className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg"
                  >
                    <img
                      src={`https://images.unsplash.com/photo-${
                        1500000000 + num
                      }?w=60&h=60&fit=crop`}
                      alt=""
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-800 mb-1">
                        記事タイトル例 {num}
                      </h4>
                      <div className="text-xs text-blue-500">
                        #ウズベキスタン料理 #プロフレシピ
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside> */}
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-8 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Uラボ Logo"
                  className="w-10 h-6 object-contain"
                />
              </div>
              <span className="text-lg font-bold text-gray-800">
                Uラボ ウズベキスタン情報局
              </span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-800">
                プライバシーポリシー
              </a>
              <a href="#" className="hover:text-gray-800">
                利用規約
              </a>
              <a href="#" className="hover:text-gray-800">
                運営者情報
              </a>
              <a href="#" className="hover:text-gray-800">
                お問い合わせ
              </a>
            </div>
          </div>
          <div className="text-center text-xs text-gray-500 mt-4">
            Copyright © HaroK group. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UzbekPlovPage;
