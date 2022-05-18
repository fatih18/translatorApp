import { RootState } from '../../store/types';
import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const selectSlice = (state: RootState) => state.app;

export const useDictionary = () =>
  useSelector(createSelector([selectSlice], (state) => state));
