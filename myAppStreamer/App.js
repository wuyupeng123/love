import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import hyExt from 'hyliveext-rn-sdk';

export default class myAppStreamer extends Component {
    constructor(initialProps) {
        super();
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>Hello World!</Text>
            </View>
        )
    }
}