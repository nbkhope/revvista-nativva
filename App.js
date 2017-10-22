import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, backgroundColor: '#832a0d' }}>
          </View>
          <View style={{ flex: 1, backgroundColor: '#832a0d' }}>
          </View>
          <View style={{ flex: 1, backgroundColor: '#832a0d' }}>
          </View>
          <View style={{ flex: 1, backgroundColor: '#832a0d' }}>
          </View>
        </View>

        <View style={{ flex: 1 }}>
        </View>

        <View style={{ flex: 1 }}>
        </View>

        <View style={{ flex: 1 }}>
        </View>

        <View style={{ flex: 1 }}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c19a6b',
    padding: 13
  },
});

export default App;
