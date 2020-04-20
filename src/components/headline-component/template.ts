import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { HeadlineComponentProps, HeadlineComponentState } from './defines';


export const template = ( data: HeadlineComponentProps & HeadlineComponentState ): HTMLFragment => {
  return html`
    <h1 class="headline">Hello Ivaylo!🐣</h1>
    ${createStyle(styles)}
  `;
}
