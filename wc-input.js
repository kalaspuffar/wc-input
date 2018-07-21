import {LitElement, html} from '@polymer/lit-element';
/**
 * `wc-input`
 * Webcomponent input design around a new material style.
 *
 * @demo demo/index.html
 */
class WcInput extends LitElement {
  //static get template() {
  _render({label}) {
    return html`
      <style>
        :host {
          display: block;
        }

        input {
          position: relative;
          width: 100%;
          background: transparent;
          top: 16px;
          border:0;          
          font-size: 13pt;
          outline-width: 0;
          margin-top: 3px;
        }

        .box {
          background-color: #EEEEEE;
          height: 48px;
          cursor: text;
          border-bottom: 1px solid #888;
          padding: 5px 0 0 16px;
          border-top-right-radius: 5px;
          border-top-left-radius: 5px;
          transition: 
            border-bottom cubic-bezier(0.6, -0.28, 0.735, 0.045) 0.1s,          
            background-color cubic-bezier(0.6, -0.28, 0.735, 0.045) 0.1s;
        }

        .box-selected {
          background-color: #CFD8DC;
          border-bottom: 3px solid #9C27B0;
        }        

        label {
          position: relative;
          color: #9C27B0;
          top: -26px;
          transition: 
            top cubic-bezier(0.6, -0.28, 0.735, 0.045) 0.1s, 
            color cubic-bezier(0.6, -0.28, 0.735, 0.045) 0.1s, 
            font-size cubic-bezier(0.6, -0.28, 0.735, 0.045) 0.1s;
        }

        input:not(:focus) + label {
          position: relative;
          font-size: 16pt;
          top: -16px;
          color: #000;
        }
      </style>
      <div class="box">
        <input id="specificInputBox" aria-label="${label}" />  
        <label>${label}<label>
      </div>
    `;
  }
  static get properties() {
    return {
      label: {
        type: String,
        value: '',
      },
    };
  }

  ready() {
    super.ready();
    let inputEl = this._root.querySelector('input');
    let boxEl = this._root.querySelector('.box');

    inputEl.addEventListener('focus', e => {        
      boxEl.className = 'box box-selected';      
    });

    inputEl.addEventListener('blur', e => {
      boxEl.className = 'box';        
    });

    this.addEventListener('click', e => {
      inputEl.focus();
    });
  }
}

window.customElements.define('wc-input', WcInput);
