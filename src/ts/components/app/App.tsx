import * as React from 'react';
import './App.scss';

import logo from '../../../assets/images/logo.svg';
import Todos from "../../../ts/containers/todos/Todos";
import Theme from "../../../ts/containers/themes/ThemeContainer";
import {connect} from "react-redux";

class App extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

    public render() {
        return (
            <div className={`App theme-${this.props.selectedTheme}`}>
                <header className="App App-header">
                    <img src={logo} className="App App-logo" alt="logo"/>
                    <h1 className="App App-title">Welcome to React</h1>
                </header>
                <Theme/>
                <Todos/>
            </div>

        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        selectedTheme: state.theme.selectedTheme
    }
};

export default connect(mapStateToProps,undefined)(App);
