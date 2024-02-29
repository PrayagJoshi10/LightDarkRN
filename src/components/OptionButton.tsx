import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {
  title: string;
  onPress: () => void;
}

const OptionButton = ({title, onPress}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default OptionButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 20,
    backgroundColor: '#000000',
    borderRadius: 16,
  },
  text: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '500',
  },
});
