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
                    <input className='input'
                           value={this.state.inputValue}
                           ref={(input) => {this.input = input}}
                           onChange={this.handleInputChange}/>
                    <button onClick={this.handleAddEvent}>add</button>
                </div>
                <ul ref={(ul) => {this.ul = ul}}>
                    {this.getItemList()}
                </ul>
            </Fragment>
        );
    }

    getItemList() {
        return this.state.list.map((item, index) => {
            return(
                <TodoItem
                    content={item}
                    index={index}
                    key={index}
                    deleteItem={this.handleItemDelete}
                />
            )
        })
    }
    handleInputChange(e) {
        console.log('e.target', e.target)
        console.log('this.input', this.input)

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
        }, () => {
            console.log(this.ul.querySelectorAll('div'))
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
