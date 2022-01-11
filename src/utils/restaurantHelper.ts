import { find } from 'lodash';
import countries from '~config/countries.json';
import { isEmptyObj } from './helper';
export const getRestaurantCurrency = (onRestaurant: any) => {
	const { country = {} }: any = onRestaurant;
	const phoneCodeList = countries;
	const defaultCountry: any = find(countries, (i: any) => i.isDefault) ?? countries[0];
	if (isEmptyObj(onRestaurant) || isEmptyObj(country)) return defaultCountry.currency;

	const c = find(
		phoneCodeList,
		(i: any, index: number) => i.id === country.id || i.phoneCode === country.phoneCode,
	);
	return !!c && !isEmptyObj(c.currency) && !!c.currency.id && !!c.currency.symbol
		? c.currency
		: defaultCountry.currency; // 0 must be us
};
