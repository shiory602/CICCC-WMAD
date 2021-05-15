import React from "react";
import Article from './Article';
// import {Foo, Bar} from './components/FooBar'; // 関数ごとのimport
import * as FooBar from './components/FooBar' // モジュール全体のimport
import Hoge from './components/Hoge'

// class Blog extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isPublished: false,
//             count: 0
//         }
//     }
const Blog = () => {
    // constructor(props) {
    //     super(props);
        // this.state = {
        //     isPublished: false,
        //     count: 0
        // }
    // }

    // componentDidMount() {
    //     // ボタンがクリックされたらいいねをカウントアップする
    //     document.getElementById('counter').addEventListener('click', this.countUp)
    // }

    // componentDidUpdate() {
    //     if (this.state.count >= 10) {
    //         // this.state.count = 0; これはダメな書き方
    //         this.setState({count: 0})
    //     }
    // }

    // componentWillUnmount() {
    //     document.getElementById('counter').removeEventListener('click', this.countUp)
    // }

    // 公開状態を反転させる関数
    // togglePublished = () => {
    //     this.setState( {
    //         isPublished: !this.state.isPublished
    //     })
    // };

    // countUp = () => {
    //     this.setState({count: this.state.count + 1})
    // }

    // render() {
        const authorName = 'Torahack';
        return (
            <>
                <Article
                    title='Reactの使い方'
                    // isPublished={this.state.isPublished}
                    // toggle={() => this.togglePublished()}
                    // count={this.state.count}
                />
                {/* <Foo /> */}
                {/* <Bar /> */}
                <FooBar.Foo />
                <FooBar.Bar />
                <Hoge />
            </>
        );
    }
// }

export default Blog;