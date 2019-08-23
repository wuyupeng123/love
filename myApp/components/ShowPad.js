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
  Button,
  ART
} from "react-native";
import pxUtil from "../util/px2dp";

const px2dp = pxUtil.px2dp;
const {
  Shape,
  Surface,
  Group,
  Path
} = ART;
export default class ShowPad extends Component {
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
  }

  static defaultProps = {
    MousePostions: []
  }
  componentWillUpdate() {
    console.log(this.props.MousePostions)
  }
  render () {
    const path = new Path();
    for (let i = 0; i < this.props.MousePostions.length; i++) {
        let tempFistX = this.props.MousePostions[i].firstX
        let tempFistY = this.props.MousePostions[i].firstY
        let tempX = this.props.MousePostions[i].x
        let tempY = this.props.MousePostions[i].y
        if (i == 0) {
            path.moveTo(tempFistX, tempFistY)
            path.lineTo(tempX, tempY)
            path.close();
        } else {
            let tempFistX_1 = this.props.MousePostions[i-1].firstX

            if(tempFistX==tempFistX_1){
                let tempX_1 = this.props.MousePostions[i - 1].x
                let tempY_1 = this.props.MousePostions[i - 1].y
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
      <>
        <Surface 
          width={ px2dp(304) }
          height={px2dp(600)}
          style={{
            position: "absolute",
            left: px2dp(70),
            top: px2dp(300),
            backgroundColor: 'rgba(231, 203, 245, .5)'
        }}>
          <Group>
              <Shape d={path} stroke="#5DADE2" strokeWidth={1}/>
          </Group>
        </Surface>
      </>
    )
  }
}