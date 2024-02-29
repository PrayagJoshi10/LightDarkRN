import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import Button from '../components/Button';

const HomeScreen = () => {
  const [theme, setTheme] = useState<string | null | undefined>('light');
  const system = useColorScheme();
  const styles = theme === 'light' ? lightStyles : darkStyles;
  return (
    <View style={styles.container}>
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

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
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
