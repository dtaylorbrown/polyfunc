import { Button } from './button';

if (!customElements.get('pf-button')) {
  window.customElements.define('pf-button', Button);  
}