'use client';

// src/features/chapters/chaptersSlice.ts
import { useEffect } from 'react';
import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store';
import { Chapter } from '../../../types';


interface ChaptersState {
  data: Chapter[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ChaptersState = {
  data: [],
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
  },
});

export const { setLoading, setError, setChapters } = chaptersSlice.actions;

export default chaptersSlice.reducer;


