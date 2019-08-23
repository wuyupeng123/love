/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-18 13:10:39
 * @LastEditTime: 2019-08-18 16:56:07
 * @LastEditors: Please set LastEditors
 */
/**
 * @author LH
 */
"use strict";

import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  Picker,
  PickerIOS,
  TouchableHighlight,
  Clipboard,
  Button
} from "react-native";
import pxUtil from "../util/px2dp";
const px2dp = pxUtil.px2dp;
import request from "../util/request";

export default class Background extends Component {
  constructor(initialProps) {
    super();
    this.state = {};
  }

  // methods
  submit(obj) {
    console.log(obj);
  }
  // hooks
  componentDidMount() {}

  render() {
    const {
        list,
        raceTime,
        choose,
        gameLaunch,
        localCountdownEnd,
        countdownEnd
      } = this.props,
      { content } = this.state;

    return (
      <View>
        <ImageBackground
          source={require("../assets/img/background00.jpg")}
          resizeMode="cover"
          style={styles.joinVote}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  joinVote: {
    // position: "absolute",
    // top: px2dp(0),
    // left: px2dp(0),
    paddingTop: 0,
    width: px2dp(750),
    height: px2dp(1100),
    zIndex: -1,
    flexDirection: "column",
    alignItems: "center"
  }
})
