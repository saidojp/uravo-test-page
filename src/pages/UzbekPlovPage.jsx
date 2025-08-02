import React from "react";

const UzbekPlovPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-30 h-30 flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Uラボ Logo"
                className="w-30 h-30 object-contain"
              />
            </div>
            <div>
              <div className="text-sm text-gray-600 font-medium">
                ウズベキスタン情報局
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
              <span className="text-sm font-medium">基本情報</span>
              <svg
                className="w-4 h-4"
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
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
              <span className="text-sm font-medium">エリアガイド</span>
              <svg
                className="w-4 h-4"
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
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer text-sm font-medium">
              モデルコース
            </span>
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer text-sm font-medium">
              ビジネス
            </span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium">
              お問い合わせする
            </button>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
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
              src="https://images.unsplash.com/photo-1574653106583-46aeb90ac742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="ウズベキスタンの伝統的なプロフ"
              className="w-full h-80 object-cover rounded-lg"
            />
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
              ウズベキスタンのプロフ（ピラフ）、スパイス、文化、料理法、注意点など、料理愛好家が知りたい情報を網羅した完全ガイド。安全で充実した料理のための必読コンテンツです。
            </p>
          </div>

          {/* Table of Contents - точно как в оригинале */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-center mb-6 text-gray-800">
              目次
            </h2>
            <div className="space-y-1 text-sm">
              <div className="font-bold text-gray-800">
                1. ウズベキスタンプロフとは？歴史と文化の魅力
              </div>
              <div className="ml-6 text-gray-700">1-1. プロフの基本情報</div>
              <div className="ml-6 text-gray-700">1-2. 歴史的背景と文化</div>
              <div className="ml-8 text-gray-600">
                1-2-1. シルクロードとウズベキスタン
              </div>
              <div className="ml-8 text-gray-600">
                1-2-2. ティムール帝国の時代
              </div>
              <div className="ml-8 text-gray-600">
                1-2-3. イスラム文化とウズベキスタン
              </div>
              {/* <div className="ml-8 text-gray-600">
                1-2-4. ウズベキスタンの伝統工芸
              </div>
              <div className="ml-6 text-gray-700">
                1-3. 日本からウズベキスタンへのアクセス方法
              </div>

              <div className="font-bold text-gray-800 pt-2">
                2. ウズベキスタンの主要観光地と見どころ
              </div>
              <div className="ml-6 text-gray-700">
                2-1. サマルカンド：歴史と建築の宝庫
              </div>
              <div className="ml-6 text-gray-700">
                2-2. ブハラ：イスラム文化の中心地
              </div>
              <div className="ml-6 text-gray-700">
                2-3. ヒヴァ：砂漠の中のオアシス都市
              </div>
              <div className="ml-6 text-gray-700">
                2-4. タシケント：首都、現代と伝統の共存
              </div>

              <div className="font-bold text-gray-800 pt-2">
                3. ウズベキスタン旅行の費用目安と予算管理
              </div>
              <div className="ml-6 text-gray-700">3-1. 航空券と交通費</div>
              <div className="ml-6 text-gray-700">3-2. 宿泊費</div>
              <div className="ml-6 text-gray-700">3-3. 食事と日常生活費</div>
              <div className="ml-6 text-gray-700">
                3-4. 観光地の入場料とアクティビティ
              </div>

              <div className="font-bold text-gray-800 pt-2">
                4. ウズベキスタン旅行の主要点と安全対策
              </div>
              <div className="ml-6 text-gray-700">4-1. 治安情報と安全対策</div>
              <div className="ml-6 text-gray-700">4-2. ビザと入国手続き</div> */}

              <div className="font-bold text-blue-600 pt-2">まとめ</div>
            </div>
          </div>

          {/* Article Content */}
          <article className="prose max-w-none">
            {/* Section 1 */}
            <div className="mb-12">
              <div className="border-l-4 border-blue-500 pl-4 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-0">
                  1. ウズベキスタンプロフとは？歴史と文化の魅力
                </h2>
              </div>

              <div className="border-l-4 border-blue-300 pl-4 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-0">
                  1-1. プロフの基本情報
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                ウズベキスタンは中央アジアに位置し、シルクロード沿いに栄えた重要な国です。以下はウズベキスタンプロフに関する基本情報です。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8 border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="font-semibold">首都：</span>タシケント
                  </div>
                  <div>
                    <span className="font-semibold">言語：</span>ウズベク語
                  </div>
                  <div>
                    <span className="font-semibold">通貨：</span>
                    ウズベキスタン・スム
                  </div>
                  <div>
                    <span className="font-semibold">人口：</span>約3,400万人
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-300 pl-4 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-0">
                  1-2. 歴史的背景と文化
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                ウズベキスタンは、シルクロードにおける重要な交易都市が集まっていた歴史的な背景を持ち、その文化遺産は非常に豊かです。ウズベキスタンプロフの魅力を深く理解するためには、その歴史と文化をしっかりと知ることが大切です。
              </p>

              <h4 className="font-bold text-gray-800 mb-3">
                1-2-1. シルクロードとウズベキスタン
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                ウズベキスタンはシルクロードの中心に位置しており、古代から多くの文化と文化交流の要所でした。シルクロードは中国からヨーロッパにまでの長い道のりで、商人や旅行者が行き交い、各地の文化が融合していきました。この交流により、ウズベキスタンはさまざまな文化的影響を受けました。
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                特に、サマルカンドやブハラはシルクロードを通じて栄え、商業と学問の中心として多くの学者や芸術家を引き寄せました。サマルカンドには、ティムール帝国時代の壮大な建築物が数多く残されており、これらの建築物は現在も世界遺産として保護されています。
              </p>

              <h4 className="font-bold text-gray-800 mb-3">
                1-2-2. ティムール帝国の時代
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                ウズベキスタンの歴史でも重要な時期の一つは、ティムール帝国の時代です。ティムール（別名タメルラン）は14世紀にウズベキスタンのサマルカンドを首都とし、広大な帝国を築きました。ティムールは軍事的な才能だけでなく、文化のパトロンとしても知れらています。サマルカンドにはティムール帝国の栄光を物語る象徴的な建築物です。
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                ティムール帝国の影響はウズベキスタンだけでなく、中央アジア全体に及び、その後の歴史に大きな影響を与えました。サマルカンドのレギスタン広場やシャーヒ・ズィンダ廟群は、ティムール帝国の栄光を物語る象徴的な建築物です。
              </p>

              <h4 className="font-bold text-gray-800 mb-3">
                1-2-3. イスラム文化とウズベキスタン
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                ウズベキスタンの文化は、イスラム教の影響を色濃く受けています。ウズベキスタンは、イスラム教の重要な宗教都市が点在する地域であり、特にブハラとサマルカンドは歴史的にイスラム学問の中心地として栄えました。
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                ウズベキスタンの建物や装飾は、イスラム文化の影響を色濃く反映しています。美しいモスクやマドレ（学校）、ミナレット（塔）などがその象徴です。また、ウズベキスタンでは、イスラム教の祭日や伝統的な行事がとも大切にされており、訪れることでその豊かな宗教文化を体験することができます。
              </p>

              <h4 className="font-bold text-gray-800 mb-3">
                1-2-4. ウズベキスタンの伝統工芸
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                ウズベキスタンはその伝統工芸でも有名です。特に、刺繍やタイル細工、手織りの絨毯などが挙げられます。サマルカンドやブハラでは、地元の職人が手作りの工芸品を売っており、これらの品々は観光客にとってお土産として人気です。
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                また、ウズベキスタンの刺繍や絨毯は、伝統的な技術とデザインに基づいており、その精密さと美しさは世界的に評価されています。旅行中にこれらの工芸品を購入することは、ウズベキスタンの文化をより深く理解する手段ともなります。
              </p>
            </div>

            {/* Section 1-3 */}
            <div className="mb-12">
              <div className="border-l-4 border-blue-300 pl-4 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-0">
                  1-3. 日本からウズベキスタンへのアクセス方法
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                日本からウズベキスタンへのアクセスは、飛行機が最も一般的な方法です。ウズベキスタンの首都タシケントには、毎週土曜日に日本からの直行便（タシケント行き）、金曜日にウズベキスタンから日本への直行便が運航されています。この便は、ウズベキスタン航空（Uzbekistan
                Airways）が運航しており、主に成田空港（東京）とタシケントの間を結んでいます。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6 border">
                <h4 className="font-bold text-gray-800 mb-4">
                  日本からウズベキスタンの直行便
                </h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold">• 出発地：</span>
                    成田空港（東京）
                  </div>
                  <div>
                    <span className="font-semibold">• 到着地：</span>
                    タシケント国際空港
                  </div>
                  <div>
                    <span className="font-semibold">• フライト時間：</span>
                    約9～10時間
                  </div>
                  <div>
                    <span className="font-semibold">• 運航日：</span>
                    毎週水曜日（東京発）
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8 border">
                <h4 className="font-bold text-gray-800 mb-4">
                  ウズベキスタンから日本への直行便
                </h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold">• 出発地：</span>
                    タシケント国際空港
                  </div>
                  <div>
                    <span className="font-semibold">• 到着地：</span>
                    成田空港（東京）
                  </div>
                  <div>
                    <span className="font-semibold">• フライト時間：</span>
                    約9～10時間
                  </div>
                  <div>
                    <span className="font-semibold">• 運航日：</span>
                    毎週金曜日（タシケント発）
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                フライト時間は約9～10時間で、比較的直行便でアクセスしやすいのが特徴です。直行便を利用することで、長時間の乗り継ぎを避け、快適にウズベキスタンへ到着できます。
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <div className="border-l-4 border-blue-500 pl-4 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-0">
                  2. ウズベキスタンプロフの主要材料と見どころ
                </h2>
              </div>

              <div className="border-l-4 border-blue-300 pl-4 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-0">
                  2-1. サマルカンド：歴史と建築の宝庫
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                サマルカンドは、シルクロードの要所として栄えた歴史的な都市です。その美しい建築群は、訪れる人々に深い感銘を与えます。
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <span className="font-semibold">• レギスタン広場：</span>
                  ティムール帝国時代の壮大な広場で、三つの巨大なメドレセが立ち並んでいます。
                </div>
                <div>
                  <span className="font-semibold">
                    • シャーヒ・ズィンダ廟群：
                  </span>
                  ティムール帝国時代の王族や聖人を記った美しい霊廟群です。
                </div>
                <div>
                  <span className="font-semibold">
                    • ビビ・ハヌム・モスク：
                  </span>
                  当時世界最大のモスクの一つで、圧倒的なスケールを誇ります。
                </div>
              </div>

              <div className="border-l-4 border-blue-300 pl-4 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-0">
                  2-2. ブハラ：イスラム文化の中心地
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                ブハラはウズベキスタンで最も歴史のある都市の一つで、イスラム文化が色濃く反映されています。
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <span className="font-semibold">• アルク城：</span>
                  ウズベキスタン最古の要塞で、ティムール帝国の時代から続いています。
                </div>
                <div>
                  <span className="font-semibold">
                    • ポロ・ハウズ・モスク：
                  </span>
                  このモスクはその美しいデザインと静かな雰囲気が魅力的です。
                </div>
                <div>
                  <span className="font-semibold">• ウルグベク天文台：</span>
                  天文学の発展に貢献したウルグベクによって設立された天文台。
                </div>
              </div>

              <div className="border-l-4 border-blue-300 pl-4 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-0">
                  2-3. ヒヴァ：砂漠の中のオアシス都市
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                ヒヴァはウズベキスタンの西端に位置し、その保存状態の良い中世の城塞都市として有名です。
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <span className="font-semibold">
                    • イチャン・カラの城塞都市：
                  </span>
                  この城塞は、200年以上前に作られたもので、訪れる人々に古代都市の雰囲気を感じさせます。
                </div>
                <div>
                  <span className="font-semibold">• クフナ・アルク：</span>
                  ヒヴァの古代の王宮で、美しいモスクや館が点在しています。
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
                ウズベキスタンは、シルクロードの歴史的な街並み、精緻な建築、温かい人々、美味しい料理が魅力的な国です。タシケント、サマルカンド、ブハラ、ヒヴァなど、訪れるべき都市が多く、どこに行っても素晴らしい体験と思い出を感じることができます。
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                ウズベキスタンへの旅行に興味があれば、ぜひご連絡ください！
              </p>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-lg p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Contact</h3>
              <p className="text-lg mb-6 opacity-90">お問い合わせ</p>

              <div className="space-y-2 mb-6 text-sm opacity-90">
                <div>• ウズベキスタンへの旅行で現地ガイドを検討している方</div>
                <div>• ウズベキスタンでのビジネスに興味のある方</div>
                <div>• ウズベキスタンについて取材したいメディアの方</div>
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
        <aside className="w-80 hidden lg:block">
          <div className="sticky top-4">
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="text-blue-500 mr-2">C</span>ategory
              </h3>
              <div className="text-sm text-gray-600 mb-3">見出し</div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded text-xs">
                  オフショア開発
                </span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded text-xs">
                  システム開発
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-500 text-white px-3 py-1 rounded text-xs">
                  SES
                </span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded text-xs">
                  オフショア開発事情
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="text-blue-500 mr-2">R</span>anking
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
                        #システム開発 #オフショア開発
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
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
