React

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

安装react脚手架工具

```
npm install -g create-react-app
```

创建一个最简单的脚手架

```
create-react-app hello
```

```shell
cd hello

npm run start
```

<http://localhost:3000/>

设置cmd代理

```
export http_proxy=http://127.0.0.1:50842
export https_proxy=http://127.0.0.1:50842
```

```
set HTTP_PROXY=http://127.0.0.1:50842
set HTTPS_PROXY=http://127.0.0.1:50842
```

HelloWorld： TODO

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TodoList />, document.getElementById('root'));
```



```javascript
import React, {Component, Fragment} from 'react';
import './style.css'

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['hello', 'wangql', 'learning', 'react']
        }
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input className='input' value={this.state.inputValue}  onChange={this.handleInputChange.bind(this)}/>
                    <button onClick={this.handleAddEvent.bind(this)}>add</button>
                    <button onClick={this.handleSearchEvent.bind(this)}>search</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index} onClick={this.handleItemDelete.bind(this, index)}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        );
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
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

    handleSearchEvent() {
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
```

