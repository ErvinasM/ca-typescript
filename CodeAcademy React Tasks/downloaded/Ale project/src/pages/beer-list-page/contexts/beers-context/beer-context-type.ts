import BeerModel from 'models/beer-model';
import FavoriteBeerRef from 'models/favorite-beer-ref';

type Filters = {
  favorites: {
    options: string[],
    selected: string
  }
};

type BeersContextType = {
  beers: BeerModel[],
  favoriteBeersRefs: FavoriteBeerRef[],
  favorBeer: (beerId: number) => Promise<void>
  firstLoadFinished: boolean,
  filters: Filters
  setFavoriteFilterOption: (value: string) => void,
};

export default BeersContextType;
