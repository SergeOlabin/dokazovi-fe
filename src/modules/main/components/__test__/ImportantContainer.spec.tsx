import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../store/store';
import ImportantContainer from '../ImportantContainer';

describe('ImportantContainer', () => {
  it('carousel renders all posts from the redux store', async () => {
    const { container } = render(
      <Provider store={store}>
        <ImportantContainer />
      </Provider>,
    );

    // wait for the posts to fetch
    await waitFor(() => screen.getAllByTitle('doctor'));

    const renderedPosts = container.querySelectorAll(
      '.slick-slide:not(.slick-cloned)',
    );
    const postsInStore = store.getState().main.important;
    expect(renderedPosts.length).toEqual(postsInStore.length);
  });
});
