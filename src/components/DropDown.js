import React from 'react';
import userAvatar from '../img/user-avatar.svg';
import ArrowDownWhite from '../icons/arrow-down-white.svg';
import ArrowUpWhite from '../icons/arrow-top-white.svg';


export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false};
  };

  render() {
    const {clicked} = this.state;
    let arrowImg;

    if(clicked) {
      arrowImg = <img src={ArrowUpWhite} alt='Close dropdown'/>;
    } else {
      arrowImg = <img src={ArrowDownWhite} alt='Open dropdown'/>;
    }
      
    return (
      <>
        <button className='dropdownButton' onClick={() => this.setState({clicked: !clicked})}>
          <img src={userAvatar} alt='user avatar' className='avatar'/>
          {arrowImg}
        </button>
        <div className={`${clicked ? "dropdown" : "none"}`}>
          <ul className='dropdownMenu'>
            <li className='dropdownItem'><a className='dropdownLink' href='#profile'>Profile</a></li>
            <li className='dropdownItem'><a className='dropdownLink' href='#logout'>Log out</a></li>
          </ul>
        </div>
      </>  
    ); 
  }
}