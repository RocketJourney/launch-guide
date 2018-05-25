import React from 'react'

export default ({ sectionTitle, children }) => (
  <div className="resource-title">
    <p className="resource-title-text">{sectionTitle}</p>
    <div className="resource-content">
      {children}
    </div>
    <style jsx>
      {
        `
          .resource-title {
            margin: 30px 0 0 0;
          }

          .digital-media-wrapper {
            text-align: center;
          }

          .resource-title-text {
            font-family: Montserrat;
            font-size: 19px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            color: #1a1a1a;
          }
        `
      }
    </style>
  </div>
)
