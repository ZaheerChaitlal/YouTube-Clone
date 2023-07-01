import React, { useEffect } from 'react'

import './_loginScreen.scss'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/auth.action'
import { useNavigate } from 'react-router-dom'

const LoginScreen = () => {

   const dispatch = useDispatch()

   const accessToken = useSelector(state=>state.auth.accessToken)

   const handleLogin = ()=>{
      dispatch(login())
   }

   const history = useNavigate()

   useEffect(()=>{
      if(accessToken){
         history('/')
      }
   },[accessToken, history])

   return (
   <div className='login'>
      <div className='login__container'>
         <h2>Youtube Clone</h2>
         <img
            src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
            alt=''
         />
         <button onClick={handleLogin}>Login With google</button>
         <p>This Project is made using YOUTUBE DATA API</p>
      </div>
   </div>
   )
}

export default LoginScreen