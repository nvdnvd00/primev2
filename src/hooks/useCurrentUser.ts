import { useQuery } from '@redux-requests/react';
import { loginTablet } from '~store/apiActions/Auth';

const useCurrentUser = () => {
	const { data = {}, loading }: any = useQuery({ type: loginTablet });
	return [data ?? {}, loading];
};

export default useCurrentUser;
