import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
  NativeModules
} from "react-native";
import hyExt from "hyext-rn-sdk";
import Background from "./components/Background.js";
import CanvasPad from "./components/CanvasPad.js";
import Ranking from "./components/Ranking.js";
import pxUtil from "./util/px2dp.js";
const px2dp = pxUtil.px2dp;
import request from "./util/request.js";

export default class bixinyi extends Component {
  constructor(initialProps) {
    super();
    this.state = {
      userInfo: {},
      isPadVisible: true,
      startTime: null,
      isStarted: false,
      canJoin: false,
      startShow: true,
      userInfo: {},
      rankData: [],
      anchorPath: [],
      myRank: null
    };
  }

  //获取rn页面高度
  _onLayout = e => {
    //获取屏幕高度
    const { width, height } = Dimensions.get("window");
    NativeModules.UIManager.measure(
      e.target,
      (x, y, width, RNViewHeight, pageX, pageY) => {
        this.setState({ height1: height - RNViewHeight });
      }
    );
  };

  componentWillMount() {}

  componentDidMount() {}

  render() {
    const { isPadVisible } = this.state;
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        onLayout={e => this._onLayout(e)}
      >
        <ScrollView style={styles.index}>
          <Background />
          <View
            style={{
              position: "absolute",
              width: "100%",
              // top: px2dp(0),
              // left: px2dp(0),
              height: px2dp(100)
            }}
          >
            <View style={{
              position: "absolute",
              top: px2dp(150),
              left: px2dp(230),
              height: px2dp(55),
              width: px2dp(170),
              paddingLeft: px2dp(55),
              paddingRight: px2dp(15),
              paddingTop: px2dp(5),
              lineHeight: px2dp(80),
              borderRadius: px2dp(30),
              // backgroundColor: "#E7CBF5",
              borderColor: "#808080",
              borderStyle: "solid",
              borderWidth: px2dp(2),
              zIndex: this.state.isPadVisible ? 1 : 0,
              backgroundColor: this.state.isPadVisible ? "#808080" : "rgba(0,0,0,0)",
            }}>
              <Text
                onPress={() => {
                  this.setState({
                    isPadVisible: true
                  });
                }}
                style={{
                  color: this.state.isPadVisible ? "#fff" : "#808080",
                }}
              >
                画板
              </Text>
            </View>
            <View style={{
              position: "absolute",
              top: px2dp(150),
              left: px2dp(355),
              height: px2dp(55),
              width: px2dp(170),
              paddingLeft: px2dp(45),
              paddingRight: px2dp(15),
              paddingTop: px2dp(5),
              lineHeight: px2dp(80),
              borderRadius: px2dp(30),
              borderColor: "#808080",
              borderStyle: "solid",
              borderWidth: px2dp(2),
              backgroundColor: this.state.isPadVisible ? "rgba(0,0,0,0)" : "#808080",
            }}>
              <Text
                onPress={() => {
                  this.setState({
                    isPadVisible: false
                  });
                }}
                style={{
                  color: this.state.isPadVisible ? "#808080" : "#fff",
                }}
              >
                默契榜
              </Text>
            </View>
          </View>
          {isPadVisible === true && <CanvasPad />}
          {isPadVisible === false && <Ranking />}
          {/* <CanvasPad /> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  index: {
    position: "relative",
    width: "100%",
    height: "100%"
  },
  pad: {
    position: "absolute",
    top: px2dp(150),
    left: px2dp(260),
    height: px2dp(55),
    width: px2dp(170),
    paddingLeft: px2dp(30),
    paddingRight: px2dp(15),
    paddingTop: px2dp(10),
    lineHeight: px2dp(80),
    borderRadius: px2dp(30),
    backgroundColor: "#E7CBF5",
  },
  rank: {
    position: "absolute",
    top: px2dp(150),
    left: px2dp(360),
    height: px2dp(55),
    width: px2dp(170),
    paddingLeft: px2dp(30),
    paddingRight: px2dp(15),
    paddingTop: px2dp(10),
    lineHeight: px2dp(80),
    borderRadius: px2dp(30),
    backgroundColor: "#F5D0CB",
  }
});
