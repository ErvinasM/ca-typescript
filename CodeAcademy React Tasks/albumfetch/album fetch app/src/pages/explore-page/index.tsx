import React from 'react';
import classes from './index.module.scss';
import ExploreModel from '../../models/explore-model';
import ExploreCard from './explore-card';

const ExplorePage = () => {
  const [explore, setExplore] = React.useState<undefined | ExploreModel[]>();

  React.useEffect(() => {
    fetch('http://localhost:3000/blogs')
      .then((response) => response.json())
      .then((fetchedExplore) => {
        setExplore(fetchedExplore);
      });
  }, []);

  return (
    <div className={classes.bgdark}>
      {explore !== undefined && (
        <div className={classes.grid}>
          {explore.map((ninfo) => <ExploreCard key={ninfo.id} {...ninfo} />)}
        </div>
      )}

    </div>
  );
};

export default ExplorePage;
