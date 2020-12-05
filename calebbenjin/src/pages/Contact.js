import React from 'react'

const Contact = ({ title, subtitle, dark, id }) => {
  return (
    <section className={"section" + (dark ? " section-dark" : "")}>
      <h1>Hello from Contact Page</h1>
    </section>
  )
}

export default Contact
