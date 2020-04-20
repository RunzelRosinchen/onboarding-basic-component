import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { HeadlineComponentProps, HeadlineComponentState } from './defines';

class HeadlineComponent extends Component< HeadlineComponentProps, HeadlineComponentState > {
  public static componentName = 'headline-component';
  public static attributes = [];
  
  protected readonly defaultProps: HeadlineComponentProps = {};
   
  protected readonly defaultState: HeadlineComponentState = {};

  public render(): HTMLFragment {
    return template( { ...this.props, ...this.state });
  }
}

export default HeadlineComponent;
