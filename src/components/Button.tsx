import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {
  title: string;
  onPress: () => void;
  theme: string | null | undefined;
  disabled?: boolean;
}

const Button = ({title, onPress, theme, disabled}: Props) => {
  const styles = theme === 'light' ? lightStyles : darkStyles;
  return (
    <Pressable onPress={onPress} disabled={disabled}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const lightStyles = StyleSheet.create({
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

const darkStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  text: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
  },
});
