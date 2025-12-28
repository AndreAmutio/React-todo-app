import Form from "./components/Form";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered has-text-info">
          Todo List React
        </h1>

        <Form />
        <TodoList />
      </div>
    </section>
  );
}

export default App;
