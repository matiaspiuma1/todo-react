import { useState, useEffect } from 'react'

const Tabla = ({ items }) => {
	const [completar, setCompletar] = useState(false)
	return (
		<table>
			<thead>
				<tr>
					<th>Tareas</th>
				</tr>
			</thead>
			<tbody>
				{items.map((item) => (
					<tr key={item.name}>
						<td>
							{item.name}
							<input type='checkbox' checked={item.done} onChange={() => alert('Cambiando valor')} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default Tabla
