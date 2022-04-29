import React from 'react'

export default function UserData({firstName, lastName, email}) {
  return (
    <div>
        <h1>First name: {firstName} </h1>
        <h1>Last name: {lastName} </h1>
        <h1>Email: {email} </h1>
        <hr />
    </div>
  )
}
