import React from 'react'
import { Outlet } from 'react-router'

export const AboutPage = () => {
  return (
    <div>
        <h2>About</h2>
        <hr />
        <Outlet />
    </div>
  )
}
