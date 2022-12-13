import { LitElement, html, css, property } from 'lit-element';

export class Button extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }
    button {
      border: 2px solid black;
      background-color: lightgray;
      padding: 8px;
      color: black;
      font-weight: 700;
    }
  `;

  @property({ attribute: "label", type: String })
  label = 'pf-default';

  clickEvent() {
    console.log('helloooo')
  }

  protected render() {
    return html`<button type="button" @click=${this.clickEvent}>${this.label}</button>`;
  }
}