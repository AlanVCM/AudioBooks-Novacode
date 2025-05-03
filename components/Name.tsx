import React from 'react'
interface NameProps{
    name: string,
    author: string,
}
const Name = ({name, author}:NameProps) => {
  return (
    <div>
        <h3>{name}</h3>
        <p>By {author}</p>
        </div>
  )
}

export default Name