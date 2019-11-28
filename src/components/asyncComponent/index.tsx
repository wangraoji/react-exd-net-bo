import React, { Component } from "react";

export default function asyncComponent(importComponent: any) {
    class AsyncComponent extends Component<any, any> {
        constructor(props: any) {
            super(props);

            this.state = {
                component: null
            };
        }

        async componentDidMount() {
            if (this.hasLoadedComponent()) {
                return;
            }
            const { default: component } = await importComponent();
            this.setState({
                component: component
            });
        }

        hasLoadedComponent() {
            return this.state.component !== null;
        }
        
        componentWillUnmount() {
            this.setState = () => {
                return
            }
        }

        render() {
            const C = this.state.component;

            return C ? <C {...this.props} /> : null;
        }
    }

    return AsyncComponent;
}