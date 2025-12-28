import Todo from "./Todo";

function TodoList({ tareas, setTareas, filtro, setFiltro }) {
  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === "completadas") return t.completada;
    if (filtro === "pendientes") return !t.completada;
    return true;
  });

  return (
    <>
      <div className="field mb-5">
        <div className="control">
          <div className="select is-fullwidth is-medium">
            <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
              <option value="" disabled selected>-- Filtrar tareas --</option>
              <option value="todas">Todas</option>
              <option value="pendientes">Pendientes</option>
              <option value="completadas">Completadas</option>
            </select>
          </div>
        </div>
      </div>

      {tareasFiltradas.length === 0 ? (
        <p className="has-text-centered has-text-grey-light">
          No hay tareas para mostrar
        </p>
      ) : (
        tareasFiltradas.map((tarea) => (
          <Todo
            key={tarea.id}
            tarea={tarea}
            tareas={tareas}
            setTareas={setTareas}
          />
        ))
      )}
    </>
  );
}

export default TodoList;

