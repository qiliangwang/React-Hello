import React, {Component} from 'react';
import {Input, Button, List} from 'antd'
import 'antd/dist/antd.css'
import store from './store/index'
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes'


class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)

        this.handleStoreChange = this.handleStoreChange.bind(this)
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return (
            <div style={{marginTop: 10, marginLeft: 10}}>
                <div>
                    <Input
                        onChange={this.handleInputChange}
                        value={this.state.inputValue}
                        placeholder='todo info'
                        style={{width: 300, marginRight: 10}}/>
                    <Button
                        onClick={this.handleButtonClick}
                        type='primary'>submit</Button>
                </div>

                <List
                    style={{width: 300}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>
                    )}
                />
            </div>
        )
    }

    handleInputChange(e) {
        const value = e.target.value;
        const action = {
            type: CHANGE_INPUT_VALUE,
            value: value
        }
        store.dispatch(action)
    }

    handleButtonClick() {
        const action = {
            type: ADD_TODO_ITEM
        }
        store.dispatch(action)
    }

    handleItemDelete(index) {
        const action = {
            type: DELETE_TODO_ITEM,
            value: index
        }
        store.dispatch(action)
    }

    handleStoreChange() {
        this.setState(store.getState())
    }
}

export default TodoList;
