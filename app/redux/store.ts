'use client';

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import chapterReducer from './Feature/countChapter/chapterSlice'

export const store = configureStore({
  reducer: {
    chapter: chapterReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
