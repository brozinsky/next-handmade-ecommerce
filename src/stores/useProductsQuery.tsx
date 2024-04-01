import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../sanity/sanity-utils';

export default function useProductsQuery(isEnabled: boolean = true) {
  const {
    data: products,
    isLoading: isLoadingProducts,
    error: errorProducts,
    isError: isErrorProducts,
    refetch: refetchProducts,
    isRefetching: isRefetchingProducts,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(),
    enabled: isEnabled,
  });

  return {
    products,
    isLoadingProducts,
    isErrorProducts,
    errorProducts,
    refetchProducts,
    isRefetchingProducts,
  };
}
