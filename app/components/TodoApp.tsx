/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import TodoBanner from './TodoBanner';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import ReactElement = __React.ReactElement;

export default class TodoApp extends React.Component<any, any> {
    public state: any = {items: []};

    public updateItems: any = (newItem: string) => {
        let allItems: Array<string> = this.state.items.concat([newItem]);
        this.setState({items: allItems});
    };

    public render(): ReactElement<{}> {
        return (<div>
                <TodoBanner />
                <TodoList items={this.state.items}/>
                <TodoForm onFormSubmit={this.updateItems}/>
            </div>
        );
    }
};

