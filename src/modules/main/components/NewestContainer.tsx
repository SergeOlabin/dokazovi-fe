import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Grid,
  Button,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { RootStateType } from '../../../store/rootReducer';
import { fetchNewestPosts, IMainState } from '../store/mainSlice';
import { useStyles } from './styles/NewestContainer.style';
import BorderBottom from '../../../lib/components/Border';
import PostsList from '../../../lib/components/PostsList';
import { LoadingStatusEnum } from '../../../lib/types';

const NewestContainer: React.FC = () => {
  const classes = useStyles();
  const gridRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  const setNewest = () => dispatch(fetchNewestPosts());

  const {
    newestPosts,
    meta: { isLastPage, loading },
  } = useSelector<RootStateType, IMainState['newest']>((state) => {
    return state.main.newest;
  });

  useEffect(() => {
    setNewest();
  }, []);

  const renderLoading = () =>
    loading === LoadingStatusEnum.pending ? <CircularProgress /> : null;

  const renderError = (errorMsg = 'Не вдалося завантажити більше матеріалів') =>
    loading === LoadingStatusEnum.failed ? <span>{errorMsg}</span> : null;

  const renderLoadControls = (
    lastPageMsg = 'Більше нових матеріалів немає',
  ): JSX.Element => {
    let control: JSX.Element = <></>;

    if (loading !== LoadingStatusEnum.pending) {
      control = (
        <Button
          variant="contained"
          onClick={() => {
            setNewest();
            scrollTo();
          }}
        >
          Більше матеріалів
        </Button>
      );
    }

    if (isLastPage) {
      control = <span>{lastPageMsg}</span>;
    }

    return control;
  };

  const scrollTo = () =>
    gridRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <Container>
        <Typography variant="h4">Найновіше</Typography>
        <Grid container spacing={2} direction="row" alignItems="center">
          <PostsList postsList={newestPosts} />
        </Grid>
        <Grid container direction="column" alignItems="center">
          {renderLoading()}
          {renderError()}
        </Grid>

        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.showMore}
          ref={gridRef}
        >
          {renderLoadControls()}
        </Grid>
        <BorderBottom />
      </Container>
    </>
  );
};

export default NewestContainer;
