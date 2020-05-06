import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import {
	MyAccordionProps,
	MyAccordionState,
	MyAccordionMethods
} from './defines';

export const template = (
	data: MyAccordionProps & MyAccordionState & MyAccordionMethods,
	accordionContent, refs
): HTMLFragment => {
	return html`
		<div ref=${refs.accordion} class="accordion">
			<button ref=${refs.toggleAllButton}
				class="accordion__toggleAllButton"
				onClick=${data.toggleAllItems}
			>
				+ Open all
			</button>

			${accordionContent.map(
				panel => html`
					<section class="accordion__panel" id=${panel.headline}>
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
					</section>
				`
			)}
		</div>
		${createStyle(styles)}
	`;
};
