import React, { useEffect } from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
// A = 1

const List = () => {
    const [search, setSearch] = useState('')
    const [listTodo, setListTodo] = useState(
        [{ id: uuidv4(), name: 'Apple' },
        { id: uuidv4(), name: 'LG' },
        { id: uuidv4(), name: 'Samsung' },
        { id: uuidv4(), name: 'sony' }]
    )
    const [listTodosearch, setListTodoSearch] = useState(
        [{ id: uuidv4(), name: 'App' }]
    )
    const [input, setInput] = useState("");
    const [curentTodo, setCurrentTodo] = useState(null)

    const submitTodo = () => {
        setListTodo([...listTodo, { id: uuidv4(), name: input }])
        setInput("")
    }
    const handleChangeInput = (e) => {
        setInput(e.target.value);
    }
    useEffect(() => {
        if (input.length === 0 && search.length > 0) {
            setSearch('')
        }
    }, [input])
    const handleDeleteTodo = (index) => () =>
        setListTodo((items) => items.filter((i, id) => id !== index));

    const searchTodo = () => {
        const search = input
        setSearch(search)
        const result = listTodo.filter(item => item.name.indexOf(search) >= 0)
        setListTodoSearch(result)
        console.log(search);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (input.trim().length > 0) {
            setListTodo([...listTodo, { id: uuidv4(), name: input }]);
        }
        setInput("")
    }
    const handleEditFormSubmit = (e) => {
        e.preventDefault();
        handleUpdateTodo(curentTodo.id, curentTodo)
    }
    const handleUpdateTodo = (id, updateTodo) => {
        const updateItem = listTodo.map((todo) => {
            return todo.id === id ? updateTodo : todo;
        });
        setCurrentTodo(null)
        setListTodo(updateItem)
    }

    const todosShowing = search.length > 0 ? listTodosearch : listTodo
    return (
        <div style={{ border: '1px solid black', height: 'auto', width: 'auto' }}>
            {curentTodo !== null ? (
                <form onSubmit={handleEditFormSubmit}>
                    <h2>Edit Todo</h2>
                    <input
                        type="text"
                        placeholder="Edit todo"
                        value={curentTodo.name}
                        onChange={(e) => {
                            setCurrentTodo({ ...curentTodo, name: e.target.value })
                        }}
                    />
                    <button type="submit">Update</button>
                    <button onClick={() => setCurrentTodo(null)}>Cansel</button>
                </form>
            ) : (
                <div>
                    <h2>Add todo</h2>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <form onSubmit={handleFormSubmit}>
                            <input onChange={handleChangeInput} placeholder='enter text' type="text" value={input}></input>
                            <button onClick={submitTodo}>Create</button>
                        </form>
                        <button onClick={searchTodo}>Search</button>
                    </div>
                </div>
            )}
            <div>
                {todosShowing.map((Todo, index) => (
                    <li key={Todo.id}>
                        <span>{Todo.name}</span>
                        <button onClick={handleDeleteTodo(index)}>X</button>
                        <button onClick={() => {
                            setCurrentTodo(Todo);
                        }}>Update</button>
                    </li>

                ))}

            </div>



        </div >
    )
}

export default List
//https://codesandbox.io/s/github/k98a73/react-crud-todo/tree/55d156933f823ca725da230ceeac533959e7d9ab/?file=/src/App.js:673-684