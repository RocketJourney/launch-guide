import React from 'react'

export default (props) => (
  <div id="navbar">
    <nav style={{backgroundImage: 'url(/static/img/bg-patterns.svg)'}}>
      <img src="/static/img/rj-logo-square-svg.svg" alt="RJ"/>
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
          text-align: center;
        }

        img {
          border-radius: 8px;
          display: inline-block;
          height: 40px;
          width: 40px;
        }

        h1 {
          color: #1a1a1a;
          display: inline-block;
          font-family: Montserrat;
          font-size: 20px;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          margin: 0 0 0 11px;
          line-height: 1.05;
          letter-spacing: normal;
          vertical-align: middle;
        }
        `
      }
    </style>
  </div>
)
