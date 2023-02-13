import React from 'react';

type UseQueryReturn<T> = {
  data: T,
  loading: boolean,
  errorMessage: string | null,
  refetch: VoidFunction
};

// TODO: Ar verta, padaryti, kad nepaerdavus pradinės reikšmės, ji būtų undefined
// TODO: Jei taip, kaip?
const useQuery = <T, InitValue>(
  request: () => Promise<T>,
  initialValue: InitValue,
): UseQueryReturn<T | InitValue> => {
  const [data, setData] = React.useState<T | InitValue>(initialValue);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<null | string>(null);
  const refetchRef = React.useRef<VoidFunction>(() => {
    (async () => {
      try {
        setLoading(true);
        const fetchedData = await request();
        setData(fetchedData);
      } catch (err) {
        if (typeof err === 'string') {
          setErrorMessage(err);
        } else if (err instanceof Error) {
          setErrorMessage(err.message);
        } else {
          setErrorMessage('Error using useQuery');
        }
      } finally {
        setLoading(false);
      }
    })();
  });

  React.useEffect(refetchRef.current, []);

  return {
    data, loading, errorMessage, refetch: refetchRef.current,
  };
};

export default useQuery;
