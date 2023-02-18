import { useState, useEffect } from 'react'

// Componentes

import Formulario from './components/Formulario'
import Tabla from './components/Tabla'

const App = () => {
	const [items, setItems] = useState([])

	// Esta funcion crea la tarea y ademas identifica que no este duplicada
	function crearTarea(nombreTarea) {
		if (!items.find((item) => item.name === nombreTarea)) {
			setItems([...items, { name: nombreTarea, done: false }])
		}
	}

	// Este useEffect recupera los datos del localStorage y ademas los parsea para que sean objetos
	useEffect(() => {
		if (localStorage) {
			setItems(JSON.parse(localStorage.getItem('tareas')))
		}
	}, [])

	// Este useEffect sirve para agregar las tareas al localStorage y ademas los convierte en string
	useEffect(() => {
		localStorage.setItem('tareas', JSON.stringify(items))
	}, [items])

	return (
		<div className='grid grid-flow-row auto-rows-max justify-items-center'>
			<Formulario crearTarea={crearTarea} />
			<Tabla items={items} />
		</div>
	)
}
export default App
