import React, {useState} from "react";

const Form = ({addTodo}) => {
	const [value, setValue] = useState('')
	const handleSubmit = (e) => {
		e.preventDefault()
		if (value.trim()) {
			addTodo(value)
			setValue('')
		}
	}
	return (
		<form onSubmit={handleSubmit}>
			<div className='input-field'>
				<label>Add your todo</label>
				<input
					type="text"
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
				<button onClick={handleSubmit} className='btn-floating'><i className='material-icons'>add</i></button>
			</div>
		</form>
	)
}
export default Form