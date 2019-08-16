import firebase from 'firebase';
import {firebaseConfig} from './app/settings'
import Main from './app/Main';
import React, {Component} from 'react';
import ReactNative from 'react-native';



export default class App extends Component {
    componentDidMount() {
        ReactNative.I18nManager.allowRTL(false);
    }

    render() {
        return <Main/>;
    }
}
