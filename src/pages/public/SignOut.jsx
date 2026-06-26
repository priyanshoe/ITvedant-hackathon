import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Transition from '../../components/animations/Transition';

function SignOut() {
  const navigate = useNavigate();
  useEffect(()=>{
    localStorage.clear();
    navigate('/')
  },[])

  return (
    <Transition>

    <div>SignOut</div>
    </Transition>
  )
}

export default SignOut