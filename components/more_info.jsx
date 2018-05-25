import React from 'react'

export default () => (
  <div id="more-info" className="container">
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-12">
        <p className="white-text">La mejor manera de conocer RocketJourney es usando la app.</p>
        <p className="secondary-text">
          Dile a tu Staff que la descargue entrando a: <a className="yellow-text" target="_blank" rel="noopener noreferrer" href="https://www.rocketjourney.com/">rocketjourney.com</a>
        </p>
      </div>
    </div>

    <style jsx>
      {
        `
        @media (max-width: 575.98px) {
          .white-text {
            margin-left: 30px!important;
            text-align: left!important;
          }

          .secondary-text {
            margin-left: 30px!important;
            text-align: left!important;
          }
        }

        @media (min-width: 576px) and (max-width: 767.98px) {
          .white-text {
            margin-left: 30px!important;
            text-align: left!important;
          }

          .secondary-tet {
            margin-left: 30px!important;
            text-align: left!important;
          }
        }

        #more-info {
          background-color: #2a2a2a;
          max-width: 1280px;
          padding: 30px 0;
          overflow-x: hidden;
          width: 100%;
        }

        .white-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 17px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          color: #fefefe;
          margin: 0 0 10px 0;
        }

        .secondary-text {
          font-family: Montserrat;
          font-size: 14px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          color: #d6d6d6;
          margin: 0;
        }

        .yellow-text {
          color: #ffcc00;
        }
        `
      }
    </style>
  </div>
)
