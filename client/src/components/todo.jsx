import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../redux/actions';

class Todo extends React.Component {
    render() {
        const { todo, deleteTodo } = this.props;
        return (
            <li>
                {todo.title} 
                <span>
                    <button
                        onClick={() => { deleteTodo(todo.id) }}
                    >
                        Удалить
                    </button>
                </span>
            </li>
        )
    }
}

const mapDispatchToProps = {
    deleteTodo: deleteTodo
}

export default connect(null, mapDispatchToProps)(Todo);