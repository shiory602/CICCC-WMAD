import React from "react";

class StudentList extends React.Component {
    // クラスコンポーネントでstateを宣言するときは必ず必要な２行
    constructor(props) {
        super(props)
        // stateは基本オブジェクト
        this.state = {
            // property: value,
            content: <img src={this.props.img} alt='loading' />,
            listItem: [
                {
                    // リストにするときデータにidをつける
                    id: 1,
                    name: 'Alice',
                },
                {
                    id: 2,
                    name: 'John',
                },
                {
                    id: 3,
                    name: 'Eddy',
                },
                {
                    id: 4,
                    name: 'Sarah',
                },
                {
                    id: 5,
                    name: 'Olivia',
                },
            ],
        }
    }
    

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

        
    render() {
        return (
            <div id='main'>
                {this.state.content}
            </div>
        );
    }
}


export default StudentList;