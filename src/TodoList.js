import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['hello', 'wangql', 'learning', 'react']
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleAddEvent = this.handleAddEvent.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input className='input' value={this.state.inputValue}  onChange={this.handleInputChange}/>
                    <button onClick={this.handleAddEvent}>add</button>
                </div>
                <ul>
                    {this.getItemList()}
                </ul>
            </Fragment>
        );
    }

    getItemList() {
        return this.state.list.map((item, index) => {
            return(
                <TodoItem content={item} index={index} deleteItem={this.handleItemDelete}/>
            )
        })
    }
    handleInputChange(e) {
        // this.setState({
        //     inputValue: e.target.value
        // })
        const value = e.target.value
        this.setState(() => {
            return {
                inputValue: value
            }
        })
    }

    handleAddEvent() {
        if (this.state.inputValue === '') {
            return
        }
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue : ''
        })
    }

    handleItemDelete(index) {
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default TodoList;
