import React, { useState, useRef } from 'react';

import { View, ScrollView, Button, Text } from 'react-native';
import { TextInput } from '../../../components/Input/TextInput';
import { ResultView } from './ResultView/ResultView';
import { Header } from './Header/Header';
import { useMutation, QueryClient } from 'react-query';

import { useDispatch } from 'react-redux';
import { useAppSlice } from '../../../slice/translates';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NavigatorParamList } from '../../AppNavigator';
import { LanguageSwitch } from './LanguageSwitch/LanguageSwitch';
import { TR } from '../../../components/icons/TR';
import { EN } from '../../../components/icons/EN';

interface TranslationMode {
  mode: string;
}

export const HomeScene = (props: TranslationMode) => {
  const { mode } = props;

  const inputRef = useRef();
  //
  const [inputText, setInputText] = useState('');
  const [resultText, setResultText] = useState();
  //
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<NavigatorParamList>>();

  const {
    actions: { saveTranslations },
  } = useAppSlice();

  const mutation = useMutation(
    () => {
      return fetch('https://libretranslate.de/translate', {
        method: 'POST',
        body: JSON.stringify({
          q: inputText,
          source: isEnabled ? 'tr' : 'en',
          target: isEnabled ? 'en' : 'tr',
          format: 'text',
        }),
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        return res.json();
      });
    },
    {
      onMutate: (text) => {
        console.log('Mutation started ', text);
      },
      onError: (error) => {
        console.log(error);
      },
      onSettled: () => {},
      onSuccess: (text) => {
        console.log('result from the other side', text);
        setResultText(text.translatedText);
        dispatch(saveTranslations(text.translatedText));
      },
    }
  );

  const onSubmitText = () => {
    mutation.mutate();
    mutation.reset();
  };

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          marginTop: 50,
        }}
      >
        <Header
          onChange={() => {
            navigation.navigate('historyScene');
          }}
          title="Translator App"
        />
        <View
          style={{
            marginHorizontal: 20,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
        >
          <View>
            <LanguageSwitch mode={isEnabled} toggleSwitch={toggleSwitch} />
          </View>
          <View>{isEnabled ? <TR /> : <EN />}</View>
        </View>

        <TextInput onChangeText={setInputText} placeholder="Enter text..." />

        <View>
          <Button onPress={() => onSubmitText()} title="translate "></Button>
        </View>

        <View style={{ padding: 10 }}>
          <ResultView result={resultText} />
        </View>
      </View>
    </ScrollView>
  );
};
