import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import AppInfo from './app.json';
import icoMoonConfig from './assets/icons/icomoon/selection.json';
import AppImages from './assets/images';

const AppIcons = createIconSetFromIcoMoon(icoMoonConfig);

export const ENV: 'dev' | 'stag' | 'prod' = 'dev';
export const BASE_API = AppInfo.api.baseUrl[ENV];
export const API_VERSION = ENV === 'dev' ? `` : `_${AppInfo.api.version}`;

export { AppInfo, AppImages, AppIcons };
