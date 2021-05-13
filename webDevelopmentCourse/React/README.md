# Using React
## How to Set Up create-react-app
1. Instal Homebrew
2. Instal nodebrew
3. Instal node
4. nodeの環境パスを通す(ターミナルの再起動を忘れずに)

### ファイルの種類
- src
    - 開発用のファイルが格納される
    - ReactコンポーネントのJSXファイルなどはここに置く
- public
    - 静的ファイルが格納される
    - htmlファイルや画像ファイルなど
- build
    - 本番用ファイル
    - npm run buildコマンドで生成される

### Reactを使う
- npm start
    - ローカルサーバーを起動してReactアプリを確認できる
    - ホットリロード（保存で自動更新）に対応
- npm run build
    - 本番用ファイルを生成してbuildディレクトリに出力
    - srcとpublicのファイルを１つにまとめる（バンドル）
- npm run eject: 基本使わない
    - BabelやWebpackの設定を変えたいときに使う


## Sandbox
[Sandboxで簡単にReact操作](https://codesandbox.io/)

***


# React
> Facebook社が開発したUIライブラリ
> UIを作るためのコンポーネント（見た目がわかりやすい）
> コンポーネントを組み合わせてWebの画面を作る

## Web開発の最新化
- モジュール化
カプセル化(Encapsulated)することで機能をひとまとまりにする
- 宣言(state)を管理しやすい
DOMを簡単に操作できる
- 効率化(Efficient)
DOM操作はjQueryよりも効率的になる

### React vs Angular
Angular
フレームワークであり完全なソリューション
- React
ライブラリでありビューのレンダリングとビューの確認のみを処理する
他のAPIを使う必要がある


## 画面描画

ブラウザはDOM(Document Object Model)を使ってHTMLという文書（ドキュメント）を画面に描画するが、DOMを直接変更して再描画するのは複雑な処理となる。

### 仮想DOM(Virtual DOM)
ブラウザのDOMの状態をJavaScriptのオブジェクトとして管理することでブラウザに負荷をかけずに効率の良い再描画（Rendering）をするようにする。

**Reactのコンポーネント = 「状態を持つUI」**

### 差分描画
Reactを使うことで仮想DOMで差分のみを描画する
実際のDOMには関連する箇所だけが再描画される



# JSX
- JavaScriptの拡張言語 ≠ テンプレート言語（vue.js）
- HTMLのマークアップを記述 + JavaScriptの構文が使える
- JSXは最終的にReact要素を生成する
> 使うのにはBabelが必要

## Why to use JSX?
> ReactはReact.createElementで要素を生成するが、構文がわかりにくい。JSXをすることで勝手にコンパイルされる。
> ２つの構文は同じ結果となる

- Without JSX
```js
React.createElement(
    'button',
    {className: 'btn-blue'},
    'Click me!'
)
```
- With JSX
```js
<button className={'btn-blue'}>
    Click me!
</button>
```

## JSX Component Based

- Building block of React
React helps us break up applications into reusable, self-contained components
- Data + UI
Components combine view logic, user interface and data
- Composition
We can combine multiple components to form complex apps
ファイル名は`.js`か`.jsx`を使う。

### How component works
コンポーネントには親と子がある。
- 親コンポーネントはimportする
- 子コンポーネントはexportする
```jsx
import React from "react";

class About extends React.Component ...

export default About
```

例その１
1. import React library この構文は必ず必要
```js
import React from 'react';
```
2. return文の中は基本的にHTMLと同じ
```js
const BlueButton = () => {
    return (
        <button className={'btn-blue'}>
            Click me!
        </button>
    )
}

export default BlueButton
```

- JSXは`-`を認識しないのでキャメルケースで記述する
- `{}`内で変数を扱える（JSでいう`${}`）
- 文法エラーが起きないよう必ず閉じタグ`/>`が必要

例その２
```js
import React from 'react';

const Thumbnail = () => {
    const caption = 'cats'
    const imagePath = './img/cats.png'

    return (
        <div>
            <p>{caption}</p>
            <img src={imagePath} alt={'photo of cats'} />
        </div>
    )
}
```

### Component Hierarchy(階層構造)
1. JSXは必ず階層構造になり、最上位コンポーネントは並列にできない。`return`で返せるのは１つのコンポーネントのみ。
```js
// Error
return (
    <p>Hello World!</p>
    <p>How are you?</p>
)
```
2. JSXの特殊タグである`React.Fragment`で囲むとHTMLタグと同じように記述できる。
```js
import React, { Fragment } from "react";
// OK
return (
    <React.Fragment>
        <p>Hello World!</p>
        <p>How are you?</p>
    </React.Fragment>
)
```
3. `React.Fragment`は省略可能
```js
// OK
return (
    <>
        <p>Hello World!</p>
        <p>How are you?</p>
    </>
)
```
**最上位タグが１つだけだった場合は必要ない！**



# Component
JSXを返す関数をコンポーネントと呼ぶ
　コンポーネントには**Class Component**と**Functional Component**がある

## class component
JavaScriptクラスで書かれたコンポーネント
```js
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}
```
### class componentを使う理由
（React 16.8以前の理由）
1. コンポーネントのなかでオブジェクトの宣言をしたい時
2. コンポーネントのなかでライフサイクルを使う時
3. コンポーネントの中で即座に更新したい時（ライフサイクル）
**現在はhooksがある。**

```jsx
class About extends React.Component {
    // Initializing
    state = {
        name: "Alice"
    };
    // using data in UI
    render() {
        <p>Name is {this.state.name}</p>
    }
}
```

クラスコンポーネントの中で`this`を使った場合、`this`はクラスを指す。

## functional component
Layoutをするのにオススメのコンポーネント
JavaScript関数で書かれたコンポーネントでアロー関数も使える。ライフサイクルは使えない。
別名：Stateless component
```js
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}
```
### setState
functional componentの中では`this.state.name`のように変更はできない。
```js
updateNameStudent = () => {
    this.setState({
        name: "Dodo"
    })
}
```

## Props
It is an object with data that is passed between components
全てのデータタイプを持つ
Reactは一方通行で親から子にデータがいく
```js
// child comp
function Welcome(props) {
    return <h1>Hello, {props.name}.</h1>
}
// parent comp
function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Alice" />
            <Welcome name="Eddy" />
        </div>
    );
}
// <h1>Hello, Sara.</h1>
// <h1>Hello, Alice.</h1>
// <h1>Hello, Eddy.</h1>
```
## Props in functional component
String以外では常に`{}`が必要
```js
// child comp
const Welcome = props => {
    return (
        <div>
            Hello, {props.name}.
        </div>
    )
    name="Sara"
}
```
## Children props
```js
<Clock>
</Clock>
```






## binding（結ぶ・くくりつける）



***

# LifeCycles
Methods that exist in react to execute function at the right timing of a react component life.
なんども実行されることがあるのでそれが正常なタイミングに起きるようにする。
[ライフサイクル図](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## componentWillMount
Immediately before initial rendering



componendDidMount

Immediately after initial rendering



componentWillReceiveProps

When component receives new props



shouldComponentUpdate

Before rendering, after receiving new props or state (can return false to prevent rendering)



componentWillUpdate

Before rendering, after receiving new props or state



componentDidUpdate

After component updates are flushed to DOM



componentWillUnmount

Immediately before removing component from DOM


参照：
[Reactチュートリアル1：犬画像ギャラリーを作ろう](https://zenn.dev/likr/articles/6be53ca64f29aa035f07)

