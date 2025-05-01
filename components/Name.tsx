import React from 'react'
export interface HeaderProps{
  name: string,
  author: string,
}
const Name = ({name, author} :HeaderProps) => {
  return (
    <div className="middle">
      <p className="name">{name}</p>
      <p className="author">By {author}</p>
    </div>
  )
}

export default Name;