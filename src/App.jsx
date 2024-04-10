import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {

  return (
    <main className="bg-green-500 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
