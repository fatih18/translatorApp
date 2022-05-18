import React, { useState, useRef } from 'react';

import { View, ScrollView, Button } from 'react-native';
import { TextInput } from '../../../components/Input/TextInput';
import { ResultView } from './ResultView/ResultView';
import { Header } from './Header/Header';
import { useMutation, QueryClient } from 'react-query';
import axiosInstance from '../../../utils/axios';
import { useDispatch } from 'react-redux';
import { useAppSlice } from '../../../slice/translates';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NavigatorParamList } from '../../AppNavigator';
const queryClient = new QueryClient();

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
  const [changeMode, setChangeMode] = useState(mode);

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
          source: 'tr',
          target: 'en',
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

  // would be tr-eng eng-tr vice versa
  const handleChangeTranslationMode = () => {};

  const onSubmitText = () => {
    mutation.mutate();
    mutation.reset();
  };

  console.log('Input Text', inputText);

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

        <TextInput onChangeInput={setInputText} placeholder="Enter text..." />

        <View>
          <Button
            color={'red'}
            onPress={() => onSubmitText()}
            title="translate "
          ></Button>
        </View>

        <View style={{ padding: 10 }}>
          <ResultView result={resultText} />
        </View>
      </View>
    </ScrollView>
  );
};
