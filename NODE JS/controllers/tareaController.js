class TareasController {
    constructor() {
        this.tareas = [];
        this.nextId = 1;
    }

    ingresarTarea = (req, res) => {
        const { title } = req.body;
        if (!title) {
            return res.status(400).json({ msg: 'El título es requerido' });
        }

        const nuevaTarea = { id: this.nextId++, title, completed: false };
        this.tareas.push(nuevaTarea);
        res.status(201).json(nuevaTarea);
    }

    consultarTarea = (req, res) => {
        res.json(this.tareas);
    }

    actualizarTarea = (req, res) => {
        const { id, title, completed } = req.body;
        const tarea = this.tareas.find(t => t.id === parseInt(id));

        if (!tarea) {
            return res.status(404).json({ msg: 'Tarea no encontrada' });
        }

        tarea.title = title !== undefined ? title : tarea.title;
        tarea.completed = completed !== undefined ? completed : tarea.completed;

        res.json(tarea);
    }

    eliminarTarea = (req, res) => {
        const { id } = req.body;
        const index = this.tareas.findIndex(t => t.id === parseInt(id));

        if (index === -1) {
            return res.status(404).json({ msg: 'Tarea no encontrada' });
        }

        this.tareas.splice(index, 1);
        res.status(200).json({ msg: 'Tarea eliminada correctamente.' });
    }
}

module.exports = new TareasController();
