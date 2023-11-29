export default function BeforeReact() {
    return (
        <>
            <div className="midashi">
                <img src="https://3.bp.blogspot.com/-M9yYEVcfb7g/WXcRHLUYsyI/AAAAAAABFqI/cf1a4bHaakM7RZs1VfLbHMw_B0YcblU7QCLcBGAs/s800/job_kouji_stop2.png" />
                <img src="https://3.bp.blogspot.com/-M9yYEVcfb7g/WXcRHLUYsyI/AAAAAAABFqI/cf1a4bHaakM7RZs1VfLbHMw_B0YcblU7QCLcBGAs/s800/job_kouji_stop2.png" />
                <img src="https://3.bp.blogspot.com/-M9yYEVcfb7g/WXcRHLUYsyI/AAAAAAABFqI/cf1a4bHaakM7RZs1VfLbHMw_B0YcblU7QCLcBGAs/s800/job_kouji_stop2.png" />
                <img src="https://3.bp.blogspot.com/-M9yYEVcfb7g/WXcRHLUYsyI/AAAAAAABFqI/cf1a4bHaakM7RZs1VfLbHMw_B0YcblU7QCLcBGAs/s800/job_kouji_stop2.png" />
                <img src="https://3.bp.blogspot.com/-M9yYEVcfb7g/WXcRHLUYsyI/AAAAAAABFqI/cf1a4bHaakM7RZs1VfLbHMw_B0YcblU7QCLcBGAs/s800/job_kouji_stop2.png" />
                <img src="https://3.bp.blogspot.com/-M9yYEVcfb7g/WXcRHLUYsyI/AAAAAAABFqI/cf1a4bHaakM7RZs1VfLbHMw_B0YcblU7QCLcBGAs/s800/job_kouji_stop2.png" />
                <img src="https://3.bp.blogspot.com/-M9yYEVcfb7g/WXcRHLUYsyI/AAAAAAABFqI/cf1a4bHaakM7RZs1VfLbHMw_B0YcblU7QCLcBGAs/s800/job_kouji_stop2.png" />
                <img src="https://3.bp.blogspot.com/-M9yYEVcfb7g/WXcRHLUYsyI/AAAAAAABFqI/cf1a4bHaakM7RZs1VfLbHMw_B0YcblU7QCLcBGAs/s800/job_kouji_stop2.png" />
                <img src="https://3.bp.blogspot.com/-M9yYEVcfb7g/WXcRHLUYsyI/AAAAAAABFqI/cf1a4bHaakM7RZs1VfLbHMw_B0YcblU7QCLcBGAs/s800/job_kouji_stop2.png" />
                <img src="https://3.bp.blogspot.com/-M9yYEVcfb7g/WXcRHLUYsyI/AAAAAAABFqI/cf1a4bHaakM7RZs1VfLbHMw_B0YcblU7QCLcBGAs/s800/job_kouji_stop2.png" />
            </div>
            <h2>モダンJavaScript概説</h2>
            ReactはJavaScriptのライブラリです。<br/>
            つまり、Reactを学ぶならそもそもJavaScriptを分かっている必要がある。<br/>
            まずはナウいJavaScript（＝モダンJavaScript）を知っていますか？というお話し。<br/>
            <br/>
            モダンJavaScriptの特徴として、以下のものが挙げられます。
            <ul>
                <li>React、Vue、Angular等の仮想DOMを用いるライブラリ／フレームワークを使用</li>
                <li>npm／yarn 等のパッケージマネージャーを使用</li>
                <li>主にES2015（ES6）以降の記法を使用</li>
                <li>webpack等のモジュールバンドラーを使用</li>
                <li>Babel等のトランスパイラを使用</li>
                <li>SPA（Single Page Application）で作成</li>
            </ul>
            <br/>
            それぞれの詳細は後述します。

            <h2>DOMと仮想DOM</h2>
            <h3>DOM</h3>
            DOMはHTMLを木構造で表現したもので、<b>D</b>ocument <b>O</b>bject <b>M</b>odelの略です。<br/>
            Webブラウザから開発者ツールを開くと確認することができます。<br/>
            <br/>
            従来、JavaScriptで画面の要素を変更する場合は、DOMを直接指定して書き換えるような処理をしてきました。<br/>
            そのようなコードは手続き的で分かりやすい反面、レンダリングコスト（画面の表示速度）に問題が生じやすかったり、
            コードが肥大化するとどこで何をしているのか分からなくなるという不便性がありました。<br/>
            <br/>
            これらを解決するために生まれたのが仮想DOMです。

            <h3>仮想DOM</h3>
            仮想DOMとは、JavaScriptのオブジェクトで作られた仮想的なDOMのことです。<br/>
            これを用い実際のDOMとの差分を比較し、変更箇所のみを実際のDOMに反映することで、DOMへの操作を最小限に抑えることが可能になります。
            
            <h2>パッケージマネージャー</h2>
            <h3>かつてのJavaScript</h3>
            パッケージマネージャーの説明をするために、まずはかつてのJavaScriptのお話しです。<br/>
            <br/>
            かつてのJavaScript開発は、処理をすべて1つのファイルに記載していました。<br/>
            複雑なシステムではコードが数千行以上になることもあります。<br/>
            さらに、それらのコードは再利用ができず、非常に非効率な開発でした。<br/>
            <br/>
            そこで、jsファイルから他のjsファイルを読み込めるよう改善が行われました。<br/>
            これによりコードの共通化や再利用が可能になりました。<br/>
            しかし、読み込み順を誤るとエラーになったり、何がどこから読み込まれたものなのか分かりづらいという問題が残りました。<br/>
            <br/>
            これらの問題を、npmやyarn等のパッケージマネージャーが大幅に改善してくれます。

            <h3>パッケージマネージャー</h3>
            バックエンド、フロントエンド問わず、開発する上で基本的には外部で公開されている様々なパッケージを利用することになります。<br/>
            これは、既に世の中にあるものは利用させてもらうことで、開発効率を上げることができるためです。<br/>
            ただ、開発者が好き好きにパッケージをインストールするとバージョンが不揃いとなり、同じ環境を再現することが困難になります。<br/>
            そこで、現在はパッケージマネージャーと呼ばれるパッケージの管理、インストール、アップグレード等を担ってくれる管理ツールを使用することが一般的になっています。<br/>
            以下は代表的なパッケージマネージャーです。<br/>
            <ul>
                <li>JavaScriptのnpm</li>
                <li>Rubyのgem</li>
                <li>PHPのcomposer</li>
            </ul>
            npmやyarnには以下のようなメリットがあり、これまでの課題を解決してくれます。<br/>
            <ul>
                <li>依存関係を意識しなくても勝手に解決してくれる</li>
                <li>チーム内でのパッケージ共有や、バージョン統一が用意</li>
                <li>世界中で公開されているパッケージをコマンド1つで利用可能</li>
                <li>どこから読み込まれたものか分かりやすくなった</li>
            </ul>

            <h3>npmの仕組み</h3>
            世界中のパッケージ開発者が、パッケージの公開場所として使用しているのがNPMというレジストリです（一般的に大文字の場合はレジストリ、小文字の場合はパッケージマネージャーを指すことが多い）。<br/>
            利用者は以下のようなコマンドを実行することで、自分のPCにパッケージをインストールすることができます。<br/>
            <div className="command">npm install [パッケージ名]</div>
            <br/>

            上記のコマンド実行時に、ローカルファイルのpackage.jsonが更新されパッケージの情報が追記されます。<br/>
            また、同時にpackage-lock.jsonファイルが生成（or更新）され、パッケージが内部で使用している別パッケージのバージョン情報や依存関係が記載されます。<br/>
            この2つのファイルから「どんなパッケージがどのバージョンでインストールされているのか」が分かるため、他の端末でも全く同じ環境を再現することができます。

            <h2>ECMAScript</h2>
            <h3>JavaScriptの標準仕様</h3>
            JavaScriptは、<b>ECMAScript</b>と呼ばれる標準仕様が定められています。

            <h3>ECMAScriptの通称</h3>
            ECMAScriptは「ECMAScript 1st edition」から始まり改定される度に2nd、3rdとバージョンが上がっています。<br/>
            これを通称<b>ES2</b>や<b>ES3</b>のように呼んでいました。<br/>
            <br/>
            ただ、2015年から「標準仕様の更新は1年に1回としよう！」と決まったため、その時点の最新はES6だったのですが、<b>ES2015</b>という西暦をつけた呼び方が一般化するようになりました。<br/>
            <ul>
                <li>ES6＝ES2015</li>
                <li>ES7＝ES2016</li>
            </ul>

            <h3>近代JavaScriptの転換期</h3>
            ECMAScriptに大きな改定があったのが<b>ES2015（ES6）</b>です。<br/>
            この年に大きな機能追加が実施され、React等のモダンJavaScript開発でも必須と言える文法や機能が加わりました。<br/>
            追加された仕様の例として、以下のものがあります。<br/>
            <ul>
                <li>let、constを用いた変数宣言</li>
                <li>アロー関数</li>
                <li>Class構文</li>
                <li>分割代入</li>
                <li>テンプレート文字列</li>
                <li>スプレッド構文</li>
                <li>Promise</li>
            </ul>

            <h2>モジュールバンドラーとトランスパイラ</h2>
            モダンJavaScriptの開発においては、<b>モジュールバンドラー</b>や<b>トランスパイラ</b>と呼ばれる仕組みが必須になります。<br/>
            Reactのテンプレートプロジェクトを作成してくれるcreate-react-appを使用すればモジュールバンドラーやトランスパイラを意識しなくても開発が可能になっています。<br/>
            しかし、複雑なプロジェクトの場合は設定ファイルをいじることもあるため、内部でどういった仕組みが動いているのかという概念を知ることは非常に重要です。<br/>

            <h3>モジュールバンドラー</h3>
            jsファイルは細かく分けて開発した方が効率的であると先述しましたが、本番環境で実行する際はファイルが分かれている必要はありません。<br/>
            むしろ読み込みの回数が増えてパフォーマンスが悪くなることもあります。<br/>
            <br/>
            そこで、<b>「開発はファイルを分けて行い、本番用にビルドする時に1つのファイルにまとめたい」</b>という思想を実現するために、jsファイルやcssファイル等をまとめてくれるモジュールバンドラーが作られました。<br/>
            <br/>
            JavaScriptには読み込み順による依存関係の問題があり、パッケージマネージャーがこれを解決してくれると紹介しました。<br/>
            モジュールバンドラーもまた、ファイルを1つにまとめる際に依存関係を解決してくれる優れものです。<br/>
            <br/>
            現在主流のモジュールバンドラーは<b>webpack</b>と呼ばれるものです。

            <h3>トランスパイラ</h3>
            トランスパイラは<b>JavaScriptの記法をブラウザで実行できる形に変換してくれるもの</b>です。<br/>
            <br/>
            ECMAScriptで毎年仕様が追加されますが、ブラウザによっては新しい記法に対応していない場合があります。<br/>
            特にIEはES6以降だと全然動かないため、開発者泣かせと言われていたりします。<br/>
            そこで、トランスパイラを使用すると、新しい記法で書かれたJavaScriptを古い記法（多くのブラウザで実行できる形）に変換してくれるというわけです。<br/>
            <br/>
            現在主流のトランスパイラは<b>Babel</b>と呼ばれるものです。

            <h2>SPAと従来のWebシステムの違い</h2>
            ReactをはじめとするモダンJavaScriptのWebシステムは<b>SPA（Single Page Application）</b>で作成されています。<br/>
            SPAでは基本的にHTMLファイルは1つのみで、JavaScriptで画面を書き換えることで画面遷移等の動きを表現していきます。<br/>

            <h3>従来のWebシステム</h3>
            従来のWebシステムの場合、ページ遷移の度にサーバー側にリクエストが送られ、サーバー側からHTMLファイルを返却するためページ遷移の際に一瞬画面が白くなる（ちらつく）という特徴があります。<br/>

            <h3>SPAのWebシステム</h3>
            HTMLファイルのリクエストとは異なり、データの取得は非同期的に実行できる（裏でデータ取得が実行されるためユーザーは操作を続けられる）ため、ページ遷移時に画面のちらつきはなく、快適にページを閲覧可能となります。<br/>
            <br/>
            SPAでは<b>HTMLファイルは1つのみで、JavaScriptによるDOMの書き換えで画面遷移を実現するのが基本</b>となります。<br/>
            <br/>
            <font size="1">個人的にはチラついた方が画面遷移したって分かるから好きだが…。</font>
        </>
    );
};