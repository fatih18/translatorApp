import { AppState } from './types';
import { createSlice } from '../../utils/@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export const initialState: AppState = {
  dictionary: [],
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    saveTranslations(state, action: PayloadAction<{ translation: any }>) {
      state.dictionary = [...state.dictionary, action.payload];
    },
  },
});

export const { actions: appActions, reducer: appReducer } = slice;

export const useAppSlice = () => {
  return { actions: slice.actions };
};
