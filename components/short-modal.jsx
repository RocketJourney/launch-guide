import React from 'react';

export default ({ id, thumbnail, file, launchButtonText, modalTitle, modalExplanationText }) => (
  <>
    <button type="button" className="btn short-modal-button" data-toggle="modal" data-target={`#${id}`}>
      <img src={thumbnail} alt="img" />
      <p className="short-modal-button-text">{launchButtonText}</p>
    </button>

    <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">{modalTitle}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p className="modal-body-title">
              {modalExplanationText}
            </p>
            <div className="mobile-text-indicator d-md-none d-lg-none d-xl-none">
              Entra a launch.rocketjourney.com desde una computadora de escritorio para descargar este item.
            </div>
            <a href={file} download role="button" aria-pressed="true" className="open-btn btn btn-primary d-sm-none d-md-block d-lg-block d-xl-block d-sm-none d-none">
              Descargar .ZIP
            </a>
          </div>
        </div>
      </div>
    </div>

    <style jsx>
      {
        `
        .mobile-text-indicator {
          border-radius: 8px;
          border: solid 1px #979797;
          font-family: Montserrat;
          padding: 10px;
          font-size: 14px;
          margin-bottom: 20px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: left;
          color: #7c7c7c;
        }

        .modal-body-title {
          font-family: Montserrat;
          font-size: 15px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: left;
          color: #1c1c1c;
        }

        .close {
          padding: 0.9rem 1rem!important;
        }

        .open-btn {
          display: block;
          border: none;
          background-color: #4a90e2!important;
          border-color: #4a90e2!important;
          max-width: 281px;
          width: 100%;
          font-family: Montserrat;
          font-size: 18px;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          color: #ffffff;
        }

        .short-modal-button {
          background: none;
          padding: 0;
          margin: 0 5px;
        }

        .short-modal-button img {
          border-radius: 8px;
          height: 105px;
          width: 105px;
        }

        .short-modal-button-text {
          font-family: Montserrat;
          font-size: 15px;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: left;
          margin: 8px 0 0 0;
          color: #1a1a1a;
        }

        .modal-header {
          padding-bottom: 10px;
        }
        `
      }
    </style>
  </>
)
