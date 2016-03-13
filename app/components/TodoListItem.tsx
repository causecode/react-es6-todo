/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import ReactElement = __React.ReactElement;

export default class TodoListItem extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render(): ReactElement<{}> {
        return (
            <li>{this.props.children}</li>
        );
    }
};
