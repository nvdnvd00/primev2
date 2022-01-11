import currencyJs from 'currency.js';
import queryString from 'query-string';
import Reactotron from 'reactotron-react-native';
// parse object to query url
export const setParamsUrl = (obj: any) => queryString.stringify(obj, { arrayFormat: 'comma' });

export const isUrl = (str: string) => {
	let pattern = new RegExp(
		'^(https?:\\/\\/)?' + // protocol
			'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
			'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
			'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
			'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
			'(\\#[-a-z\\d_]*)?$',
		'i',
	); // fragment locator
	return !!pattern.test(str);
};
export const rlog = Reactotron.log ?? console.log;

export const formatCurrency = (currency: any, value: string | number) => {
	const v = isNaN(+(value + '').replace(/[^0-9.]/g, '')) ? '0.00' : `${value} `;
	const { id, symbol } = currency;
	if (!!id && !!symbol) {
		return currencyJs(value, { symbol }).format();
	}
	return currencyJs(value, { symbol: '$' }).format();
};

export const isEmptyObj = (obj: any) => {
	return obj === null || obj === undefined || Object.keys(obj).length === 0;
};
export const isStringEmpty = (text: string) => {
	return text === undefined || text === null || text === '';
};
