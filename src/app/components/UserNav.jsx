"use client"

import React from 'react'
import UserInfo from './UserInfo'
import { useSession } from 'next-auth/react'

const UserNav = () => {
 const { data: session } = useSession()
 const user = session?.user

 return (
    <div>
      {user && <UserInfo url={user.user_metadata.avatar_url} email={user.email} />}
    </div>
 )
}

export default UserNav