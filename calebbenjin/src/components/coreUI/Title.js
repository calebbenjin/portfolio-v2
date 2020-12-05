import React from 'react'

const Title = ({subTitle, Title}) => {
  return (
    <div className="title">
      <h5>{subTitle}</h5>
      <h3>{Title}</h3>
    </div>
  )
}

export default Title
