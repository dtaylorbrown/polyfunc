import { LitElement, html, css, property } from 'lit-element';
import { customElement } from 'lit/decorators.js';

// TODO listen to types
export type AS = 'button' | 'link'

@customElement('pf-button')
export class Button extends LitElement {
  // TODO properly override styles...
  static styles = css`
    .pf-button {
      display: inline-block;
      background: white;
      border: 2px solid rebeccapurple;
      color: rebeccapurple;
      padding: 10px 30px;
      cursor: pointer;
      font-size: 16px;
      line-height: 1;
    }
    .pf-button:hover {
      border: 4px solid rebeccapurple;
    }
    .pf-button:focus {
      border: 4px solid orange;
    }
  `;

  @property({ attribute: true, type: String })
  as = "button";

  protected render() {
    return this.as === 'link' ?
      html`
        <a class="pf-button">
          <slot />
        </a>
      `
    :
    html`
      <button type="button" class="pf-button">
        <slot />
      </button>
    `
  }
}
