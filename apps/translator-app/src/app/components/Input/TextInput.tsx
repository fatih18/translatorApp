import React, { useState } from 'react';
import { TextInput as Input, View, TextInputProps } from 'react-native';

interface Props extends TextInputProps {}

export const TextInput = (props: Props) => {
  return (
    <View style={{ padding: 10 }}>
      <Input
        {...props}
        multiline={true}
        placeholderTextColor="red"
        style={{
          height: 200,
          padding: 20,
          paddingTop: 20,
          fontSize: 18,
          backgroundColor: 'papayawhip',
          borderRadius: 10,
        }}
      />
    </View>
  );
};
