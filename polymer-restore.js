import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `polymer-restore`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PolymerRestore extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        label.myLabel input[type="file"] {
          position:absolute;
          top: -1000px;
        }
        .myLabel {
          border: 2px solid #AAA;
          border-radius: 4px;
          padding: 2px 5px;
          margin: 2px;
          background: #DDD;
          display: inline-block;
        }
        .myLabel:hover {
            background: #CCC;
        }
        .myLabel:active {
            background: #CCF;
        }
        .myLabel :invalid + span {
            color: #A44;
        }
        .myLabel :valid + span {
            color: #4A4;
        }
      </style>
      <label class="myLabel">
        <input on-change="_restore" id="file" type="file" class="none" accept="[[accept]]" required/>
        <span>Restore Account</span>
      </label>
      <template is="dom-if" if="{{debug}}">
        <small>[[restoreData]]</small>
      </template>
    `;
  }
  static get properties() {
    return {
      accept: {
        type: String,
        value: '.keychain',
      },
      debug: {
        type: Boolean,
        value: false,
      },
      restoreData: {
        type: String,
        reflectToAttribute: true,
        notify: true,
      },
      error: {
        type: String,
        reflectToAttribute: true,
        notify: true,
      },
    };
  }

  _restore(event) {
    event.stopPropagation();
    event.preventDefault();
    this.filename = event.target.files[0].name;
    this.fileExtension = '.'+this.filename.split(".").slice(-1)[0] 
    if(this.fileExtension != this.accept) {
      return false
    }
    const file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
        this.restoreData = reader.result;
    };
    reader.onerror = (error) => {
        this.error = error;
    };
}
} window.customElements.define('polymer-restore', PolymerRestore);
