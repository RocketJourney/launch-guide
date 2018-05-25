import React from 'react';

export default ({ id, thumbnail, launchButtonText, modalTitle }) => (
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
            ...
          </div>
        </div>
      </div>
    </div>

    <style jsx>
      {
        `
        .short-modal-button {
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
          margin: 0;
          color: #1a1a1a;
        }
        `
      }
    </style>
  </>
)
