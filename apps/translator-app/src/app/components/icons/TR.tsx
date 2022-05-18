import React from 'react';
import { View, Text } from 'react-native';

export const TR = () => {
  return (
    <View
      style={{
        height: 40,
        width: 40,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: 'white', fontSize: 20, fontWeight: '900' }}>
        TR
      </Text>
    </View>
  );
};
