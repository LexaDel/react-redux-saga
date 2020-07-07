import React from 'react';
import { shallow, mount } from 'enzyme';
import { TodoList } from './TodoList';
import Todo from './Todo';

describe('Todos container', () => {
    const props = { // описываем props
        todos: [],
        fetchTodos: () => {},
    }
    
    describe('Render empty todo list', () => {
        it('render empty list', () => {
            const TodoContainer = shallow(<TodoList {...props} />);
            expect(TodoContainer.find('div').text()).toEqual('нет задач');
        });
    });

    describe('Render todo list', () => {
        it('Render todo list', () => {
            const newProps = {
                ...props,
                todos: [{id: 1, title: 'Just test'}],
            };
            const TodoContainer = shallow(<TodoList {...newProps} />);
            expect(TodoContainer.find('.todo-item').exists()).toBeTruthy();
        });
    });
    
});