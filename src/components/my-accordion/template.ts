import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { MyAccordionProps, MyAccordionState, MyAccordionMethods } from './defines';


export const template = ( data: MyAccordionProps & MyAccordionState & MyAccordionMethods ): HTMLFragment => {
  return html`
    <slot/>
    ${createStyle(styles)}
  `;
}
