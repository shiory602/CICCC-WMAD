# Lifecycle
Methods that exist in react to execute function at the right timing of a react component life.
なんども実行されることがあるのでそれが正常なタイミングに起きるようにする。
[ライフサイクル図](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## コンポーネントを作る ~ Mounting ~
constructor
↓
getDerivedStateFromProps
↓
componentWillMount
↓
render
↓
React updates DOM and refs
↓
componentDidMount

## 更新 ~ Updating ~
**New Props**
↓
componentWillReceiveProps
↓
shouldComponentUpdate
↓
componentWillUpdate()
↓
render
↓
getSnapshotBeforeUpdate
↓
React updates DOM and refs
↓
componentDidUpdate

**setState()**
↓
componentWillReceiveProps
↓
shouldComponentUpdate
↓
componentWillUpdate()
↓
render
↓
getSnapshotBeforeUpdate
↓
React updates DOM and refs
↓
componentDidUpdate

## 消滅 ~ UnMounting ~
componentWillUnmount



### componentWillMount
レンダーされる前
### componendDidMount
レンダーされた直後
### componentWillReceiveProps
componentが新しいpropsを受け取ったとき
### shouldComponentUpdate
レンダーの前、新しいpropsかstateを受け取った後
### componentWillUpdate
レンダーの前、新しいpropsかstateを受け取った後
### componentDidUpdate
componentがDOMにアップデートされた後
### componentWillUnmount
componentがDOMから消える前

***

# React Hooks
> React 16.8(2019年2月9日)に追加された
> クラスを書かずにstateや他のReactの機能を使うことができる

## Syntax
コンポーネントのトップで使うこと
- count: stateの名前
- seCount: setState()の代わり
```js
import React, { useState } from 'react';

function Example() {
    const [count, setCount] = useState(0); // 0 はデフォルトの値

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount({ count: count + 1 })}>
                Click me
            </button>
        </div>
    )
}
```

Classの時
```js
class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
            </div>
        );
    }
}
```

## useEffect
Hooksでライフサイクルを使うときで下記のものを含む
### componentDidMount
`[]`中をからにしておくことで一回しか作動しない
```
useEffect(() => {
    axios
    .get("url)
    .then(res => serRepos(response.data));
}, []);
```
### componentDidUpdate
`[]`に変更する値を入れると中身が入れ替わるたびに作動する
```
useEffect(() => {
    document.title = 'You clicked ${count} times';
}, [count]);
```
### componentWillUnmount
コールパックファンクションを使う

***
参照：
[Reactチュートリアル1：犬画像ギャラリーを作ろう](https://zenn.dev/likr/articles/6be53ca64f29aa035f07)



***

# Custom Hooks
[ReactのカスタムHooksをカジュアルに使ってコードの見通しを良くしよう](https://sbfl.net/blog/2020/08/21/use-react-hooks-easy/)
[最近Reactを始めた人向けのReact Hooks入門](https://sbfl.net/blog/2019/11/12/react-hooks-introduction/)
`useXXX`の形で関数を定義する形でカスタムHooksの内部で他のHooksを使う
- 戻り値は無し、1個の値、2個のタプルのいずれかである
    - 無しはuseEffect、1個はuseRef、2個のタプルはuseState、が代表的
    - 4個とか5個とかになってきたら分割を考えてみましょう
使用者側で再評価の制御をしたい場合は依存配列を使う

useEffectの第二引数と同じようにする
```
const useCount = () => {
    const [count, setCount] = useState(0);
    const countUp = () => setCount((c) => c + 1);
    return [count, countUp];
};
```
このuseCountというHooksでは内部でuseStateを使っていて、状態値を保持する。
返却値はcount値そのままと、countを増加させるcountUp関数。

使い方は普通のHooksと同じ。
```
const App = () => {
  const [count, countUp] = useCount();
  return <div onClick={countUp}>{count}</div>
};
```

## useMemo
値を保存するためのフック。
useStateと違い、更新関数はなくキャッシュのような使い方ができる
```
const Calculator = () => {
  const calcResult = useMemo(() => expensiveFunc(), []);

  return <div>{calcResult}</div>
};
```
React本体側に値がキャッシュされ、2度目以降のレンダリングではfuncを実行せずにキャッシュから値を取得するようになる。

気になるのが第二引数の配列です。今回は空配列を渡しています。これは「依存関係」を表しており、ここに変数を並べると、いずれかの変数の値が変わった時にfuncを再実行してくれます。空配列を渡すと「何にも依存しないので、未来永劫1回しか実行しません」の意味になります。

props.idが変わるたびにexpensiveFuncを再実行する場合は以下のように書く
```
const Calculator = (props) => {
  const calcResult = useMemo(() => expensiveFunc(props.id), [props.id]);

  return <div>{calcResult}</div>
};
```

## useCallback
**useMemo**の亜種
useMemoは何でもキャッシュすることができるので、例えば関数をキャッシュすることができます。ただそれには「関数を返す関数」をuseMemoに渡さねばならず、少々見栄えがよろしくありません。

useCallbackは関数特化のuseMemoで、useMemo(() => func, [])と書かなければいけないところをuseCallback(func, [])まで省略できます。あとはuseMemoと同じです。

## useRef
useRefはuseStateの参照版です。useRefを使うことでReact本体側に値を保存できますが、オブジェクトでラップされます。

useRefの主な用途はDOMへの参照です。JSXのrefプロパティにuseRefで作成した参照を渡してやることで、DOMへ簡単にアクセスできるようになります。
```
const Message = () => {
  const divRef = useRef(null);

  useEffect(() => {
    // ref.currentで現在の参照の値を取得できる
    // ここではdiv要素のDOM
    divRef.current.innerText = 'Hello!';
  }, []);

  // refに渡しておく
  return <div ref={divRef}></div>
};
```
上記のように、const ref = useRef(initialValue)で参照を作り、ref.currentで現在値を取得できます。

useRefは汎用的なので一応DOM取得以外にも使えるのですが、基本的にはこの用途のみになるでしょう。