import { TypedUseSelectorHook, useSelector as originalUseSelector } from 'react-redux';
import { RootState } from '../store/store';

const useSelector: TypedUseSelectorHook<RootState> = originalUseSelector;

export default useSelector;