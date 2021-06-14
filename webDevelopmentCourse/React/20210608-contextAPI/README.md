# Context API

BEFORE
We had to send props down each generation down until it reachs the component we want to use that props in.

NOW with Context API
Context API lets you skip those generations.

## Initializing context instance
```js
const ThemeContext = React.createContext('light');
```
The value that you set in **createContext()**

## Provider and Consumer
1. Set the Provider context to the component that sends the data.
2. Use the Consumer context to the component that receives the data.
### Provider
```js
<ThemeContext.Provider>
</ThemeContext.Provider>
```
### Consumer
There are two ways to receive the data(values) from the Provider
1. As render props (you can only access the value from render())
```js
<Context.Consumer>
    {value => /* render something based on the context value */}
</Context.Consumer>
```
2. As static contextType
```js
    class MyClass extends React.Component {
        static contextType = MyContext;
        render() {
            let value = this.context;
            // render something based on the value
        }
    }
```

```js
//App parent comp
state = {
    users: [],
    city: 'vancouver'
}
render (
    <Users city={this.state.city} />
)

// Users child comp
User(props) {
    return (
    <p>city: {props.city}</p>
    )
    <childrenUser />
}
```

React Context API はあらゆるレベルに手動で props  を伝えなくても、コンポーネント ツリーを通してデータを送信する方法を提供します。React では、親コンポーネントからその子コンポーネントにプロパティとして送信されることがよくあります。

新しい React Context API を使うことは次の 3 つのステップによって決まります。

初期状態を React.createContext に送ります。この機能は  Provider  や  Consumer  と共にひとつのオブジェクトを返します。
Provider  コンポーネントをツリーのトップで使用し、value  と呼ばれるプロパティを承諾させます。この値は何でも構いません。
状態のサブセットを取得するために、Consumer  コンポーネントをコンポーネント ツリーにあるプロバイダーの下で使います。


# React Context API の主要な概念
**Context API**とは、Contextオブジェクトとそれに備わった`Provider`と`Consumer`の３つを提供するもの。

### Context オブジェクト
**Contextオブジェクト**は、コンポーネントツリー上で直接の親子関係にないコンポーネント間で同じ値を共有する為の道具。
各ContextオブジェクトにはProviderとConsumerという２つのコンポーネントが備わっている。
```js
Context.Provider
Context.Consumer
```

### Context Provider
`Context Provider`は**Contextオブジェクト**がもつコンポーネント
対象の値の利用可能な範囲を指定するために使う。

### Context Consumer
`Context Consumer`は**Contextオブジェクト**がもつコンポーネント
コンテキストの値を利用したい場所で使う。

`Context Consumer`を使えば、コンポーネントツリーを外に外に見ていって一番近くにある`Context Provider`のContextに紐づけられた値にアクセスすることができる。

## Context APIと useContext()

1. `createContext()` を使って Context オブジェクトを生成する
2. 1 で生成した Context オブジェクトの Provider をコンポーネントツリーの上方に差し込む
3. 差し込んだ Provider の子孫コンポーネントの中で `useContext()` を使って Context オブジェクトにひもづけられた値を取得する

### 公式ドキュメントのサンプルを `useContext()` を使って書く
```js
import React, { createContext, useContext } from "react"

// 1. `createContext()` で Context オブジェクトを生成する
const ThemeContext = createContext('light')

// 2. 1 で生成した `Context` オブジェクトの `Provider` をコンポーネントツリーの上方に差し込む
const App = () => <ThemeContext.Provider value="dark">
  <Toolbar />
</ThemeContext.Provider>

const Toolbar = (props) => <div>
  <ThemedButton />
</div>

// 3. 差し込んだ `Provider` の子孫にあたるコンポーネントで `useContext()` を使って値を取得する
const ThemedButton = () => {
  // `<ThemeContext.Provider>` に渡された `value` の値がここで利用できる
  const theme = useContext(ThemeContext)
  // 初期状態で `theme` の値は `"dark"`
  return <Button theme={theme} />
}
```

### ページのカラーモードを切り替える機能
４つのファイルを作る
- `context/color-mode.js`: カラーモードを管理するための Context を定義する
- `component/layout.js`: ツリーの中で上位の方にあるコンポーネント
- `component/header.js`: ツリーの中で下位の方にあるコンポーネント その 1
- `component/footer.js`: ツリーの中で下位の方にあるコンポーネント その 2

> `context/color-mode.js`
1. `createContext()` を使って ColorContext という Context オブジェクトを生成
2. ColorContext の Provider を使い ColorProvider というコンポーネントを定義
3. ColorProvider 内では色を管理するための state を `useState()` を使って定義し ColorContext の Provider に value として渡す
4. `useContext()` を使って ColorContext.Provider に渡された value を利用するための useColorContext というヘルパー関数を生成
```js
import React, { useState, createContext, useContext } from "react"

// カラーモードは文字列で保持
const colorModes = {
  light: 'Light',
  natural: 'Natural',
  dark: 'Dark',
}

// 1. `createContext()` を使って ColorContext という Context オブジェクトを生成
const ColorContext = createContext({
  color: '',
  setColor: () => {},
})

// 2. ColorContext の Provider を使い ColorProvider というコンポーネントを定義
const ColorProvider = ({ children }) => {
    // 3. ColorProvider 内では色を管理するための state を `useState()` を使って定義
  const [color, setColor] = useState('light')
    // ColorContext の Provider に value として渡す
  return <ColorContext.Provider value={{ color, setColor }}>
    {children}
  </ColorContext.Provider>
}

const useColorContext = () => useContext(ColorContext)

export { ColorProvider, useColorContext, colorModes }
```

> `component/layout.js`
 `context/color-mode.js` で用意した ColorProvider を Layout が返すツリーのルートに差し込む。
こうしておくことで、コンポーネントツリー上 Layout に含まれるコンポーネント（後ほど定義する Header や Footer ）から ColorContext.Provider に渡された value にアクセスできるようになる。
```js
import React from "react"

import { ColorProvider } from "../context/color-mode"
import { Header } from "./header"
import { Footer } from "./footer"

const Layout = ({ children }) => {
// context/color-mode.js で用意した ColorProvider を Layout が返すツリーのルートに差し込む
  return <ColorProvider>
    <Header />
    { children }
    <Footer />
  </ColorProvider>
}

export default Layout
```

> component/header.js
ここでは `context/color-mode.js` で用意したヘルパー関数 `useColorContext()` とオブジェクト colorModes を使って、 ColorProvider に value として渡された `{ color, setColor }` を取り出す。 そしてこれらと colorModes を組み合わせてカラーを変更するためのセレクトボックスを生成。
```js
import React from "react"

import { useColorContext, colorModes } from "../context/color-mode"

const Header = () => {
  const { color, setColor } = useColorContext()
  return <header>
    <h1>◯◯商事</h1>
    <div> カラーモード: {color} </div>
    <div>
      <select
        defaultValue={color}
        onChange={(e) => setColor(e.target.value)}
      >
        {Object.entries(colorModes).map(([value, label]) =>
          <option value={value} >{label}</option>)
        }
      </select>
    </div>
  </header>
}

export default Header
```

> component/footer.js
Footer でやっていることは Header とほぼ同じ。
` useColorContext() `を使ってカラーが変更できるセレクトボックスを生成
```js
import React from "react"

import { useColorContext, colorModes } from "../context/color-mode"

const Footer = () => {
  const { color, setColor } = useColorContext()
  return <footer>
    <div> カラーモード: {color} </div>
    <div>
      <select
        defaultValue={color}
        onChange={(e) => setColor(e.target.value)}
      >
        {Object.entries(colorModes).map(([value, label]) =>
          <option value={value} >{label}</option>)
        }
      </select>
    </div>
  </footer>
}

export default Footer
```


[React](https://ja.reactjs.org/docs/context.html),
[React Context API と useContext() の使い方](https://gotohayato.com/content/523/)