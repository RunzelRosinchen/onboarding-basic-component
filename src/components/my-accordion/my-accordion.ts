import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import {
	MyAccordionProps,
	MyAccordionState,
	MyAccordionMethods
} from './defines';

class MyAccordion extends Component<MyAccordionProps, MyAccordionState> {
	public static componentName = 'my-accordion';
	public static attributes = ['number', 'json'];

	protected readonly defaultProps: MyAccordionProps = {
		number: 2,
		json: ""
	};

	protected readonly defaultState: MyAccordionState = {};

	public methods: MyAccordionMethods = {
		openAccordionItem: event => {
			event.target.classList.toggle('accordion__headline--active');
			let dropDown = event.target.nextElementSibling as HTMLElement;
			
			if (dropDown.style.maxHeight) {
				dropDown.style.maxHeight = null;
			} else {
				dropDown.style.maxHeight = dropDown.scrollHeight + 'px';
			}
			let btn=this.shadowRoot.querySelector(".accordion__closeOpenAll");
			let activePanels = this.shadowRoot.querySelectorAll(".accordion__headline--active");
			if(activePanels.length===3) {
				btn.innerHTML = '-- Close all';
			}
			else if(activePanels.length===0) {
				btn.innerHTML = '+ Open all';
			}
			
		},
		openCloseAllItems: event => {
			let btn = event.target;
			let dropDowns = this.shadowRoot.querySelectorAll(
				'.accordion__dropDown'
			);
			if (btn.innerHTML === '-- Close all') {
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
					btn.innerHTML = '-- Close all';
				});
			}
		}
	};

	public render(): HTMLFragment {
		return template({ ...this.props, ...this.state, ...this.methods });
	}
}

export default MyAccordion;
