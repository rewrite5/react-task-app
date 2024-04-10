import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, SetTitle] = useState("");
  const [description, SetDescription] = useState("");
  const {createTask} = useContext(TaskContext)
  

  const handleSubmit = (e) => {
    e.preventDefault(); // este metodo cancela el comportamiento por defecto

    createTask({
      title,
      description,
    });
    SetTitle("");
    SetDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-900 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crear Tareas</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => SetTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />

        <textarea
          placeholder="Escribe una escripcion"
          onChange={(e) => SetDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Save</button>
      </form>
    </div>
  );
}

export default TaskForm;
