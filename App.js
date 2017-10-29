import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
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

        <View style={styles.titleContainer}>
          <Text style={{ fontSize: 24 }}>Revvista Nativva</Text>
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
  titleContainer: {
    flex: 1,
    backgroundColor: '#f8ecc2',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 6,
  },
});

export default App;
