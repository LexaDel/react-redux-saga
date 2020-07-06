import React from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from './redux/actions';
import Todo from './components/todo';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchTodos();
    }
    
    render() {
        const { todos } = this.props;
        if (todos && todos.length) {
            return (
                <ul>
                    { todos.map(todo => <Todo todo={todo} key={todo.id}/>) }
                </ul>
            );
        }
        return (<div> нет задач </div>);
    }
}

const mapDispatchToProps = {
    fetchTodos: fetchTodos,
};

const mapStateToProps = (state) => ({
    todos: state.todos,
})

export default connect(mapStateToProps, mapDispatchToProps)(App);