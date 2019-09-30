import { Component } from 'react';

export class CustomComponent<P = {}, S = {}> extends Component<P, S> {
  // eslint-disable-next-line
  constructor(props: P) {
    super(props);
  }

  protected renderOnSet = (action: Function, ...args: any[]) => {
    action(args);
    this.forceUpdate();
  };
}
