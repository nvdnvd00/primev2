import { useQuery } from '@redux-requests/react';
import { getCurrentRestaurant } from '~store/apiActions/Restaurant';

const useCurrentFloor = () => {
	const { data = {} }: any = useQuery({ type: getCurrentRestaurant });
	const activeFloor = data?.floors.find((f: any) => f.active);
	return [activeFloor ?? {}];
};

export default useCurrentFloor;
