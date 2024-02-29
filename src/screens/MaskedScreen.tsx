import {
  Image,
  PixelRatio,
  Pressable,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Button from '../components/Button';
import {NavigationProp} from '@react-navigation/native';
import {useAppProvider} from '../providers/AppProvider';
import {
  Canvas,
  Image as SkiaImage,
  SkImage,
  makeImageFromView,
  Circle,
  Group,
  Mask,
} from '@shopify/react-native-skia';
import {useSharedValue, withTiming} from 'react-native-reanimated';

interface Props {
  navigation: NavigationProp<any>;
}

const MaskedScreen = ({navigation}: Props) => {
  const {theme, setTheme} = useAppProvider();
  const ref = useRef(null);
  const pd = PixelRatio.get();
  const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = useWindowDimensions();
  const [overlay, setOverlay] = useState<SkImage | null>(null);
  const [isActive, setActive] = useState<boolean>(false);
  const system = useColorScheme();
  const styles = theme === 'light' ? lightStyles : darkStyles;
  const mask = useSharedValue(0);
  const wait = async (ms: number) =>
    new Promise(resolve => setTimeout(resolve, ms));
  const changeTheme = async (mode: string | null | undefined) => {
    if (mode === theme) {
      return;
    }
    setActive(true);
    const snapshot = await makeImageFromView(ref);
    setOverlay(snapshot);
    await wait(80);
    setTheme(mode);
    mask.value = withTiming(SCREEN_HEIGHT, {duration: 1000});
    await wait(1000);
    setOverlay(null);
    mask.value = 0;
    setActive(false);
  };
  return (
    <View style={styles.container} ref={ref} collapsable={false}>
      <Pressable
        style={styles.backContainer}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../assets/back.png')}
          style={styles.back}
          resizeMode="contain"
        />
      </Pressable>
      <View style={styles.circle} />
      <Text style={styles.title}>LIGHT / DARK theme demo</Text>
      <Text style={styles.description}>
        This app demonstrates the usage of light and dark mode in React Native
      </Text>

      <View style={styles.buttonsContainer}>
        <Button
          title="System"
          onPress={() => changeTheme(system)}
          theme={theme}
          disabled={isActive}
        />
        <Button
          title="Light"
          onPress={() => changeTheme('light')}
          theme={theme}
          disabled={isActive}
        />
        <Button
          title="Dark"
          onPress={() => changeTheme('dark')}
          theme={theme}
          disabled={isActive}
        />
      </View>

      {overlay && (
        <Canvas style={StyleSheet.absoluteFill} pointerEvents={'none'}>
          <Mask
            mode="luminance"
            mask={
              <Group>
                <Circle
                  cx={SCREEN_WIDTH / 2}
                  cy={SCREEN_HEIGHT - 160}
                  r={SCREEN_HEIGHT}
                  color="white"
                />
                <Circle
                  cx={SCREEN_WIDTH / 2}
                  cy={SCREEN_HEIGHT - 450}
                  r={mask}
                  color="black"
                />
              </Group>
            }>
            <SkiaImage
              image={overlay}
              x={0}
              y={0}
              width={overlay.width() / pd}
              height={overlay.height() / pd}
            />
            {/* <Rect
            x={0}
            y={0}
            width={overlay?.width() / pd}
            height={overlay?.height() / pd}
            color="lightblue"
          /> */}
          </Mask>
        </Canvas>
      )}
    </View>
  );
};

export default MaskedScreen;

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
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
    backgroundColor: '#f5aa42',
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

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  backContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  back: {
    height: 30,
    width: 30,
    tintColor: '#ffffff',
  },
  circle: {
    backgroundColor: '#ffffff',
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
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 30,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});
