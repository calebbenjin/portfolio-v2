import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div>
      <h1>Oops Wrong Page</h1>
      <Link to="/">back to home page</Link>
    </div>
  )
}

export default Error404
