import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default class LongModal extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      value: 'Te invitamos a un reto de constancia. Ejercítate el mayor número de semanas seguidas que puedas.\n Descarga la app del reto en: http://www.rocketjourney.com/',
      copied: false,
    };
    this.selectText = this.selectText.bind(this);
  }

  selectText() {
    const id = `${this.props.id}-content`
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(document.getElementById(id));

    selection.removeAllRanges();
    selection.addRange(range);
  }

  render() {
    const { id, thumbnail, launchButtonText, modalTitle, modalExplanationText, file } = this.props
    return (
      <>
      <button type="button" className="btn long-modal-button" data-toggle="modal" data-target={`#${id}`}>
        <img src={thumbnail} alt="img" />
        <p className="long-modal-button-text">{launchButtonText}</p>
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
              <p className="explanation-text">{modalExplanationText}</p>
              {/* <div class="form-group mb-2">
              <label for="staticEmail2">Idioma</label>
              <select name="language" id="language">
              <option value="es">Español</option>
              <option value="en">Ingles</option>
            </select>
          </div> */}
          <a href={file} download role="button" aria-pressed="true" className="open-btn btn btn-primary d-md-none d-lg-none d-xl-none">Abrir imagen</a>
          <a href={file} download role="button" aria-pressed="true" className="open-btn btn btn-primary d-sm-none d-md-block d-lg-block d-xl-block d-sm-none d-none">Descargar imagen</a>
          <p className="guide-text">Ejemplo de Texto</p>
          <p id={`${id}-content`} className="guide-text-content">
            Te invitamos a un reto de constancia. Ejercítate el mayor número de semanas seguidas que puedas.
            <br />
            <br />
            Descarga la app del reto en: http://www.rocketjourney.com/
          </p>

          <span onClick={this.selectText} className="copy-text" role="button">
            Puedes copiar y pegar el texto
          </span>
        </div>
      </div>
    </div>
  </div>

  <style jsx>
    {
      `
      .copy-text {
        display: block;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        margin-top: 5px;
        margin-bottom: 20px;
        letter-spacing: normal;
        text-align: center;
        color: #c2c2c2;
      }

      .guide-text-content {
        max-width: 281px;
        width: 100%;
        border-radius: 14px;
        background-color: #f0f0f0;
        padding: 8px;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: left;
        margin: 0 auto
        color: #3b3b3b;
      }

      .guide-text {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        margin: 20px 0;
        text-align: left;
        color: #a5a5a5;
      }

      .open-btn {
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
        margin-bottom: 20px;
      }

      .long-modal-button {
        padding: 0;
        margin: 0 5px;
        background: none;
      }

      .explanation-text {
        font-family: Montserrat;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: left;
        color: #1c1c1c;
      }

      .modal-title {
        font-family: Montserrat;
        font-size: 20px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: left;
        color: #1a1a1a;
      }

      .modal-body {
        padding: 0 30px;
      }

      .modal-header {
        border: none;
        padding: 20px 30px;
      }

      .modal-dialog {
        max-width: 341px;
        margin: 0 auto;
      }

      .long-modal-button img {
        border-radius: 8px;
        height: 109.3px;
        width: 162px;
      }

      .long-modal-button-text {
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

      .modal-content {
        border-radius: 14px;
      }

      .close {
        padding: 0.9rem 1rem!important;
      }
      `
    }
  </style>
      </>
    );
  }
}
