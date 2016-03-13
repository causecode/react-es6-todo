/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import ReactElement = __React.ReactElement;
import EventHandler = __React.EventHandler;
import FormEvent = __React.FormEvent;


export default class TodoForm extends React.Component<any, any> {
    public state: any = {item: ''};
    private handleSubmit: EventHandler<FormEvent> = (e: any) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.item);
        this.setState({item: ''});
    };

    private onChange: EventHandler<FormEvent> = (e: any) => {
        this.setState({item: e.target.value});
    };

    public render(): ReactElement<{}> {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' ref='item' onChange={this.onChange} value={this.state.item}/>
                <input type='submit' value='Add'/>
            </form>
        );
    }
};
