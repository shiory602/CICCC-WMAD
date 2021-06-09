### React is mainly used for building ___.
User Interface

### The lifecycle methods are mainly used for ___.
Freeing up resources

### ___ can be done while multiple elements need to be returned from a component.
Wrapping

### How do you access a function fetch() from a h1 element in JSX?
<h1>{fetch()}</h1>

### Which of the following methods in a React Component should be overridden to stop the component from updating?
shouldComponentUpdate

### What is used to pass data to a component from outside?
props

### Which of the following methods in a React Component is called after the component is rendered for the first time?
componentDidMount

### Which of the following is the correct syntax for a button click event handler foo?
```js
<button onClick={this.foo}>
```

### What will happen if you call setState() inside render() method?
Stack overflow error

### How do you write an inline style which specifies the font-size:12px and color:red; in JSX?
```js
style={{fontSize:'12px',color:'red'}}
```

### What advantages does ReactJS have?
- Increases the applications performance with Virtual DOM
- JSX makes a code that is easy to read and write
- It renders both on client and server side
- Easy to integrate with other frameworks(Angular,BackboneJS) since it is only a view library

### What is state in React?
An internal data store (object) of a component.

### What is ReactJS?
Library for building interaction interfaces

### What are the two ways that data gets handled in React?
state and props

### What disadvantages does ReactJS have?
- It is only a view layer. You have to plug your code for Ajax requests, events and so on.
- The library is pretty large.
- The learning curve can be slow

### Choose the right answer about JSX.
- JSX is faster as it performs optimization while compiling code to JavaScript
- JSX is a syntax notation for JavaScript XML
- JSX provides expressiveness of JavaScript along with HTML, like template syntax

### React merges the object provided into the current state using ___.
Reactは、提供されたオブジェクトを、以下の方法で現在の状態にマージします。
setState()


### The arbitrary inputs of components are called_
コンポーネントの任意の入力を返すのは
Props


### Ref is used for referring an element or component returned by ___.
Refは、返された要素やコンポーネントを参照するために使用されます。
render()