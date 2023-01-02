import React from 'react'
import { createCompany, createUser } from '../../firebase/utils'
import { signInAnon } from '../../firebase/utils'


export default function Home() {
  createCompany(3, "no user", "test2@company.com")
  // const anonUser = signInAnon()
  // anonUser.then(user => {
  //   createUser(user.uid, user.metadata.createdAt)
  //   console.log("added user", user)
  // })
  // 
  return (
    <div>
      Home test
    </div>
  )
}
