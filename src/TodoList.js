import React, {Component} from 'react';
import {Button, Input, List} from 'antd'
import 'antd/dist/antd.css'
import store from './store/index'
import {getButtonClickAction, getInputChangeAction, getItemDeleteAction} from './store/actionCreators'


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
        const action = getInputChangeAction(value)
        store.dispatch(action)
    }

    handleButtonClick() {
        const action = getButtonClickAction()
        store.dispatch(action)
    }

    handleItemDelete(index) {
        const action = getItemDeleteAction(index)
        store.dispatch(action)
    }

    handleStoreChange() {
        this.setState(store.getState())
    }
}

export default TodoList;
