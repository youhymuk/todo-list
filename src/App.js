import React, {useEffect, useReducer} from 'react';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import reducer from "./reducer";

const App = () => {
	const [state, dispatch] = useReducer(reducer,
		JSON.parse(localStorage.getItem('todos')) || [])

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(state))
	}, [state])
	const addTodo = (todoTitle) => {
		dispatch({
			type: 'add',
			payload: todoTitle
		})
	}
	return <div className='container'>
		<h1>Todo app</h1>
		<Form addTodo={addTodo}/>
		<TodoList todos={state} dispatch={dispatch}/>
	</div>
}
export default App;
