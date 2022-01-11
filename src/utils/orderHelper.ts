export const getCreatedName = (order: any) => {
	const { createdBy = {} } = order;
	const { firstName = '', lastName = '' } = createdBy;
	return [firstName, lastName].filter((i: string | null) => true).join(' ');
};
