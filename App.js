/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, ToastAndroid} from 'react-native';
import Video from 'react-native-video';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      repeat:false,
      rate:1,
      volume:1,
      muted:false,
      resizeMode:'contain',
      duration:0.0,
      currentTime:0.0,
      paused:true,
      rateText:'1.0',
      pausedText:'Play',
      hideControls:false,
    };
  }

  onLoad = (data) => {
    this.setState({duration:data.duration});
  }

  onPress = (data) => {
    this.setState({currentTime:data.currentTime});
  }

  onEnd = () => {
    this.setState({pausedText:'Play', paused:true});
    this.video.seek(0);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback 
        style={styles.fullScreen}
        onPress = {() => this.setState({paused:!this.state.paused})}>
        <Video ref = {(ref) => {this.video = ref}}
        style={styles.fullScreen}
        source={require('./Videos/Product_ad.mp4')}
        repeat={this.state.repeat}
        rate={this.state.rate}
        volume={this.state.volume}
        muted={this.state.muted}
        resizeMode={this.state.resizeMode}
        paused={this.state.paused}
        onLoad={this.onLoad}
        onProgress={this.onProgress}
        onEnd={this.onEnd}/>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  fullScreen: {
    position: 'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
