import { useState } from "react";

function Form({ tareas, setTareas }) {
  const [texto, setTexto] = useState("");
  const [error, setError] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();

    if (texto.trim() === "") {
      setError("La tarea no puede estar vacía.");
      return;
    }

    if (texto.trim().length < 3) {
      setError("La tarea debe tener al menos 3 caracteres.");
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      texto: texto.trim(),
      completada: false,
    };

    setTareas([...tareas, nuevaTarea]);
    setTexto("");
    setError("");
  };

  return (
    <form onSubmit={manejarSubmit} className="mb-6">
      <div className="field">
        <div className="control">
          <input
            className="input is-medium"
            type="text"
            placeholder="¿Qué tenés que hacer hoy?"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
        </div>
        {error && <p className="help is-danger">{error}</p>}
      </div>

      <button className="button is-info is-fullwidth is-medium">
        Agregar tarea
      </button>
    </form>
  );
}

export default Form;
