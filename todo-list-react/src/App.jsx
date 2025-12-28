import { useEffect, useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("todas");

  // Cargar desde localStorage
  useEffect(() => {
    const guardadas = JSON.parse(localStorage.getItem("tareas"));
    if (guardadas) {
      setTareas(guardadas);
    }
  }, []);

  // Guardar en localStorage
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  return (
    <section className="section">
      <div className="container is-max-widescreen">
        <div
          className="box has-background-grey-dark"
          style={{
            borderRadius: "20px",
            padding: "3rem",
            boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
          }}
        >
          <h1 className="title has-text-centered has-text-info-light">
            📋 Mis Tareas
          </h1>

          <Form tareas={tareas} setTareas={setTareas} />

          <TodoList
            tareas={tareas}
            setTareas={setTareas}
            filtro={filtro}
            setFiltro={setFiltro}
          />
        </div>
      </div>
    </section>
  );
}

export default App;
