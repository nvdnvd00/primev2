import { useQuery } from '@redux-requests/react';
import { getCurrentRestaurant } from '~store/apiActions/Restaurant';

const useCurrentRestaurant = () => {
	const { data = {}, loading }: any = useQuery({ type: getCurrentRestaurant });
	return [data ?? {}, loading];
};

export default useCurrentRestaurant;
