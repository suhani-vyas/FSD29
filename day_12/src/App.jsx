import React, { useState } from 'react';

const Main = () => {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addHandler = () => {
    if (task.trim() === '') return;

    if (editIndex !== null) {
      // Update
      const updatedList = [...todoList];
      updatedList[editIndex] = task;
      setTodoList([...updatedList]);
      setEditIndex(null);
    } else {
      
      setTodoList([...todoList, task]);
    }

    setTask('');
  };

  const deleteHandler = (index) => {
    const updatedList = todoList.filter((d, i) => i !== index);
    setTodoList(updatedList);

    if (editIndex === index) {
      setTask('');
      setEditIndex(null);
    } else if (editIndex !== null && editIndex > index) {
      setEditIndex(editIndex - 1);
    }
  };

  const editHandler = (index) => {
    setTask(todoList[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h1>TODO LIST</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addHandler}>
        {editIndex !== null ? 'UPDATE' : 'ADD'}
      </button>
      <br />

      {todoList.map((task, index) => (
        <div key={index}>
          <span>{task}</span>
          <button onClick={() => editHandler(index)}>EDIT</button>
          <button onClick={() => deleteHandler(index)}>DELETE</button>
        </div>
      ))}
    </div>
  );
};

export default Main;