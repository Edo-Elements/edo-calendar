import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `edo-calendar`
 * old tokyo style calendar
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class EdoCalendar extends PolymerElement {
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
        value: 'edo-calendar',
      },
    };
  }
}

window.customElements.define('edo-calendar', EdoCalendar);
