import { getUnixTime } from 'date-fns';
import { ORDER_TYPES } from './constants';
export const getCreatedName = (order: any) => {
	const { createdBy = {} } = order;
	const { firstName = '', lastName = '' } = createdBy;
	return [firstName, lastName].filter((i: string | null) => true).join(' ');
};

export const getOverDueTime = (order: any) => {
	const {
		pickUpTime = getUnixTime(new Date()),
		placedTime = getUnixTime(new Date()),
		deliveryTime = getUnixTime(new Date()),
		orderTypeId,
		restaurant = {},
	} = order;
	const { issueTimeAfterPlacingOrder = 0 } = restaurant;
	switch (orderTypeId) {
		case ORDER_TYPES.STAFF_PICKUP:
			return new Date((placedTime + issueTimeAfterPlacingOrder * 60) * 1000);
		case ORDER_TYPES.USER_PICKUP:
			return new Date(pickUpTime * 1000);
		case ORDER_TYPES.DELIVERY_ORDER:
			return new Date(deliveryTime * 1000);

		default:
			return new Date(placedTime * 1000);
	}
};
