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
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'polymer-restore',
      },
    };
  }
}

window.customElements.define('polymer-restore', PolymerRestore);
