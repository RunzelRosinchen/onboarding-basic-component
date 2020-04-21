import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { HeadlineComponentProps, HeadlineComponentState } from './defines';

export const template = (
	data: HeadlineComponentProps & HeadlineComponentState
): HTMLFragment => {
	return html`
		<h1 class="headline">
			Hello <slot name="first-name">First name</slot>!🐣
		</h1>
		${createStyle(styles)}
	`;
};
