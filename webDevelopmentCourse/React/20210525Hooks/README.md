# Hooks

## クラスコンポーネントをHooksを使ったファンクションコンポーネントに書き換える
### クラスコンポーネント
```
import React from 'react';

export default class StudentList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: <img src={this.props.img} alt='loading' />,
      listItem: [
        {
          id: 1,
          name: 'Shiori'
        },
        {
          id: 2,
          name: 'Aiko'
        },
        {
          id: 3,
          name: 'Takuya'
        }
      ]
    }
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.setState({
        content: this.state.listItem.map(item => (
          <li key={item.id}>{item.name}</li>
        ))
      }),
    3000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        {this.state.content}
      </div>
    );
  }
}
```

### ファンクションコンポーネント with Hooks

```
import React, { useState, useEffect } from "react";

export default function StudentList(props) {
  const [content, setContent] = useState(<img src={props.img} alt="loading" />);
  const [listItem, setListItem] = useState([
    {
      id: 1,
      name: "Shiori"
    },
    {
      id: 2,
      name: "Aiko"
    },
    {
      id: 3,
      name: "Takuya"
    }
  ]);

  useEffect(() => {
    const timer = setInterval(
      () =>
        setContent(listItem.map((item) => <li key={item.id}>{item.name}</li>)),
      3000
    );
    // clearInterval(timer);
  }, []);

  return <div>{content}</div>;
}
```