import React from 'react'

const Project = ({ name }) => {
  return (
    <li>
      <button
        type='button'
        className='btn btn-blank'
      >
        {name}
      </button>
    </li>
  )
}

export default Project
