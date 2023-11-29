import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Avatar from './Avatar'


export default async function User() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const user = session?.user
  console.log(user.user_metadata.avatar_url);
  return <Avatar url = {user.user_metadata.avatar_url} email={user.email}/>
  
}

