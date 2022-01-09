import React, {useRef} from 'react';
import PlusIcon from '../icons/plus.svg';

export default function ReplaceTaskForm(props) {
	const {tasks, replaceTasks, setTasks, isFormVisible, setFormVisible, handleAddNewClick, newStatus} = props;
	const id = useRef();
	
	function replaceTask() {
		const updatedTasks = tasks.map(task => {
		if (task.id === id.current.value) {
			return {...task, status: newStatus}
		}
		return task
		})

		const filteredTasks = tasks.filter(task => task.id !== id.current.value);
		const taskToAdd = updatedTasks.find(task => task.id === id.current.value);
		const newUpdatedTasks = [...filteredTasks, taskToAdd];

		setTasks(newUpdatedTasks);
		setFormVisible(!isFormVisible);
	}

	function disableButton() {
		let disabled = false;
		if(replaceTasks.length === 0) {
			disabled = true;
			return disabled
		}
		return disabled
	}

  if(isFormVisible) {
    return (
      <div>
		  <select ref={id} className='select'>
			  {replaceTasks.map(task => {
					return <option key={task.id} value={task.id}>{task.title}</option>
				})}
		  </select>
		  <button onClick={replaceTask} className='button buttonSubmit' type='submit'>Submit</button>
      </div>
    );
  };
  return (
    <button disabled={disableButton()} className='button buttonAdd' onClick={handleAddNewClick}>
      <img src={PlusIcon} alt='plus icon' className='plusIcon'/>
			Add card
		</button>
  );
};