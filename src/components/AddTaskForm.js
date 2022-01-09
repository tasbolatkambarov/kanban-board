import React, {useState} from 'react';
import PlusIcon from '../icons/plus.svg';


export default function AddTaskForm(props) {
  const {formSubmit, isFormVisible, setFormVisible, handleAddNewClick} = props;
  const [values, setValues] = useState({
		title: '',
		description: ''
	});

  function handleChange(e) {
		const fieldName = e.target.name;
		setValues({...values, [fieldName]: e.target.value});
	};

  function handleSubmit(e) {
		e.preventDefault()
		if (values.title) {
			formSubmit(values.title, values.description);
		} 
    values.title = '';
    values.description = '';
    setFormVisible(false);
	}

  // const form = document.querySelector('.formAddNewTask');

  // document.onclick = function(e) {
  //   if (e.target.className !== 'formAddNewTask') {
  //     setFormVisible(false);
  //   };
  // };

  if(isFormVisible) {
    return (
      <form className='formAddNewTask'>
        <input
        className='input'
        id='taskTitle'
        name='title'
        type='text'
        placeholder='Enter task title'
        onChange={handleChange}
        value={values.title}
        />
			  <textarea
        className='textarea'
        id='taskDescription'
        name='description'
        placeholder='Enter task description'
        value={values.description}
        onChange={handleChange}
        />
        <button
        onClick={handleSubmit}
        className='button buttonSubmit'
        type='submit'>
          Submit
        </button>
      </form>
    );
  };
    return (
      <button className='button buttonAdd' onClick={handleAddNewClick}>
        <img src={PlusIcon} alt='plus icon' className='plusIcon'/>
				Add card
			</button>
    );
}