import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { MyAccordionProps, MyAccordionState, MyAccordionMethods } from './defines';

class MyAccordion extends Component< MyAccordionProps, MyAccordionState > {
  public static componentName = 'my-accordion';
  public static attributes = [];
  
  protected readonly defaultProps: MyAccordionProps = {};
   
  protected readonly defaultState: MyAccordionState = {};

  public methods: MyAccordionMethods = {};

  public render(): HTMLFragment {
    return template( { ...this.props, ...this.state, ...this.methods });
  }
}

export default MyAccordion;
