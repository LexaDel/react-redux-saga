import React from 'react';
import TodoList from './components/TodoList';
import { connect } from 'react-redux';
import { fetchTodos } from './redux/actions';

class App extends React.Component {
    render() {
        const props = this.props;
        return (<TodoList {...props}/>)
    }
}

const mapDispatchToProps = {
    fetchTodos: fetchTodos,
};

const mapStateToProps = (state) => ({
    todos: state.todos,
})

export default connect(mapStateToProps, mapDispatchToProps)(App);