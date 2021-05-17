import React from "react";

class StudentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: <img src={this.props.img} alt='loading' />,
            listItem: [
                {
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
            ],
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
            <div id='main'>
                {this.state.content}
            </div>
        );
    }
}


export default StudentList;