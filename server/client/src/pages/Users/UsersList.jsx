import React from 'react'
import { useSelector } from 'react-redux'

import User from './User'

const UsersList = () => {

const users = useSelector((state=> state.usersReducer)) //we wiil write an action first get the user data from the database then will we put in the redux by inside the reducers.
//   console.log(users)
 return (
    <div className='userlist-container'>
    {
        users.map((user)=>(
            <User user={user}  key={user?._id} />
        ))
    }
    </div>
  )
}

export default UsersList