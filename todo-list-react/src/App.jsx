import { useEffect, useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  // Carga inicial desde LS
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem("tareas");
    return guardadas ? JSON.parse(guardadas) : [];
  });

  const [filtro, setFiltro] = useState("todas");

  // Guardar en localStorage cada vez qe cambian
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  return (
    <section className="section">
      <div className="container is-max-widescreen">
        <div
          className="box has-background-dark"
          style={{
            borderRadius: "100px 100px",
            padding: "3rem",
            boxShadow: "0 0px 50px rgba(4, 222, 255, 0.7)",
            minHeight: "80vh",
          }}
        >
          <h1 className="title has-text-centered has-text-info-light">
           📝 Tareas del día
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
