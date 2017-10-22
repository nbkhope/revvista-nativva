import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, backgroundColor: '#832a0d' }}>
          </View>
          <View style={{ flex: 1, backgroundColor: '#f4a460' }}>
          </View>
          <View style={{ flex: 1, backgroundColor: '#bc8f8f' }}>
          </View>
          <View style={{ flex: 1, backgroundColor: '#cd853f' }}>
          </View>
        </View>

        <View style={{ flex: 1, backgroundColor: 'red' }}>
        </View>

        <View style={{ flex: 6, backgroundColor: 'blue' }}>
        </View>

        <View style={{ flex: 7, backgroundColor: 'black' }}>
        </View>

        <View style={{ flex: 1, backgroundColor: 'white' }}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c19a6b',
    padding: 13,
    marginTop: Constants.statusBarHeight,
  },
});

export default App;
