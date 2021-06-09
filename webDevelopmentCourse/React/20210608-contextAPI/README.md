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

[React](https://ja.reactjs.org/docs/context.html)