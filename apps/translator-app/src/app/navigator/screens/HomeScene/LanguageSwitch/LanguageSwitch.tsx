import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';

interface LanguageSwitch {
  mode: boolean;
  toggleSwitch: () => void;
}

export const LanguageSwitch = (props: LanguageSwitch) => {
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={props.mode ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={props.toggleSwitch}
        value={props.mode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
