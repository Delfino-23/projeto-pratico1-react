import React, { useContext } from 'react'
import { userContext } from '../../contexts/userContext';

function Profile(){
    const {login} = useContext(userContext)

  return (
    <div>
        {login ? 'dados do usuário' : 'Faça seu login para ter acesso as informações'}
    </div>
  )
}

export default Profile;
