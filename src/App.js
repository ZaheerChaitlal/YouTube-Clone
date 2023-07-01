import { Container } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import { Navigate, Routes, Route, useNavigate } from 'react-router-dom'
import './_app.scss'
import LoginScreen from './screens/loginScreen/LoginScreen'
import { useSelector } from 'react-redux'
import WatchScreen from './screens/watchScreen/WatchScreen'

const Layout = ({children})=>{
  const [sidebar, toggleSidebar] = useState(false)

  const handleToggleSidebar = ()=>toggleSidebar(value=>!value)
  return(
  <>
    <Header handleToggleSidebar={handleToggleSidebar}/>
    <div className='app__container'>
      <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
    <Container fluid className='app__main'>
      {children}
    </Container>
    </div>
  </>
  )
}

const App = () => {

  const {accessToken, loading} = useSelector(state=>state.auth)

  const history = useNavigate()

  useEffect(()=>{
    if(!loading && !accessToken){
      history('/auth')
    }
  }, [accessToken,loading,history])

  return<Routes>
    <Route path='/' element={
      <Layout>
        <HomeScreen/>
      </Layout>
    }/>
    <Route path='/auth' element={
      <LoginScreen/>
    }/>
    <Route path='/watch/:id' element={
      <Layout>
        <WatchScreen/>
      </Layout>
    }/>
    <Route path='/*' element={<Navigate to ='/'/>}/>
  </Routes>
}

export default App