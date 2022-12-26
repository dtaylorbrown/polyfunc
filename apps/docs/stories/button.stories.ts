import { html } from 'lit-html';
import '@polyfunc/ui'

export default {
  title: 'Button',
};

export const Primary = () =>
  html`
    <div>
      <pf-button>default</pf-button>
    </div>
  `;

export const Link = () =>
  html`
    <div>
      <pf-button as="link">link</pf-button>
    </div>
  `;