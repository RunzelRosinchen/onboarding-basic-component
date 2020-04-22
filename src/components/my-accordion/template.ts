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
	const accordionContent = JSON.parse(data.json);
	return html`
		<div class="accordion">
				<button
					class="accordion__closeOpenAll"
					onClick=${data.openCloseAllItems}
					>+ Open all</button
				>
			${accordionContent.map(panel => html`
			<section id=${panel.headline}>
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
			</div>
			</section>`)}
		</div>
		${createStyle(styles)}
	`;
};
