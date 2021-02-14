import { Component, PropsComponent } from '../../../core/Component/index.js';
import template from './template.js';

import { ChatItem, PropsChatItem } from '../ChatItem/index.js';

export interface PropsChatList extends PropsComponent {
  chatItems: PropsChatItem[];
}

export class ChatList extends Component<PropsChatList> {
  constructor(props: PropsChatList) {
    super(props, {
      chatItems: props.chatItems.map((v) => new ChatItem(v)),
    });
  }
  public beforeCreateHandler() {}
  public createdHandler() {
    this.$element!.style.height = '100%';
  }
  public updatedHandler() {}
  public beforeUpdateHandler() {
    return true;
  }
  public beforeRemoveHandler() {}
  public getContext() {
    return {};
  }
  public render() {
    return template;
  }
}
