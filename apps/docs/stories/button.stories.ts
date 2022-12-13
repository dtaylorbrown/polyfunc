import { html } from 'lit-html';
import '@polyfunc/ui'

export default {
  title: 'Button',
};

export const Primary = () =>
  html`
    <pf-button label="click me" />
  `;