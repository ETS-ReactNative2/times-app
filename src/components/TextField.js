import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { ColorsApp } from '../utils/app_properties';


const TextField = ({ txt_label, txt_placeholder, max_len, is_center=false }) => {
  return (
    <View style={styles.ctn_main}>
      <View style={[styles.ctn_lbl, is_center && {left: 15, right: 15}]}>
        <Text style={styles.lbl_input}>{txt_label}</Text>
      </View>

      <TextInput 
        autoCapitalize={"sentences"}
        autoCompleteType={"username"}
        placeholder={txt_placeholder}
        style={[styles.input, is_center && {textAlign: 'center'}]}
        autoCorrect={false}
        maxLength={max_len}
      />
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  ctn_main:{
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
    marginVertical: 5,
  },

  ctn_lbl:{
    position:'absolute',
    borderRadius: 50,
    backgroundColor: "#fff",
    paddingHorizontal: 5,
    zIndex: 1,
    justifyContent: 'center',
    left: 20
  },
  
  lbl_input:{
    color: ColorsApp.light_font,
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center'
  },

  input:{
    margin: 10,
    paddingHorizontal: 13,
    paddingTop: 13,
    paddingBottom: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: ColorsApp.border,
    color: ColorsApp.light_font,
    fontSize: 16,
  }

});
