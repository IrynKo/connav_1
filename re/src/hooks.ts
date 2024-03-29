import {  TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { /*AppDispatch,*/ store } from './index'
import { RootState } from './redux/rootReduser'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

 // const dispatch = useThunkDispatch()