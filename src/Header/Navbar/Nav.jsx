import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default function Nav() {
  return (
    <>
    <div className='navFlex'>
        <Link to={'/'} className='div'><div>Home</div></Link>
       <Link to={'/bollywood'} className='div'> <div>Bollywood</div></Link>
      <Link to={'/books'} className='div'>  <div>Books</div></Link>
      <Link to={'/hollywood'} className='div'>  <div>Hollywood</div></Link>
        <Link to={'/gardening'} className='div'><div>Gardening</div></Link>
        <Link to={'/food'} className='div'><div>Food</div></Link>
        </div>
        <hr/>
    </>
  )
}
