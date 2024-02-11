import React, { useState } from "react";
import { Todo } from "./components/todo";
import { nanoid } from "nanoid";
import { notesCollection } from "./firebase";
import { addDoc } from "firebase/firestore";

export function App() {
  const [note, setNote] = useState({
    title: "",
    content: "",
    id: "",
    bread: "",
    egg: "",
    drinks: {
      water: "",
      tea: "",
    },
  });

  const [noteArr, setNoteArr] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
        id: nanoid(4),
      };
    });
  }

  async function addTodo(newTodo) {
    setNoteArr((prevVal) => {
      return [...prevVal, newTodo];
    });

    try {
      await addDoc(notesCollection, newTodo);
      console.log("Todo added successfully!");
    } catch (error) {
      console.error("Error adding todo: ", error);
    }

    setNote({
      title: "",
      content: "",
    });
  }

  const toDos = noteArr.map((todo, index) => {
    return (
      <Todo
        key={index}
        id={todo.id}
        title={todo.title}
        content={todo.content}
      />
    );
  });

  return (
    <div className="container">
      <form action="">
        <input
          onChange={handleChange}
          name="title"
          type="text"
          value={note.title}
        />
        <input
          onChange={handleChange}
          name="content"
          type="text"
          value={note.content}
          required
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            addTodo(note);
          }}
        >
          Submit
        </button>
        {toDos}
      </form>
    </div>
  );
}
