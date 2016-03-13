/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactElement = __React.ReactElement;

import TodoApp from './components/TodoApp';

class Main extends React.Component<{}, {}> {
    public render(): ReactElement<{}> {
        return (
          <TodoApp />
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
