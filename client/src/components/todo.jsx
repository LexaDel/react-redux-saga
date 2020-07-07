import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../redux/actions';

class Todo extends React.Component {
    render() {
        const { todo, deleteTodo } = this.props;
        return (
            <>
                <span className='todo-title'>{todo.title}</span>
                <span>
                    <button
                        onClick={() => { deleteTodo(todo.id) }}
                    >
                        Удалить
                    </button>
                </span>
            </>        )
    }
}

const mapDispatchToProps = {
    deleteTodo: deleteTodo
}

export default connect(null, mapDispatchToProps)(Todo);