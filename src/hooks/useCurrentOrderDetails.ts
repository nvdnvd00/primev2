import { useQuery } from '@redux-requests/react';
import { getInProgressOrderDetails } from './../store/apiActions/Order';

const useCurrentOrderDetails = () => {
	const { data = {}, loading }: any = useQuery({ type: getInProgressOrderDetails });
	return [data ?? {}, loading];
};

export default useCurrentOrderDetails;
