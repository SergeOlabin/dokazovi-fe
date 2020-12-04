import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BorderBottom from '../../../lib/components/Border';
import Carousel from '../../../lib/components/Carousel';
import LoadingInfo from '../../../lib/components/LoadingInfo';
import { PostCard } from '../../../lib/components/PostCard';
import { RootStateType } from '../../../store/rootReducer';
import {
  fetchImportantPosts,
  setImportantLoadingStatus,
} from '../store/mainSlice';

const ImportantContainer: React.FC = () => {
  const {
    importantPosts,
    meta: { loading },
  } = useSelector((state: RootStateType) => state.main.important);
  const dispatch = useDispatch();

  const dispatchFetchAction = () => {
    dispatch(setImportantLoadingStatus());
    dispatch(fetchImportantPosts());
  };

  useEffect(() => {
    dispatchFetchAction();
  }, []);

  return (
    <div>
      <Carousel>
        {importantPosts.map((post) => (
          <div key={post.title}>
            <PostCard post={post} />
          </div>
        ))}
      </Carousel>
      <Grid container direction="column" alignItems="center">
        <LoadingInfo loading={loading} />
      </Grid>
      <BorderBottom />
    </div>
  );
};

export default ImportantContainer;
