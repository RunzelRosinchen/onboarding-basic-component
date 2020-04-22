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
	const text = JSON.parse(data.json);
	return html`
		<div class="accordion">
				<span
					class="accordion__closeOpenAll"
					onClick=${data.openCloseAllItems}
					>+ Open all</span
				>
			${text.map(panel => html`
			<h2
				class="accordion__headline"
				onClick=${data.openAccordionItem}
			>
				${panel.headline}
			</h2>
			<div class="accordion__dropDown">
				<p>
					${panel.content}
				</p>
			</div>`)}
		</div>
		${createStyle(styles)}
	`;
};
