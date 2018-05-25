import React from 'react'

export default (props) => (
  <div id="navbar">
    <nav style={{backgroundImage: 'url(/static/img/bg-patterns.svg)'}}>
      <img src={''} alt="RJ"/>
      <h1>Guía de Lanzamiento</h1>
    </nav>

    <style jsx>
      {
        `
        nav {
          background-position: center center;
          background-size: unset;
          padding: 0.9em;
          background-repeat: no-repeat;
          background-color: #eca939;
        }
        `
      }
    </style>
  </div>
)
