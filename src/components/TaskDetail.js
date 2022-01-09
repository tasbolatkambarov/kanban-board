import React, {useState, useRef} from 'react';
import {useRouteMatch, Link} from 'react-router-dom';
import {formatDate} from '../utils';
import CrossIcon from '../icons/cross.svg';

export default function TaskDetail(props) {
	const match = useRouteMatch();
	const {taskId} = match.params;
	const {tasks, setTasks} = props;
	const task = tasks.find(task => task.id === taskId);
	const description = useRef();
	const [clicked, setClicked] = useState(false);

	function submitEditText() {
		setClicked(!clicked);
	}

	function editNewText() {
		const newDescription = description.current.value;
		const currentID = description.current.id;
		const updatedTasks = tasks.map(task => {
			if (task.id === currentID) {
				return {...task, description: newDescription}
			}
			return task
			})
		setTasks(updatedTasks);
	}

	function renderTaskDetails() {
		return (
			<>
				<div className='detailHeader'>
					<h2 className='detailTitle'>{task.title}</h2>
				</div>
				<p className='createdAt'>Created at: {formatDate(task.created)}</p>
				<p>Description:</p>
				<div className='edit'>
					{clicked ?
					<>
						<textarea className='editText' ref={description} onChange={editNewText} value={task.description} id={task.id}>{task.description}</textarea>
						<button type='submit' onClick={submitEditText} className='button buttonSubmit'>Submit</button>
					</>
					:
					<>
						<p>{task.description || 'This task has no description.'}</p>
						<button onClick={submitEditText} className='button buttonSubmit'>Edit text</button>
					</>}
				</div>
			</>
		)
	}

	const renderEmptyState = () => {
		return (
			<div className='emptyState'>
				<p>Task with ID <span className='taskNotFound'>{taskId}</span> was not found.</p>
			</div>
		)
	}

	return (
			<div className='detail'>
        <Link className='homeLink' to='/'>
				<img src={CrossIcon} alt='cross icon'/>
				</Link>
				{task ? renderTaskDetails() : renderEmptyState()}
			</div>
	)
}