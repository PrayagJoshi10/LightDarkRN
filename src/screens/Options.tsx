import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OptionButton from '../components/OptionButton';
import {NavigationProp} from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

const Options = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Theme transition.</Text>
      <View style={styles.buttonsContainer}>
        <OptionButton
          title="Styles change"
          onPress={() => navigation.navigate('Home')}
        />
        <OptionButton
          title="Animated"
          onPress={() => navigation.navigate('Animated')}
        />
        <OptionButton
          title="Masked"
          onPress={() => navigation.navigate('Masked')}
        />
      </View>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonsContainer: {
    gap: 15,
    alignItems: 'center',
  },
});
