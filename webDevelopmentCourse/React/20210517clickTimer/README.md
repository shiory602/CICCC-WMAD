# Weekly Assignment ~ 103 React Overview ~

Finishing example:
**This is the Left Text**
| Show Right | Show Left |

## Challenge 1
1. Make a new class component
2. Make a state that is a boolean.
3. Inside the class component. Make a title tag with h1. Inside the h1 tag, add a conditional operator to show different text using the boolean state you made in no.3.
4. Make 2 buttons to update the boolean state.

## Challenge 2

In this example, Loading students… is switched to a list of students after 3 seconds! Try doing something like this!

1. Make a StudentList component
2. Using Array.map(), show all the names of the student in a list
3. StudentList component is going to receive that array as props from the parent (App.js).
4. From the parent, send that array after 3 seconds. (Hint! Use state in the parent comp to add students data. Also you can use setTimeOut, to set data to that state)
5. While waiting for that data, show loading UI
6. Bonus: Add a button to shuffle the student list

## Problem

I couldn't set Timer at first.
This time, I put this function in parent component.
```js
// タイマー処理
function Tick() {
useEffect(() => {
    setTimeout(() => {
    setElement(element);
    }, 3000);
}, []);
}
```

So I tried two things.
1. Replace all data to child component
2. Use `setInterval()` instead of `setTimeout()`
3. Use LifeCycle `componentDidMount()` and `componentWillUnmount()`
```js
// render()が起きた後に発生
componentDidMount() {
    this.timer = setInterval(
        () => this.setState({
            // 配列内の要素をmap()でリストにする。このときkeyにidを設定する。
            content: this.state.listItem.map(item => (
            <li key={item.id}>{item.name}</li>
            ))
        }),
    3000)
}

// 設定したタイマーをストップする
componentWillUnmount() {
    clearInterval(this.timer);
}
```

Now I understood the code I create, but I still don't understand about how to write function component, also class component.
I decided to learn function component first, and then, learn class component.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).