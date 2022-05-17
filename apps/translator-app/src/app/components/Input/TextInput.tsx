import React, { useState } from 'react';
import { TextInput as Input, View, TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  placeholder: string;
  onChangeInput: (text: string) => void;
}

export const TextInput = (props: Props) => {
  const { placeholder, onChangeInput } = props;

  return (
    <View style={{ padding: 10 }}>
      <Input
        onChangeText={onChangeInput}
        multiline={true}
        placeholderTextColor="red"
        placeholder={placeholder}
        style={{
          height: 200,
          padding: 20,
          paddingTop: 20,
          fontSize: 18,
          backgroundColor: 'skyblue',
          borderRadius: 10,
        }}
      />
    </View>
  );
};
