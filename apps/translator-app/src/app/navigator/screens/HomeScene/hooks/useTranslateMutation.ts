import { ITranslations } from 'apps/translator-app/src/app/types';
import { useMutation } from 'react-query';

export const useTranslateMutation = () => {
  const { error, data, mutate, reset } = useMutation(
    (text: ITranslations) => {
      return fetch('https://libretranslate.de/translate', {
        method: 'POST',
        body: JSON.stringify({
          q: '',
          source: 'en',
          target: 'tr',
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
      onError: (error) => {},
      onSettled: () => {},
      onSuccess: (data) => {},
    }
  );

  return {
    text: data,
    updateText: mutate,
    reset,
    error,
  };
};
