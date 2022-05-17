import React from 'react';

import { View, Text } from 'react-native';

interface ResultViewProps {
  result: string;
}

export const ResultView = (props: ResultViewProps) => {
  const { result } = props;

  return (
    <View
      style={{
        height: 200,
        padding: 20,
        paddingTop: 20,

        backgroundColor: 'lightgray',
        borderRadius: 10,
      }}
    >
      <Text style={{ fontSize: 18 }}>{result}</Text>
    </View>
  );
};
