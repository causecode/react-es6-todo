/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import TodoListItem from './TodoListItem';
import ReactElement = __React.ReactElement;

export default class TodoList extends React.Component<any, any> {
    private createItem: (itemText: string) => ReactElement<{}> =
        function (itemText: string): ReactElement<{}> {
            return ( <TodoListItem>{itemText}</TodoListItem> );
        };

    public render(): ReactElement<{}> {
        return (
            <ul>{this.props.items.map(this.createItem)}</ul>
        );
    }
};
