import { useDispatch} from 'react-redux';
import {AppDispatch} from '../entities/product/productApi/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
