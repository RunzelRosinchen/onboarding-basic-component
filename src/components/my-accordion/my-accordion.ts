import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import {
	MyAccordionProps,
	MyAccordionState,
	MyAccordionMethods
} from './defines';

class MyAccordion extends Component<MyAccordionProps, MyAccordionState> {
	public static componentName = 'my-accordion';
	public static attributes = ['number'];

	protected readonly defaultProps: MyAccordionProps = {
		number: 2
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
    },
    openCloseAllItems: event => {
      let btn=event.target
      if (btn.innerHTML === "- Close all") {
        btn.innerHTML = "+ Open all";
      } else {
        btn.innerHTML = "- Close all";
      }
      let dropDowns=this.shadowRoot.querySelectorAll(".accordion__dropDown");
      dropDowns.forEach(element => {
        let dropDown=element as HTMLElement;
      if (dropDown.style.maxHeight) {
				dropDown.style.maxHeight = null;
			} else {
				dropDown.style.maxHeight = dropDown.scrollHeight + 'px';
			}
    });
    }
	};

	public render(): HTMLFragment {
		return template({ ...this.props, ...this.state, ...this.methods });
	}
}

export default MyAccordion;
