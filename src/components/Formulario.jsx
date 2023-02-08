import { useState } from 'react'

const Formulario = ({ crearTarea }) => {
	const [tareas, setTareas] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		crearTarea(tareas)
		setTareas('')
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type='text' placeholder='Agregar tarea' onChange={(e) => setTareas(e.target.value)} value={tareas} className='border border-slate-600' />
				<button>Guardar Tarea</button>
			</form>
		</div>
	)
}

export default Formulario
