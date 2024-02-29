import {Pressable, StyleSheet, View, useColorScheme} from 'react-native';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {useAppProvider} from '../providers/AppProvider';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import AnimatedButton from '../components/AnimatedButton';

interface Props {
  navigation: NavigationProp<any>;
}

const AnimatedScreen = ({navigation}: Props) => {
  const {theme, setTheme} = useAppProvider();
  const system = useColorScheme();

  const backgroundColorAnimation = useAnimatedStyle(() => {
    return {
      backgroundColor:
        theme === 'light' ? withTiming('#ffffff') : withTiming('#000000'),
    };
  });
  const textColorAnimation = useAnimatedStyle(() => {
    return {
      color: theme === 'light' ? withTiming('#000000') : withTiming('#ffffff'),
    };
  });
  const circleColorAnimation = useAnimatedStyle(() => {
    return {
      backgroundColor:
        theme === 'light' ? withTiming('#f5aa42') : withTiming('#ffffff'),
    };
  });
  const backArrowColorAnimation = useAnimatedStyle(() => {
    return {
      tintColor:
        theme === 'light' ? withTiming('#000000') : withTiming('#ffffff'),
    };
  });
  return (
    <Animated.View style={[styles.container, backgroundColorAnimation]}>
      <Pressable
        style={styles.backContainer}
        onPress={() => navigation.goBack()}>
        <Animated.Image
          source={require('../assets/back.png')}
          style={[styles.back, backArrowColorAnimation]}
          resizeMode="contain"
        />
      </Pressable>
      <Animated.View style={[styles.circle, circleColorAnimation]} />
      <Animated.Text style={[styles.title, textColorAnimation]}>
        LIGHT / DARK theme demo
      </Animated.Text>
      <Animated.Text style={[styles.description, textColorAnimation]}>
        This app demonstrates the usage of light and dark mode in React Native
      </Animated.Text>

      <View style={styles.buttonsContainer}>
        <AnimatedButton
          title="System"
          onPress={() => {
            setTheme(system);
          }}
        />
        <AnimatedButton
          title="Light"
          onPress={() => {
            setTheme('light');
          }}
        />
        <AnimatedButton
          title="Dark"
          onPress={() => {
            setTheme('dark');
          }}
        />
      </View>
    </Animated.View>
  );
};

export default AnimatedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  back: {
    height: 30,
    width: 30,
    tintColor: '#000000',
  },
  circle: {
    backgroundColor: 'yellow',
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 30,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  title: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 30,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});
