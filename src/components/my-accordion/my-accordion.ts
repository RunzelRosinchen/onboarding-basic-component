import Component, {
	HTMLFragment,
	createRef,
	createRefCallback
} from '@biotope/element';
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
	private refs = {
		accordion: createRef<HTMLElement>(),
		toggleAllButton: createRef<HTMLElement>(),
		allPanels: createRefCallback(() =>
			this.shadowRoot.querySelectorAll('.accordion__panel')
		),
		activePanels: createRefCallback(() =>
			this.shadowRoot.querySelectorAll('.accordion__panel--active')
		)
	};

	protected readonly defaultProps: MyAccordionProps = {
		api: ''
	};

	protected readonly defaultState: MyAccordionState = {
		fetchedData: 'false'
	};

	public methods: MyAccordionMethods = {
		init: ()=> {
			window.addEventListener(
			'resize',
			(() => {
				this.refs.allPanels.current.forEach(element => {
					let dropDown = element.querySelector(
						'.accordion__dropDown'
					) as HTMLElement;
					dropDown.style.maxHeight = dropDown.scrollHeight + 'px';
				});
			}).bind(this)
		);},

		fetchData: ()=>{
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
		});},

		openAccordionItem: event => {
			event.target.parentElement.classList.toggle(
				'accordion__panel--active'
			);
			let dropDown = event.target.nextElementSibling as HTMLElement;
			if (dropDown.style.maxHeight) {
				dropDown.style.maxHeight = null;
			} else {
				dropDown.style.maxHeight = dropDown.scrollHeight + 'px';
			}
			this.methods.changeToggleAllButtonText();
		},
		
		toggleAllItems: (() => {
			this.refs.allPanels.current.forEach(element => {
				let panel = element as HTMLElement;
				let dropDown = panel.querySelector(
					'.accordion__dropDown'
				) as HTMLElement;
				if (this.refs.toggleAllButton.current.innerHTML === '- Close all') 
				{
					panel.classList.remove('accordion__panel--active');
					dropDown.style.maxHeight = null;
				} else {
					panel.classList.add('accordion__panel--active');
					dropDown.style.maxHeight = dropDown.scrollHeight + 'px';
				}
			});
			this.methods.changeToggleAllButtonText();
		}).bind(this),

		changeToggleAllButtonText: () => {
			if (this.refs.activePanels.current.length >= this.refs.allPanels.current.length / 2) 
			{
				this.refs.toggleAllButton.current.innerHTML = '- Close all';
			} else {
				this.refs.toggleAllButton.current.innerHTML = '+ Open all';
			}
		}
	};

	attributeChangedCallback(api, previous, current) {
		super.attributeChangedCallback(api, previous, current);
		this.methods.fetchData();
	}

	connectedCallback() {
		this.methods.init();
	}
	public render(): HTMLFragment {
		return template(
			{ ...this.props, ...this.state, ...this.methods },
			this.accordionContent,
			this.refs
		);
	}
}

export default MyAccordion;
