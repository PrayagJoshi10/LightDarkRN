import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import {NavigationProp} from '@react-navigation/native';
import {useAppProvider} from '../providers/AppProvider';

interface Props {
  navigation: NavigationProp<any>;
}

const HomeScreen = ({navigation}: Props) => {
  const {theme, setTheme} = useAppProvider();
  const system = useColorScheme();
  const styles = theme === 'light' ? lightStyles : darkStyles;
  return (
    <View style={styles.container}>
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
          onPress={() => {
            setTheme(system);
          }}
          theme={theme}
        />
        <Button
          title="Light"
          onPress={() => {
            setTheme('light');
          }}
          theme={theme}
        />
        <Button
          title="Dark"
          onPress={() => {
            setTheme('dark');
          }}
          theme={theme}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

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
