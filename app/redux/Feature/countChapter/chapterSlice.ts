'use client';

// src/features/chapters/chaptersSlice.ts
import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store';
import { Chapter } from '../../../types';


interface ChaptersState {
  data: Chapter[];
  total: number,
  isLoading: boolean;
  error: string | null;
}

const initialState: ChaptersState = {
  data: [],
  total: 0,
  isLoading: false,
  error: null,
};

const chaptersSlice = createSlice({
  name: 'chapters',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setChapters: (state, action: PayloadAction<Chapter[]>) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload
    }
  },
});

export const { setLoading, setError, setChapters, setTotal } = chaptersSlice.actions;

export default chaptersSlice.reducer;


