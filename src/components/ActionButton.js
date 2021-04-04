// Librairies
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

// Main app properties
import { ColorsApp } from '../utils/app_properties'

const ActionButton = ({text, action}) => {
  return (
    <Pressable onPress={() => action()} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default ActionButton;

// Style Component
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 2,
    backgroundColor: ColorsApp.border,
    borderColor: ColorsApp.bg,
    borderRadius: 5,
    borderWidth: 1,
    minWidth: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  text: {
    // color: ColorsApp.border,
    color: ColorsApp.dark_font_2,

    textAlign: 'center',
    fontWeight:'bold',
  },
});

