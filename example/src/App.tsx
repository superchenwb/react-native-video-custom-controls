import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import VideoPlayer from 'react-native-video-custom-controls';

export default function App() {
  return (
    <VideoPlayer
      source={{ uri: 'https://www.runoob.com/try/demo_source/mov_bbb.mp4' }}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
