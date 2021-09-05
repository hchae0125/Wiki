import * as React from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

interface IProps {
    children?: React.ReactNode;
}

export default class DefaultLayout extends React.Component<IProps, {}> {
    constructor (props) {
        super (props);
    }

    public render() {
        return <div id="userLayout" className="layout">
            <Header />
            <div className="container container-content">
                {this.props.children}
            </div>
            <Footer />
        </div>
    }
}