import React from 'react';
import Todo from './Todo';

export class TodoList extends React.Component {
    componentDidMount() {
        this.props.fetchTodos();
    }
    
    render() {
        const { todos } = this.props;
        if (todos && todos.length) {
            return (
                <div className='todo-list'>   
                    <ul>
                        { todos.map(todo => <li className='todo-item' key={todo.id}> <Todo todo={todo}/> </li>) }
                    </ul>
                </div>
            );
        }
        return (<div>нет задач</div>);
    }
}

export default TodoList;