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
  ART,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  Picker,
  PickerIOS,
  TouchableHighlight,
  Clipboard,
  Button,
  PanResponder
} from "react-native";
import pxUtil from "../util/px2dp";
import ShowPad from './ShowPad.js'
const { px2dp, dp2px } = pxUtil;

import request from "../util/request";

const {
  Shape,
  Surface,
  Group,
  Path
} = ART;
export default class CanvasPad extends Component {
  constructor(initialProps) {
    super();
    this.state = {
      lastX: 0
    };
    this.MousePostion = {
        firstX:0, //起点 X 坐标
        firstY:0,// 起点 Y 坐标
        x: 0,   //经过路径的x坐标
        y: 0    //经过路径的y坐标
    }
    //path 全部路径数组
    this.MousePostions = []
  }
  static defaultProps = {
    
  }
  // methods
  submit(obj) {
    console.log(obj);
  }
  // hooks
  componentDidMount() {}
  componentWillMount() {
    this._panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => {
            return true;
        },
        onMoveShouldSetPanResponder: (evt, gestureState) => {
            return true;
        },
        onPanResponderGrant: (evt, gestureState) => {
            //手指按下时的画笔起点坐标
            this.tempfirstX = evt.nativeEvent.locationX
            this.tempFirstY = evt.nativeEvent.locationY
        },//激活时做的动作
        onPanResponderMove: (evt, gestureState) => {
            // console.log(this.MousePostions)
            //
            this.MousePostion = {
                firstX:this.tempfirstX,
                firstY:this.tempFirstY,
                x: this.tempfirstX + gestureState.dx,
                y: this.tempFirstY + gestureState.dy
            }
            this.MousePostions.push(this.MousePostion);

            //更新界面
            this.setState({
                lastX: this.MousePostions[0].x + gestureState.dx,
            })


        }, //移动时作出的动作

        onPanResponderRelease: (evt, gestureState) => {
        },///动作释放后做的动作

        onPanResponderTerminate: (evt, gestureState) => {
        },
    });

}
  render() {
    const path = new Path();
    for (let i = 0; i < this.MousePostions.length; i++) {
        let tempFistX = this.MousePostions[i].firstX
        let tempFistY = this.MousePostions[i].firstY
        let tempX = this.MousePostions[i].x
        let tempY = this.MousePostions[i].y
        if (i == 0) {
            path.moveTo(tempFistX, tempFistY)
            path.lineTo(tempX, tempY)
            path.close();
        } else {
            let tempFistX_1 = this.MousePostions[i-1].firstX

            if(tempFistX==tempFistX_1){
                let tempX_1 = this.MousePostions[i - 1].x
                let tempY_1 = this.MousePostions[i - 1].y
                path.moveTo(tempX_1, tempY_1)
                path.lineTo(tempX, tempY)
                path.close();
            }else {
                path.moveTo(tempFistX, tempFistY)
                path.lineTo(tempX, tempY)
                path.close();
            }
      }
    }
    return (
      <View style={{
        position: "absolute",
        width: '100%',
        // top: px2dp(0),
        // left: px2dp(0),
        height: px2dp(600)
      }}>
        <View  style={styles.canvasLeft}>
          <Text style={{top: px2dp(250),left: px2dp(160)}}>主播画板</Text>
          {/* <Surface 
            width={px2dp(304)}
            height={px2dp(600)}
            style={{
              position: "absolute",
              left: px2dp(70),
              top: px2dp(300),
              backgroundColor: 'rgba(231, 203, 245, .5)'
          }}>
             
          </Surface> */}
          <ShowPad
            MousePostions={this.MousePostions} />
        </View>
        <View  style={styles.canvasRight} {...this._panResponder.panHandlers}>
          <Text style={{top: px2dp(250),left: px2dp(450)}}>用户画板</Text>
          <Surface 
            width={px2dp(304)}
            height={px2dp(600)}
            style={{
              position: "absolute",
              left: px2dp(375),
              top: px2dp(300),
              backgroundColor: 'rgb(231, 203, 245)'
          }}>
            <Group>
                <Shape d={path} stroke="#5DADE2" strokeWidth={1}/>
            </Group>
          </Surface>
        </View>
        <View>
          <Text style={{
            position: "absolute",
            top: px2dp(950),
            left: px2dp(130),
            backgroundColor: "#E7CBF5",
            height: px2dp(100),
            paddingLeft: px2dp(40),
            paddingRight: px2dp(28),
            borderStyle: 'solid',
            borderWidth: px2dp(6),
            borderColor: '#000',
            borderRadius: px2dp(15),
          }}>再来一局</Text>
          <Text style={{
            position: "absolute",
            top: px2dp(950),
            left: px2dp(430),
            backgroundColor: "#F5D0CB",
            height: px2dp(100),
            paddingLeft: px2dp(40),
            paddingRight: px2dp(28),
            borderStyle: 'solid',
            borderWidth: px2dp(6),
            borderColor: '#000',
            borderRadius: px2dp(15),
          }}>确认提交</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  canvasLeft: {
    position: "absolute",
    // top: px2dp(300),
    // left: px2dp(160),
  },
  canvasRight: {
    position: "absolute",
    // top: px2dp(300),
    // left: px2dp(450),
  }
})
