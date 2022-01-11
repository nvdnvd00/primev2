import { useQuery } from '@redux-requests/react';
import { getInProgressOrders } from '~store/apiActions/Order';

const useCurrentOrders = () => {
	const { data = {}, loading }: any = useQuery({ type: getInProgressOrders });
	return [data?.orders ?? [], loading];
};

export default useCurrentOrders;
