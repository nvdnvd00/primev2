import { StyleSheet } from 'react-native';
export const API_METHOD = {
	GET: 'get',
	POST: 'post',
	PUT: 'put',
	PATCH: 'patch',
	DELETE: 'delete',
};

export const SCREEN_NAME = {
	EXAMPLE: 'Example',
	HOME: 'Home',
	LOGIN: 'Login',
};

export const appBorderWidth = StyleSheet.hairlineWidth * 3;

export const ORDER_TYPES = {
	USER_SCAN_QR: 1,
	USER_PICKUP: 2,
	STAFF_PICKUP: 3,
	STAFF_CREATE_INHOUSE: 4,
	USER_SCAN_PAY_NOW: 5,
	USER_SCAN_FOOD_COURT: 6,
	USER_SCAN_DINE_IN: 7,
	DELIVERY_ORDER: 10,
	GROUP_ORDER: 8,
	CATERING_ORDER: 11,
	CENTER_DELIVERY: 13,
	CENTER_HOTEL_DELIVERY: 14,
};
// order statuses
export const ORDER_STATUS = {
	CREATED: 1, // Only used for order
	PLACED: 2,
	IN_PROCESS: 3,
	COMPLETED: 4,
	SERVED: 5, // Only used for order item
	CLOSED_PAID: 6, // Only used for order
	CLOSED_NOT_PAID: 7, // Only used for order
	VOIDED: 8, // Only used for order item
	OUT_OF_STOCK: 9, // Only used for order item
	CANCELLED: 10, // Only used for order item
	PAYMENT_PENDING: 11, // Only used for order
};

export const DELIVERY_PARTNER_SERVICE = {
	SELF: 1,
	POSTMATES: 2,
	ROADIE: 3,
	DOORDASH: 4,
};

export const RESTAURANT_TYPES = {
	STANDARD: 1,
	FOODCOURT_MASTER: 2,
	FOODCOURT_CHILDREN: 3,
	FOOD_TRUCK: 4,
	HOTEL_CENTER: 5,
};

export const USER_ROLE = {
	VISITOR: 1,
	MERCHANT_OWNER: 2,
	RESTAURANT_MANAGER: 3,
	RESTAURANT_CHEF: 4,
	RESTAURANT_STAFF: 5,
	SALES_PERSON: 6,
	SUPER_ADMIN: 7,
	MERCHANT_FOODCOURT_OWNER: 8,
};
export const OVERALL_STATUS = {
	NORMAL: 1,
	ALMOST_OVERDUE: 2,
	OVERDUE: 3,
};
