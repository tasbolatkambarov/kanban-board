import React from 'react';
import Dropdown from '../components/DropDown'


export default function Header() {
  return (
    <header className='header'>
      <h1 className='headerTitle'>Awesome Kanban Board</h1>
        <Dropdown />
    </header>
  );
}