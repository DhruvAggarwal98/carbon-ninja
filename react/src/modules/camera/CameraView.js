// @flow
// import React from 'react';
// import {
//   View,
//   Text,
// } from 'react-native-ui-lib';

// type Props = {};

// export default (props: Props) => (
//   <View flex centerV centerH>
//     <Text>Camera View</Text>
//   </View>
// );

import React, { Component } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import { RNCamera } from 'react-native-camera'

class Camera extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          style={{ flex: 1, alignItems: 'center' }}
          ref={ref => {
            this.camera = ref
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  }
})

export default Camera
