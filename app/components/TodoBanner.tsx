/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import ReactElement = __React.ReactElement;

export default class TodoBanner extends React.Component<any, any> {

    public render(): ReactElement<{}> {
    return (
            <h3>TODO</h3>
        );
    }
};
