import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { LoadingStatusEnum } from '../types';

export interface ILoadingInfoProps {
  loading: LoadingStatusEnum;
  errorMsg?: string;
}

const LoadingInfo: React.FC<ILoadingInfoProps> = ({
  loading,
  errorMsg = 'Не вдалося завантажити більше матеріалів',
}) => {
  const renderLoading = () =>
    loading === LoadingStatusEnum.pending ? <CircularProgress /> : null;

  const renderError = () =>
    loading === LoadingStatusEnum.failed ? <span>{errorMsg}</span> : null;

  return (
    <>
      {renderLoading()}
      {renderError()}
    </>
  );
};

export default LoadingInfo;
