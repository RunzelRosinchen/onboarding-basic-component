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
	return html`
		<div class="accordion">
			<h2 class="accordion__headline" onClick=${data.openAccordionItem}>
				<slot name="section-I">Headline Section I</slot>
			</h2>
			<div class="accordion__dropDown">
				<p><slot name="content-I">Content Section I</slot></p>
			</div>
			<h2 class="accordion__headline" onClick=${data.openAccordionItem}>
				<slot name="section-II">Headline Section I</slot>
			</h2>
			<div class="accordion__dropDown">
				<p><slot name="content-II">Content Section I</slot></p>
			</div>
			<h2 class="accordion__headline" onClick=${data.openAccordionItem}>
				<slot name="section-III">Headline Section I</slot>
			</h2>
			<div class="accordion__dropDown">
				<p><slot name="content-III">Content Section I</slot></p>
			</div>
		</div>
		${createStyle(styles)}
	`;
};
