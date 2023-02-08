import { useState, useEffect } from 'react'

import Formulario from './components/Formulario'

const App = () => {
	const [items, setItems] = useState([])

	function crearTarea(nombreTarea) {
		if (!items.find((item) => item.name === nombreTarea)) {
			setItems([...items, { name: nombreTarea, done: false }])
		}
	}

	useEffect(() => {
		if (localStorage) {
			setItems(JSON.parse(localStorage.getItem('tareas')))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('tareas', JSON.stringify(items))
	}, [items])

	return (
		<div className='grid grid-flow-row auto-rows-max justify-items-center'>
			<Formulario crearTarea={crearTarea} />
			<table>
				<thead>
					<tr>
						<th>Tareas</th>
					</tr>
				</thead>
				<tbody>
					{items.map((item, i) => (
						<tr key={i}>
							<td>{item.name}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
export default App
