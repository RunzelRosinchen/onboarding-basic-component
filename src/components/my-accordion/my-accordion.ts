import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import {
	MyAccordionProps,
	MyAccordionState,
	MyAccordionMethods
} from './defines';

class MyAccordion extends Component<MyAccordionProps, MyAccordionState> {
	public static componentName = 'my-accordion';
	public static attributes = ['api'];
	private accordionContent = [{ headline: 'headline', content: 'content' }];

	protected readonly defaultProps: MyAccordionProps = {
		api: ''
	};

	protected readonly defaultState: MyAccordionState = {
		fetchedData: 'false'
	};

	public methods: MyAccordionMethods = {
		openAccordionItem: event => {
			event.target.classList.toggle('accordion__headline--active');
			let dropDown = event.target.nextElementSibling as HTMLElement;
			if (dropDown.style.maxHeight) {
				dropDown.style.maxHeight = null;
			} else {
				dropDown.style.maxHeight = dropDown.scrollHeight + 'px';
			}
			let btn = this.shadowRoot.querySelector('.accordion__closeOpenAll');
			let activePanels = this.shadowRoot.querySelectorAll(
				'.accordion__headline--active'
			);
			let allPanels = this.shadowRoot.querySelectorAll(
				'.accordion__headline'
			);
			if (activePanels.length === allPanels.length) {
				btn.innerHTML = '- Close all';
			} else if (activePanels.length === 0) {
				btn.innerHTML = '+ Open all';
			}
		},
		openCloseAllItems: event => {
			let btn = event.target;
			let dropDowns = this.shadowRoot.querySelectorAll(
				'.accordion__dropDown'
			);
			if (btn.innerHTML === '- Close all') {
				dropDowns.forEach(element => {
					let dropDown = element as HTMLElement;
					dropDown.previousElementSibling.classList.remove(
						'accordion__headline--active'
					);
					dropDown.style.maxHeight = null;
					btn.innerHTML = '+ Open all';
				});
			} else {
				dropDowns.forEach(element => {
					let dropDown = element as HTMLElement;
					dropDown.previousElementSibling.classList.add(
						'accordion__headline--active'
					);
					dropDown.style.maxHeight = dropDown.scrollHeight + 'px';
					btn.innerHTML = '- Close all';
				});
			}
		}
	};
	attributeChangedCallback(api, previous, current) {
		// Here, no props have changed yet
		// You can do any check you want on the "current" attribute
		super.attributeChangedCallback(api, previous, current);
		fetch(this.props.api)
			.then(response => response.json())
			.then(json => {
				json.quotes.map(item => {
					delete item._id;
					item.content = item.quoteText;
					delete item.quoteText;
					item.headline = item.quoteAuthor;
					delete item.quoteAuthor;
					if (item.headline === '') {
						item.headline = 'anonymous';
					}
				});
				this.accordionContent = json.quotes;
				this.setState({ fetchedData: true });
			});
	}
	connectedCallback() {
		window.addEventListener(
			'resize',
			(() => {
				let activeHeadlines = this.shadowRoot.querySelectorAll(
					'.accordion__headline--active'
				);
				activeHeadlines.forEach(element => {
					let dropDown = element.nextElementSibling as HTMLElement;
					dropDown.style.maxHeight = dropDown.scrollHeight + 'px';
				});
			}).bind(this)
		);
	}
	public render(): HTMLFragment {
		return template(
			{ ...this.props, ...this.state, ...this.methods },
			this.accordionContent
		);
	}
}

export default MyAccordion;
