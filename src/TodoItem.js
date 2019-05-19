import React, {Component} from 'react';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }

    render() {
        return ( <div onClick={this.handleItemDelete}>{this.props.content}</div>
        );
    }

    handleItemDelete() {
        this.props.deleteItem(this.props.index)
    }
}

export default TodoItem;
