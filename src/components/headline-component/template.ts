import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { HeadlineComponentProps, HeadlineComponentState } from './defines';

export const template = (
	data: HeadlineComponentProps & HeadlineComponentState
): HTMLFragment => {
	const text=JSON.parse(data.json) 
	return html`
		<h1 class="headline">
			Hello ${text[1].firstName}!🐣
		</h1>
		${createStyle(styles)}
	`;
};
