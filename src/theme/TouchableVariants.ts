const base = { padding: 'm', borderRadius: 'l', backgroundColor: 'primary' };

export default {
	example: { backgroundColor: 'red', padding: 's', borderRadius: 'm' },
	primary: { ...base, backgroundColor: 'primary' },
	disabled: { ...base, backgroundColor: 'disabled' },
};
