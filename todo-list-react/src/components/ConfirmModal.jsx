function ConfirmModal({ activo, mensaje, onConfirmar, onCancelar }) {
  if (!activo) return null;

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>

      <div className="modal-card">
        <header className="modal-card-head has-background-dark">
          <p className="modal-card-title has-text-white">
            Confirmar acción
          </p>
        </header>

        <section className="modal-card-body has-background-grey-dark has-text-white">
          {mensaje}
        </section>

        <footer className="modal-card-foot has-background-dark">
          <button className="button is-danger" onClick={onConfirmar}>
            Sí, eliminar
          </button>
          <button className="button" onClick={onCancelar}>
            Cancelar
          </button>
        </footer>
      </div>
    </div>
  );
}

export default ConfirmModal;
