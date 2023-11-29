export default function FunctionOfModernJS(t) {
    return (
        <div>
            <div className="midashi">
                <img src="https://1.bp.blogspot.com/-YgD_qkR8QG4/WCqdezB--VI/AAAAAAAA_hk/Mbuxb-YlDTU3D9DZokzANhoPVsSAWi6RwCLcB/s800/fashion_modern_boy.png" />
                <img src="https://3.bp.blogspot.com/-dsy1wOQP3IU/V8jqfVqtJBI/AAAAAAAA9g0/ujldKclY54QBOV2Xolr5jHDUUQzdJFM7gCLcB/s800/taisyou_modern_girl.png" />
                <img src="https://1.bp.blogspot.com/-YgD_qkR8QG4/WCqdezB--VI/AAAAAAAA_hk/Mbuxb-YlDTU3D9DZokzANhoPVsSAWi6RwCLcB/s800/fashion_modern_boy.png" />
                <img src="https://3.bp.blogspot.com/-dsy1wOQP3IU/V8jqfVqtJBI/AAAAAAAA9g0/ujldKclY54QBOV2Xolr5jHDUUQzdJFM7gCLcB/s800/taisyou_modern_girl.png" />
                <img src="https://1.bp.blogspot.com/-YgD_qkR8QG4/WCqdezB--VI/AAAAAAAA_hk/Mbuxb-YlDTU3D9DZokzANhoPVsSAWi6RwCLcB/s800/fashion_modern_boy.png" />
                <img src="https://3.bp.blogspot.com/-dsy1wOQP3IU/V8jqfVqtJBI/AAAAAAAA9g0/ujldKclY54QBOV2Xolr5jHDUUQzdJFM7gCLcB/s800/taisyou_modern_girl.png" />
                <img src="https://1.bp.blogspot.com/-YgD_qkR8QG4/WCqdezB--VI/AAAAAAAA_hk/Mbuxb-YlDTU3D9DZokzANhoPVsSAWi6RwCLcB/s800/fashion_modern_boy.png" />
                <img src="https://3.bp.blogspot.com/-dsy1wOQP3IU/V8jqfVqtJBI/AAAAAAAA9g0/ujldKclY54QBOV2Xolr5jHDUUQzdJFM7gCLcB/s800/taisyou_modern_girl.png" />
                <img src="https://1.bp.blogspot.com/-YgD_qkR8QG4/WCqdezB--VI/AAAAAAAA_hk/Mbuxb-YlDTU3D9DZokzANhoPVsSAWi6RwCLcB/s800/fashion_modern_boy.png" />
                <img src="https://3.bp.blogspot.com/-dsy1wOQP3IU/V8jqfVqtJBI/AAAAAAAA9g0/ujldKclY54QBOV2Xolr5jHDUUQzdJFM7gCLcB/s800/taisyou_modern_girl.png" />
                <img src="https://1.bp.blogspot.com/-YgD_qkR8QG4/WCqdezB--VI/AAAAAAAA_hk/Mbuxb-YlDTU3D9DZokzANhoPVsSAWi6RwCLcB/s800/fashion_modern_boy.png" />
            </div>
            <h2>const、letでの変数宣言</h2>
            <h3>varでの変数宣言の問題点</h3>
            従来のJavaScriptでは、変数の宣言に<b>var</b>を用いていました。
            <div className="logic">
                <span className="span-tub">書式</span>
                var val1 = "var変数";
            </div>
            しかし、varでの宣言には以下2点の問題があり、モダンJavaScriptでのほとんど使用されることはなくなりました。
            <ul>
                <li>値の上書き可能</li>
                <li>再宣言可能</li>
            </ul>
            <br/>
            varでの変数宣言のみではプロジェクト規模が大きくなると変数管理が煩雑になるため、ES2015では新たな変数宣言の方法として
            <b>const</b>と<b>let</b>が追加されました。

            <h3>letでの変数宣言</h3>
            letで宣言された変数は以下の特徴を持ちます。
            <ul>
                <li>再宣言<b><font color="red">不可</font></b></li>
                <li>上書き可</li>
            </ul>

            <h3>constでの変数宣言</h3>
            constで宣言された変数は以下の特徴を持ちます。
            <ul>
                <li>再宣言<b><font color="red">不可</font></b></li>
                <li>上書き<b><font color="red">不可</font></b></li>
            </ul>
            ただし、変数の種類によってはconstで定義しても値を変更することができます。

            <h3>constで定義した変数を変更できる例</h3>
            文字列や数値などのプリミティブ型と呼ばれるデータはconstで定義した場合、上書き不可です。<br/>
            しかし、オブジェクトや配列等のオブジェクト型と呼ばれるものに関してはconstで定義しても中の値を変更できます。

            <h3>React開発で使用する変数宣言</h3>
            React開発で用いる変数宣言は<b>constがほとんど</b>となります。<br/>
            オブジェクトや配列はconstで宣言してプロパティを変更できますし、動的に変わるような値は<b>State</b>という別の概念で管理します。<br/>
            そのため、ほとんどの場合でconstを使用し、<b>Stateで管理せず処理の中で値を上書きするような変数のみletを使う</b>流れが一般的です。

            <h2>テンプレート文字列</h2>
            テンプレート文字列は、文字列の中で変数を展開するための新しい記法です。<br/>
            例えば従来の書き方では、文字列と変数を結合する場合、以下のように<b>+</b>を使用していました。

            <div className="logic">
                <span className="span-tub">例：従来の文字列と変数の結合</span>
                <font color="blue">// 名前を格納した変数</font><br/>
                const name = "佐藤";<br/>
                <br/>
                <font color="blue">// 年齢を格納した変数</font><br/>
                const age = 36;<br/>
                <br/>
                <font color="blue">// 「私の名前は佐藤です。年齢は36歳です。」と表示したい場合</font><br/>
                const message = "私の名前は" + name + "です。年齢は" + age + "歳です。";
            </div>

            この場合、文字列結合の度に<b>+</b>を書く必要があるため、読みづらく書くのも面倒という問題がありました。<br/>
            ES2015以降では、テンプレート文字列を用いて以下のように記述することが可能となりました。<br/>

            <div className="logic">
                <span className="span-tub">例：テンプレート文字列の利用</span>
                <font color="blue">// 名前を格納した変数</font><br/>
                const name = "佐藤";<br/>
                <br/>
                <font color="blue">// 年齢を格納した変数</font><br/>
                const age = 36;<br/>
                <br/>
                <font color="blue">// 「私の名前は佐藤です。年齢は36歳です。」と表示したい場合</font><br/>
                const message = {'`私の名前は${name}です。年齢は${age}歳です。`;'}
            </div>

            テンプレート文字列を使用する場合は<b>`（バッククォート）</b>で文字列を囲みます。
            バッククォートで囲んだ場合、<b>${'{ }'}（ドルマークと波括弧）</b>で囲んだ中はJavaScriptを書くことができます。
            そのため上記のように<b>{'${name}'}</b>とすると文字列の中で簡単に変数を展開することができます。<br/>
            <br/>
            また、使用するケースは少ないですが、以下のように関数を実行したり、計算式を入れることも可能です。

            <div className="logic">
                <span className="span-tub">例：関数の呼び出しと計算の実行</span>
                <font color="blue">// 「こんにちは！」と返すだけの関数</font><br/>
                {'function sayHello( ) {'}<br/>
                　return "こんにちは！";<br/>
                {'}'}<br/>
                <br/>
                <font color="blue">// 月の数字を格納した変数</font><br/>
                const month = 1;<br/>
                <br/>
                <font color="blue">// テンプレート文字列の中で関数の呼び出しと掛け算を実行</font><br/>
                const message = {'`皆さん${sayHello}。今日から${month * 3}月です！`;'}
            </div>

            <h2>アロー関数{'( ) => { }'}</h2>
            アロー関数はES2015で追加された新しい関数の記法です。
            従来よりもシンプルに記述することができます。
            また、<b>書き方以外にも細かな違いがいくつかあります。</b>

            <h3>従来の関数</h3>
            以下は従来の関数記法で「引数として受け取った値をそのまま返却する」例です。

            <div className="logic">
                <span className="span-tub">例：従来の関数使用例</span>
                <font color="blue">// 従来の関数を定義</font><br/>
                {'function func1(value) {'}<br/>
                　return value;<br/>
                {'}'}<br/>
            </div>

            このように従来は<b>function</b>という記述のあとに関数名や引数、処理内容を記述します。

            <h3>アロー関数</h3>
            アロー関数では<b>function</b>は使用せず以下のように関数を宣言できます。

            <div className="logic">
                <span className="span-tub">例：アロー関数</span>
                <font color="blue">// アロー関数を定義</font><br/>
                {'const func2 = (value) => {'}<br/>
                　return value;<br/>
                {'}'}<br/>
            </div>

            functionという宣言はなくなり、いきなり<b>( )</b>の中に引数を書き、「アロー関数」の名前の所以でもある<b>{'=>'}</b>という記号で
            関数を記述します。それ以降の処理を書く部分は従来と同じです。

            <h3>アロー関数の書き方の注意点</h3>
            アロー関数には省略記号がいくつかあります。<br/>
            1つ目は<b>引数が1つの場合は括弧を省略できる</b>という点です。

            <div className="logic">
                <span className="span-tub">例：アロー関数の省略記法</span>
                <font color="blue">// アロー関数を定義　※引数が1つなので括弧を省略</font><br/>
                {'const func2 = value => {'}<br/>
                　return value;<br/>
                {'}'}<br/>
                <br/>
                <font color="blue">// ※引数が2つ以上の場合は括弧が必要</font><br/>
                {'const func3 = (value1, value2) => {'}<br/>
                　return value1 + value2;<br/>
                {'}'}<br/>
            </div>

            2つ目は<b>処理を単一行で返却する場合は波括弧とreturnを省略できる</b>という点です。

            <div className="logic">
                <span className="span-tub">例：returnの省略</span>
                <font color="blue">// 処理を単一行で返すので{'{ }'}を省略</font><br/>
                {'const func4 = (num1, num2) => num1 + num2;'}<br/>
            </div>

            なお、省略する際は<b>波括弧とreturnの両方</b>であり、片方だけ省略した場合は値が返却されません。

            <div className="logic">
                <span className="span-tub">例：誤ったreturnの省略</span>
                <font color="blue">// {'{ }'}で囲ったのにreturnを書いてない</font><br/>
                {'const func4 = (num1, num2) => {'}<br/>
                　num1 + num2;<br/>
                {'}'}
            </div>

            また、返却値が複数行に及ぶ場合は、<b>( )</b>で囲むことで単一行のようにまとめて返却することができます。

            <div className="logic">
                <span className="span-tub">例：( )を用いて1行としてまとめる</span>
                <font color="blue">// 括弧で囲んでまとめて省略して返却</font><br/>
                {'const func5 = (val1, val2) => ('}<br/>
                　{'{'}<br/>
                　　name:val1,<br/>
                　　age:val2,<br/>
                　{'}'}<br/>
                {')'}
            </div>

            <h2>分割代入</h2>
            分割代入は、オブジェクトや配列から値を抽出するための方法です。<br/>
            まずは分割代入を使用しない書き方を確認します。

            <div className="logic">
                <span className="span-tub">例：分割代入を使用しない文字列出力</span>
                {'const myProfile = {'}<br/>
                　name: "佐藤",<br/>
                　age: 36,<br/>
                {'};'}<br/>
                <br/>
                const message = {'`私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;'}
            </div>

            毎回<b>myProfile.～</b>と書くのが冗長に感じます。<br/>
            分割代入がこれを解決します。

            <h3>オブジェクトの分割代入</h3>
            分割代入を用いると、上と同じ処理が以下のように記載できます。

            <div className="logic">
                <span className="span-tub">例：分割代入を使用</span>
                {'const myProfile = {'}<br/>
                　name: "佐藤",<br/>
                　age: 36,<br/>
                {'};'}<br/>
                <br/>
                <font color="blue">// オブジェクトの分割代入</font><br/>
                {'const { name, age } = myProfile;'}<br/>
                <br/>
                const message = {'`私の名前は${name}です。年齢は${age}です。`;'}
            </div>

            <b>{'{ }'}</b>を変数宣言部に使用することでオブジェクト内から一致するプロパティを取り出すことができます。
            存在しないプロパティ名は指定できません。
            名称さえ合っていれば一部のみ取り出したり、順番が異なっていても問題ありません。

            <div className="logic">
                <span className="span-tub">例：一部のみ取り出す</span>
                {'const { age } = myProfile;'}<br/>
            </div>

            また、抽出したプロパティに<b>:（コロン）</b>を使用することで、別名をつけることもできます。

            <div className="logic">
                <span className="span-tub">例：抽出したプロパティに別名をつける</span>
                {'const { name: newName, age: newAge } = myProfile;'}<br/>
            </div>

            <h3>配列の分割代入</h3>
            オブジェクトと同様に、配列に対しても分割代入を使うことができます。<br/>
            こちらもまずは分割代入を使わない書き方を確認しましょう。

            <div className="logic">
                <span className="span-tub">例：配列のインデックスを使用</span>
                {'const myProfile = {"佐藤", 36};'}<br/>
                <br/>
                const message = {'`私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;'}
            </div>

            次に、分割代入を使用すると下記のように記述できます。

            <div className="logic">
                <span className="span-tub">例：配列に対して分割代入を行う</span>
                {'const myProfile = {"佐藤", 36};'}<br/>
                <br/>
                <font color="blue">// 配列の分割代入</font><br/>
                const [name, age] = myProfile;<br/>
                <br/>
                const message = {'`私の名前は${name}です。年齢は${age}です。`;'}
            </div>

            配列の分割代入の場合、変数宣言部に<b>[ ]</b>を使用し、
            <b>配列に格納されている順番に任意の変数名を設定</b>して抽出することができます。
            オブジェクトのときと異なり順番の入れ替えはできず、自分で任意に設定した変数名を使用することになります。<br/>
            <br/>
            インデックスの途中までしか必要ない場合は、以降の要素を省略することができます。

            <div className="logic">
                <span className="span-tub">例：配列の必要な要素のみ取り出す</span>
                <font color="blue">// 1つ目のみ必要な場合</font><br/>
                const [name] = myProfile;<br/>
                <br/>
                const message = {'`私の名前は${name}です。`;'}
            </div>

            <h2>デフォルト値 =</h2>
            デフォルト値の設定は、関数の引数やオブジェクトの分割代入時に使用します。
            値が存在しない場合の初期値を設定することが可能になり、より安全に処理を行うことができます。

            <h3>引数のデフォルト値</h3>
            例えば以下のような「名前を受け取ってメッセージを表示する」関数があったとします。

            <div className="logic">
                <span className="span-tub">例：メッセージを表示する関数</span>
                const sayHello = (name) {'=>'} console.log({'`こんにちは！${name}さん！`'});<br/>
                sayHello("佐藤");
                <font color="blue">　// こんにちは！佐藤さん！</font><br/>
            </div>

            この関数に引数を渡さなかった場合、どうなるでしょう？

            <div className="logic">
                <span className="span-tub">例：メッセージを表示する関数</span>
                const sayHello = (name) {'=>'} console.log({'`こんにちは！${name}さん！`'});<br/>
                sayHello( );
                <font color="blue">　// こんにちは！undefinedさん！</font><br/>
            </div>

            JavaScriptでは値が設定されたなかった場合、undefinedが設定されます。<br/>
            このとき、デフォルト値が設定されていれば回避することができます。

            <div className="logic">
                <span className="span-tub">例：デフォルト値の設定</span>
                const sayHello = (name = "ゲスト") {'=>'} console.log({'`こんにちは！${name}さん！`'});<br/>
                sayHello( );
                <font color="blue">　// こんにちは！ゲストさん！</font><br/>
                sayHello("佐藤");
                <font color="blue">　// こんにちは！佐藤さん！</font><br/>
            </div>

            引数名の後ろに<b>=</b>で値を記述することで、デフォルト値を設定できます。

            <h3>オブジェクト分割代入のデフォルト値</h3>
            オブジェクトの分割代入の際にもデフォルト値を使用することができます。

            <div className="logic">
                <span className="span-tub">例：存在しないプロパティを出力</span>
                <font color="blue">// nameを削除</font><br/>
                {'const myProfile = { '}<br/>
                　age: 24,<br/>
                {'}'}<br/>
                <br/>
                <font color="blue">// 存在しないname</font><br/>
                const {'{ name }'} = myProfile;<br/>
                <br/>
                const message = {'`こんにちは！${name}さん！`;'}
                <font color="blue">　// こんにちは！undefinedさん！</font><br/>
            </div>

            そこで、分割代入時にデフォルト値を設定することで以下のように処理を行うことができます。

            <div className="logic">
                <span className="span-tub">例：分割代入時にデフォルト値を設定</span>
                <font color="blue">// nameを削除</font><br/>
                {'const myProfile = { '}<br/>
                　age: 24,<br/>
                {'}'}<br/>
                <br/>
                <font color="blue">// 存在しないnameにデフォ値を設定</font><br/>
                const {'{ name = "ゲスト" }'} = myProfile;<br/>
                <br/>
                const message = {'`こんにちは！${name}さん！`;'}
                <font color="blue">　// こんにちは！ゲストさん！</font><br/>
            </div>

            <h2>スプレッド構文</h2>
            スプレッド構文は配列やオブジェクトに対して使える記法で、いくつかの使い道があります。
            
            <h3>要素の展開</h3>
            例えば下記のような配列があります。

            <div className="logic">
                <span className="span-tub">例：配列</span>
                const arr1 = [1, 2];<br/>
                console.log(arr1);
                <font color="blue">　// [1, 2]</font><br/>
            </div>

            スプレッド構文は<b>...</b>という形でドットを3つ繋げて使用します。
            配列に対して使用することで、要素を順番に展開してくれます。

            <div className="logic">
                <span className="span-tub">書式</span>
                const arr1 = [1, 2];<br/>
                console.log(arr1);
                <font color="blue">　// [1, 2]</font><br/>
                console.log(...arr1);
                <font color="blue">　// 1 2</font><br/>
            </div>

            このように配列の中身を展開することができます。<br/>
            もう少し分かりやすい例を見てみましょう。<br/>
            <br/>
            2つの引数を合計して出力する関数があった場合に、普通に配列の要素数を指定する場合と
            スプレッド構文を用いた場合の比較です。

            <div className="logic">
                <span className="span-tub">一般的な関数とスプレッド構文との比較</span>
                const arr1 = [1, 2];<br/>
                <br/>
                const summaryFunc = (num1, num2) {'=>'} console.log(num1 + num2);<br/>
                <br/>
                <font color="blue">// 普通に配列の値を渡す場合</font><br/>
                summaryFunc(arr1[0], arr[1]);
                <font color="blue">　// 3</font><br/>
                <br/>
                <font color="blue">// スプレッド構文を用いた場合</font><br/>
                summaryFunc(...arr1);
                <font color="blue">　// 3</font><br/>
            </div>

            <h3>要素をまとめる</h3>
            スプレッド構文は「要素をまとめる」というニュアンスでも使用することができます。
            配列の分割代入の例を見てみましょう。

            <div className="logic">
                <span className="span-tub">例：要素をまとめる</span>
                const arr2 = [1, 2, 3, 4, 5];<br/>
                <br/>
                <font color="blue">// 分割代入時に残りを「まとめる」</font><br/>
                const [num1, num2, ...arr3] = arr2;<br/>
                <br/>
                console.log(num1);
                <font color="blue">　// 1</font><br/>
                console.log(num2);
                <font color="blue">　// 2</font><br/>
                console.log(arr3);
                <font color="blue">　// [3, 4, 5]</font><br/>
            </div>

            <h3>要素のコピー、結合</h3>
            以下のような2つの配列があるとします。

            <div className="logic">
                <span className="span-tub">例：2つの配列</span>
                const arr4 = [10, 20];<br/>
                const arr5 = [30, 40];<br/>
            </div>

            このarr4をコピーした新たな配列をスプレッド構文を用いて生成する場合、次のような書き方ができます。

            <div className="logic">
                <span className="span-tub">例：スプレッド構文を用いて新たな配列を生成</span>
                const arr4 = [10, 20];<br/>
                const arr5 = [30, 40];<br/>
                <br/>
                <font color="blue">// スプレッド構文でコピー</font><br/>
                const arr6 = [...arr4];<br/>
                <br/>
                console.log(arr4);
                <font color="blue">　// [10, 20]</font><br/>
                console.log(arr6);
                <font color="blue">　// [10, 20]</font><br/>
            </div>

            <b>...</b>で順番に展開して、<b>[ ]</b>で囲んでいるので結果的に新しい配列ができるという理屈です。<br/>
            <br/>
            応用で、2つの配列の結合も以下のように行えます。

            <div className="logic">
                <span className="span-tub">例：2つの配列の結合</span>
                const arr4 = [10, 20];<br/>
                const arr5 = [30, 40];<br/>
                <br/>
                <font color="blue">// スプレッド構文で結合</font><br/>
                const arr7 = [...arr4, ...arr5];<br/>
                <br/>
                console.log(arr7);
                <font color="blue">　// [10, 20, 30, 40]</font><br/>
            </div>

            上記のコピーや結合はオブジェクトに対しても使用することができます。

            <div className="logic">
                <span className="span-tub">例：複数のオブジェクトの結合</span>
                const obj4 = [val1: 10, val2: 20];<br/>
                const obj5 = [val3: 30, val4: 40];<br/>
                <br/>
                <font color="blue">// スプレッド構文でコピー</font><br/>
                const obj6 = [...obj4];<br/>
                <font color="blue">// スプレッド構文で結合</font><br/>
                const obj7 = [...obj4, ...obj5];<br/>
                <br/>
                console.log(obj6);
                <font color="blue">　// {'{val1: 10, val2: 20}'}</font><br/>
                console.log(obj7);
                <font color="blue">　// {'{val1: 10, val2: 20, val3: 30, val4: 40}'}</font><br/>
            </div>

            <h3>なぜ=でコピーしてはいけないのか</h3>
            「わざわざスプレッド構文を使わなくても、=でコピーすればいいのでは？」と思うかもしれません。<br/>
            確かに以下の書き方でも配列のコピーは可能です。

            <div className="logic">
                <span className="span-tub">例：=によるコピー</span>
                const arr4 = [10, 20];<br/>
                <br/>
                <font color="blue">// =でコピー</font><br/>
                const arr8 = arr4;
            </div>

            しかし、この方法には問題があります。
            配列やオブジェクト等の「オブジェクト型」の変数は=でコピーすると
            <b>参照値も引き継がれてしまう</b>ため、予期せぬ挙動が起こることがあります。<br/>
            <br/>
            以下は=でコピーしたあとの配列に操作を加えたことで、コピー元の配列にも影響が出てしまう例です。

            <div className="logic">
                <span className="span-tub">例：コピーに起因する予期せぬ挙動</span>
                const arr4 = [10, 20];<br/>
                <br/>
                <font color="blue">// =でコピー</font><br/>
                const arr8 = arr4;<br/>
                <br/>
                <font color="blue">// arr8の最初の要素を書き換える</font><br/>
                arr8[0] = 100;<br/>
                <br/>
                console.log(arr4);
                <font color="blue">　// [100, 20]</font><br/>
                console.log(arr8);
                <font color="blue">　// [100, 20]</font><br/>
            </div>

            このように、=でコピーするとコピー後の配列への操作がコピー元の配列にも影響を与えます。<br/>
            ではスプレッド構文を用いたコピーはどうなるでしょうか。

            <div className="logic">
                <span className="span-tub">例：スプレッド構文を用いたコピー</span>
                const arr4 = [10, 20];<br/>
                <br/>
                <font color="blue">// スプレッド構文でコピー</font><br/>
                const arr8 = [...arr4];<br/>
                <br/>
                <font color="blue">// arr8の最初の要素を書き換える</font><br/>
                arr8[0] = 100;<br/>
                <br/>
                console.log(arr4);
                <font color="blue">　// [10, 20]</font><br/>
                console.log(arr8);
                <font color="blue">　// [100, 20]</font><br/>
            </div>

            スプレッド構文を用いた場合、中身を展開して渡しているだけなので、
            参照値は引き継がれず新しい配列を生成することができます。

            <h2>オブジェクトの省略記法</h2>


            <h2>map、filter</h2>


            <h2>三項演算子</h2>


            <h2>論理演算子の本当の意味（&& ||）</h2>
            
        </div>
    );
};