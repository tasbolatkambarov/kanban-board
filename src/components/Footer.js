import React from 'react';
import {LIST_TYPES} from '../config';


export default function Footer(props) {
  const {tasks} = props;
	const activeTasks = tasks.filter(task => task.status === LIST_TYPES.BACKLOG); // по ТЗ "Active tasks" - это задачи из бэклога
	const finishedTasks = tasks.filter(task => task.status === LIST_TYPES.FINISHED);

		return (
			<footer className='footer'>
				<div className='footerItem footerRight'>
					<div className='activeTasks'>Active tasks: {activeTasks.length}</div>
					<div>Finished tasks: {finishedTasks.length}</div>
				</div>
				<div className='footerItem'>Kanban board by Alisova Valeria, 2021</div>
			</footer>
		)

		// Вывод общего числа задач по каждой доске в отдельности.
		// return (
		// 	<footer className='footer'>
		// 		<div className='footerItem footerRight'>
		// 			{Object.values(LIST_TYPES).map(type => {
		// 				const listTasks = tasks.filter(task => task.status === type)
		// 				if (!listTasks.length) return null;
		// 				return (
		// 					<div className='activeTasks' key={LIST_TITLES[type]}>{LIST_TITLES[type]}: {listTasks.length}</div>
		// 				)
		// 			})}
		// 		</div>
		// 		<div className='footerItem'>Kanban board by Alisova Valeria, 2021</div>
		// 	</footer>
		// )
}