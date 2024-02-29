import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {useAppProvider} from '../providers/AppProvider';

interface Props {
  title: string;
  onPress: () => void;
}

const AnimatedButton = ({title, onPress}: Props) => {
  const {theme} = useAppProvider();
  const backgroundColorAnimation = useAnimatedStyle(() => {
    return {
      backgroundColor:
        theme === 'light' ? withTiming('#000000') : withTiming('#ffffff'),
    };
  });
  const textColorAnimation = useAnimatedStyle(() => {
    return {
      color: theme === 'light' ? withTiming('#ffffff') : withTiming('#000000'),
    };
  });
  return (
    <Pressable onPress={onPress}>
      <Animated.View style={[styles.container, backgroundColorAnimation]}>
        <Animated.Text style={[styles.text, textColorAnimation]}>
          {title}
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
};

export default AnimatedButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#000000',
    borderRadius: 8,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
});
