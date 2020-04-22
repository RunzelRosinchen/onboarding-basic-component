import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import {
	MyAccordionProps,
	MyAccordionState,
	MyAccordionMethods
} from './defines';

export const template = (
	data: MyAccordionProps & MyAccordionState & MyAccordionMethods
): HTMLFragment => {
	let acc = [];
	for (let i = 0; i < data.number; i++) {
		acc.push(html`
			<h2 class="accordion__headline" onClick=${data.openAccordionItem}>
				<slot name="section-${i + 1}">Headline Section ${i + 1}</slot>
			</h2>
			<div class="accordion__dropDown">
				<p>
					<slot name="content-${i + 1}"
						>Content Section ${i + 1}</slot
					>
				</p>
			</div>
		`);
	}
	return html`
		<div class="accordion">
		<h3 onClick=${data.openCloseAllItems}>Open all</h3>
			${acc}
		</div>
		${createStyle(styles)}
	`;
};
