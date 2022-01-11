import { createSmartAction } from 'redux-smart-actions';
export const setFloor: any = createSmartAction((floorObject: any) => ({ floor: floorObject })); //action.floor
