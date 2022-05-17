import React from 'react';

import { View, Text, Button } from 'react-native';

interface HeaderViewProps {
  title: string;
  onChange: () => void;
}

export const Header = (props: HeaderViewProps) => {
  const { title, onChange } = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: '600' }}> {title}</Text>
      <Button onPress={onChange} title="Change "></Button>
    </View>
  );
};
