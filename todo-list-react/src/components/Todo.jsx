import { useState } from "react";
import ConfirmModal from "./ConfirmModal";

function Todo({ tarea, tareas, setTareas }) {
  const [editando, setEditando] = useState(false);
  const [textoEditado, setTextoEditado] = useState(tarea.texto);
  const [mostrarModal, setMostrarModal] = useState(false);

  const toggleCompletar = () => {
    setTareas(
      tareas.map((t) =>
        t.id === tarea.id ? { ...t, completada: !t.completada } : t
      )
    );
  };

  const guardarEdicion = () => {
    if (textoEditado.trim().length < 3) return;

    setTareas(
      tareas.map((t) =>
        t.id === tarea.id ? { ...t, texto: textoEditado } : t
      )
    );
    setEditando(false);
  };

  const eliminarTarea = () => {
    setTareas(tareas.filter((t) => t.id !== tarea.id));
    setMostrarModal(false);
  };

  return (
    <>
      <div
        className="box mb-4"
        style={{
          backgroundColor: tarea.completada ? "#126421ff" : "#2a2a2a",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
        }}
      >
        <div className="columns is-vcentered">
          <div className="column">
            {editando ? (
              <input
                className="input"
                value={textoEditado}
                onChange={(e) => setTextoEditado(e.target.value)}
              />
            ) : (
              <p
                className={
                  tarea.completada
                    ? "has-text-grey-light has-text-line-through"
                    : "has-text-white has-text-weight-semibold"
                }
              >
                {tarea.texto}
              </p>
            )}
          </div>

          <div className="column is-narrow">
            {editando ? (
              <button
                className="button is-info is-small" onClick={guardarEdicion}>
                Guardar
              </button>
            ) : (
              <>
                <button
                  className="button is-success is-big mr-1" onClick={toggleCompletar}
                >
                  ✔
                </button>

                <button
                  className="button is-warning is-big mr-1"
                  onClick={() => setEditando(true)}
                >
                  ✏️
                </button>

                <button
                  className="button is-danger is-big"
                  onClick={() => setMostrarModal(true)}
                >
                  🗑️
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <ConfirmModal
        activo={mostrarModal}
        mensaje="¿Estás segura de eliminar esta tarea?"
        onConfirmar={eliminarTarea}
        onCancelar={() => setMostrarModal(false)}
      />
    </>
  );
}

export default Todo;
