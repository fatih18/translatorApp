import { Translation } from 'apps/translator-app/src/app/slice/translates/types';
import React, { useState, useRef, useEffect } from 'react';

import { View, Text } from 'react-native';

interface ListProps extends Translation {}

export const ListItem = (props: ListProps) => {
  return (
    <View style={{ height: 50 }}>
      <Text>{props.translation} </Text>
    </View>
  );
};
