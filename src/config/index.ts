import AppInfo from './app.json';
import AppImages from './assets/images';

export const ENV: 'dev' | 'stag' | 'prod' = 'dev';
export const BASE_API = AppInfo.api.baseUrl[ENV];
export const API_VERSION = ENV === 'dev' ? `` : `_${AppInfo.api.version}`;

export { AppInfo, AppImages };
