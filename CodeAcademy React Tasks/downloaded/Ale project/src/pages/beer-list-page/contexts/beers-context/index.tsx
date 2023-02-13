import React from 'react';
import useQuery from 'hooks/use-query';
import ApiService from 'services/api-service';
import BeersContextType from './beer-context-type';

const BeersContext = React.createContext({} as BeersContextType);

type BeersProviderProps = {
  children: React.ReactNode,
};

export const BeersProvider: React.FC<BeersProviderProps> = ({ children }) => {
  const [favoriteFilterOption, setFavoriteFilterOption] = React.useState<string>('all');
  const [firstLoadFinished, setFirstLoadFinished] = React.useState<boolean>(false);
  const {
    data: beers,
    loading: beersLoading,
    refetch: refetchBeers,
  } = useQuery(ApiService.fetchBeers, []);
  const {
    data: favoriteBeersRefs,
    loading: favoriteBeersRefsLoading,
    refetch: refetchFavoriteBeersRefs,
  } = useQuery(ApiService.fetchFavoredBeersRefs, []);

  const refetch = () => {
    refetchBeers();
    refetchFavoriteBeersRefs();
  };

  const favorBeer = async (beerId: number) => {
    const foundRef = favoriteBeersRefs.find((ref) => ref.beerId === beerId);

    if (foundRef !== undefined) {
      await ApiService.deleteFavoredBeerRef(foundRef.id);
    } else {
      await ApiService.createFavoredBeerRef(beerId);
    }
    refetch();
  };

  React.useEffect(() => {
    if (!firstLoadFinished && !beersLoading && !favoriteBeersRefsLoading) {
      setFirstLoadFinished(true);
    }
  }, [beersLoading, favoriteBeersRefsLoading]);

  const beerContextValue: BeersContextType = React.useMemo(() => ({
    beers,
    favoriteBeersRefs,
    favorBeer,
    firstLoadFinished,
    filters: {
      favorites: {
        options: ['favorites', 'not-favorites', 'all'],
        selected: favoriteFilterOption,
      },
    },
    setFavoriteFilterOption,
  }), [beers, favoriteBeersRefs, favorBeer, firstLoadFinished]);

  return (
    <BeersContext.Provider value={beerContextValue}>
      {children}
    </BeersContext.Provider>
  );
};

export const BeersConsumer = BeersContext.Consumer;

export default BeersContext;
