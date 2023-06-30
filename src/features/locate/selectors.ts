import { RootState } from '../../store';
import Coordinates from './types/Coordinates';

export const selectLocateIP = (state: RootState): Coordinates => state.locate.coordinates;
