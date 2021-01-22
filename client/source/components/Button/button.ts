import { Component, PropsComponent } from '../../core/Component/index.js';
import template from './template.js';

import { joinClasses } from '../../utils/joinClasses.js';

export type Icons =
  | 'add-user'
  | 'add-file'
  | 'create-group'
  | 'add-photo'
  | 'location'
  | 'emoji'
  | 'send';

export interface PropsButton extends PropsComponent {
  text?: string;
  name?: string;
  type?: string;
  primary?: boolean;
  danger?: boolean;
  size?: 's';
  icon?: Icons;
}

export class Button extends Component<PropsButton> {
  constructor(props: PropsButton) {
    super(props);
  }

  public beforeCreateHandler() {}

  public createdHandler() {}

  public updatedHandler() {}

  public beforeUpdateHandler() {
    return true;
  }

  public getContext() {
    return {
      styleClasses: joinClasses([
        'button',
        this.props?.primary ? `button--primary` : '',
        this.props?.danger ? `button--danger` : '',
        this.props?.size ? `button--size-${this.props.size}` : '',
        this.props?.icon ? `button--icon button--icon-${this.props.icon}` : '',
      ]),
    };
  }

  public render() {
    return template;
  }
}