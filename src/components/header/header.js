import React from 'react'
import "./_header.scss"

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch} from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'

const header = ({handleToggleSidebar}) => {
  return <>
    <div className='header'>
      <FaBars className='header__menu' size={26} onClick={()=>handleToggleSidebar()}/>
      <img src='http://pngimg.com/uploads/youtube/youtube_PNG2.png' alt='logo' className='header__logo'/>
      <form>
        <input type='text' placeholder='Search'/>
        <button type='submit'>
          <AiOutlineSearch size={22}/>
        </button>
      </form>
      <div className='header__icons'>
        <MdNotifications size={28}/>
        <MdApps size={28}/>
        <img src='https://th.bing.com/th/id/R.5666fc8daff895bb8fab250e7c8df316?rik=IHJXiWsrz%2f3Ddw&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon-bw%2favatar-icon-png-1.png&ehk=SPuGtGZnbYS10nm8XX9I%2fpbs9EjY8Z3KQKbDswyMVSw%3d&risl=&pid=ImgRaw&r=0' alt='avatar'/>
      </div>
    </div>
  </> 
}

export default header