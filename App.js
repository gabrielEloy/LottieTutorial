import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import like from './assets/like.json';

const App = () => {
  const progress = useRef(new Animated.Value(0)).current;
  const [hasLiked, setHasLiked] = useState(false);

  const handleLikeAnimation = () => {
    const newValue = hasLiked ? 0 : 1;

    Animated.timing(progress, {
      toValue: newValue,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    setHasLiked(!hasLiked);
  };

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={handleLikeAnimation} style={styles.opacity}>
        <LottieView progress={progress} source={like} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  opacity: {
    width: 200,
    height: 200,
  },
});

export default App;
