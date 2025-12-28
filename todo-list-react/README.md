# ✅ Todo List App – React + Bulma

Aplicación de lista de tareas desarrollada con **React** y **Bulma**, con un diseño oscuro moderno, llamativo y funcional.  
Permite gestionar tareas diarias de una forma simple, visual y funcional.

---

## ✨ Características

- ➕ Agregar tareas
- ✏️ Editar tareas existentes
- ✅ Marcar tareas como completadas
- 🗑️ Eliminar tareas
- 🔍 Filtrar tareas (todas / pendientes / completadas)
- 💾 Persistencia con **localStorage**
- 🌙 Diseño oscuro con bordes de color
- 📱 Responsive (desktop y mobile)

---

## 🛠️ Tecnologías utilizadas

- **React**
- **Bulma (CDN)**
- **CSS personalizado**
- **JavaScript (ES6+)**
- **localStorage**

---

## 📂 Estructura del proyecto

El código fuente está organizado dentro de la carpeta `src/`:

- **components/**  
  Contiene los componentes reutilizables de la aplicación:  
  - `Form.jsx`: formulario para agregar nuevas tareas.  
  - `Todo.jsx`: representa una tarea individual.  
  - `TodoList.jsx`: muestra la lista completa de tareas.  
  - `ConfirmModal.jsx`: modal de confirmación para acción de eliminado de tareas.

- **App.jsx**  
  Componente principal que integra y coordina todos los demás.

- **main.jsx**  
  Punto de entrada de la aplicación, donde se inicializa React y se renderiza `App`.

- **index.css**  
  Archivo de estilos globales que aplica diseño a toda la aplicación.

---

## 🚀 Instalación y uso local

- `git clone https://github.com/tu-usuario/tu-repo.git`
- `cd todo-list-react`
- `npm install`
- `npm run dev` 

**Abrir en el navegador:** `http://localhost:5173 `

## 🖼️ Capturas de pantalla

### Vista principal
![Vista principal](./assets/Vista-principal.png)

### Tareas completadas
![Tareas completadas](./assets/tareas-completadas.png)

### Editar tarea
![Editar tarea](./assets/eliminar-tarea.png)

