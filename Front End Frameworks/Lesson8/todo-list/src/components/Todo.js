import React from 'react';

const todoToListItem = item => (
    <li key={item.id}>{item.todo}</li>
)

const TodoList = ({items, onAddTodo}) => {
    let input;

    const onHandleSubmit = (event) => {
        event.preventDefault();
        onAddTodo(input.value);
    }

    const itemList = items.map(todoToListItem);

    return (
        <div>
            <form onSubmit={event => onHandleSubmit(event)}>
                <input type='text' ref={node => {
                    input = node
                }} />
                <button>Add Item</button>
            </form>
            <ol>{itemList}</ol>
        </div>

    );
}


export default TodoList