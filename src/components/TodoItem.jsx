import React from "react";

const TodoItem = ({id, title, completed, dispatch}) => {
	const cls = ['todo']
	if (completed) {
		cls.push('checked')
	}
	return (
		<li className={cls.join(' ')}>
			<label>
				<input
					type="checkbox"
					checked={completed}
					onChange={() => dispatch({
						type: 'toggle',
						payload: id
					})
					}
				/>
				<span>{title}</span>
			</label>
			<button
				onClick={() => dispatch({
					type: 'remove',
					payload: id
				})}>
				<i className='material-icons text-red'>delete</i>
			</button>
		</li>
	)
}
export default TodoItem