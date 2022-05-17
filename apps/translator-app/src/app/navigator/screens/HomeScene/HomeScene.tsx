import React, { useState } from 'react';

import { View, Text, Button } from 'react-native';
import { TextInput } from '../../../components/Input/TextInput';
import { ResultView } from './ResultView/ResultView';
import { Header } from './Header/Header';

interface TranslationMode {
  mode: string;
}

export const HomeScene = (props: TranslationMode) => {
  const { mode } = props;

  const [text, setText] = useState('');
  const [changeMode, setChangeMode] = useState(mode);

  // would be tr-eng eng-tr vice versa
  const handleChangeTranslationMode = () => {};

  console.log('sex', text);

  return (
    <View
      style={{
        flex: 1,

        marginTop: 50,
      }}
    >
      <Header
        onChange={() => handleChangeTranslationMode()}
        title="Translator Application"
      />

      <TextInput onChangeInput={setText} placeholder="Enter text..." />

      <View style={{ padding: 10, top: 10 }}>
        <ResultView result="Translation..." />
      </View>
    </View>
  );
};
