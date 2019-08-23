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

export default class Ranking extends Component {
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
    return (
      <View 
      style={{ 
        position: "absolute",
        width: '100%',
        // top: px2dp(0),
        // left: px2dp(0),
        height: px2dp(100)
      }}
      >
        <View>
          <Text style={{
            position: "absolute",
            top: px2dp(250),
            left: px2dp(70)
          }}
          >名次</Text>
          <Text  style={{
            position: "absolute",
            top: px2dp(250),
            left: px2dp(350)
          }}>昵称</Text>
          <Text  style={{
            position: "absolute",
            top: px2dp(250),
            left: px2dp(580)
          }}>匹配度</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pad: {
    position: "absolute",
    top: px2dp(150),
    left: px2dp(260),
    height: px2dp(100)
  },
  rank: {
    position: "absolute",
    top: px2dp(150),
    left: px2dp(390),
    width: px2dp(100),
  }
})
