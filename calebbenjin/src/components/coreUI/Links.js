import React from 'react';
import { Link } from 'react-router-dom';

const data = [
  {
    id: 1,
    text: "home",
    url: "/"
  },
  {
    id: 2,
    text: "resume",
    url: '/resume/'
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/"
  },
  {
    id: 4,
    text: "tutorials",
    url: '/tutorials/'
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/"
  }
]

export default ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      {data.map(link => {
        return (
          <li key={link.id}>
          <Link to={link.url}>{link.text}</Link>
        </li>
        )
      })}
    </ul>
  )
}