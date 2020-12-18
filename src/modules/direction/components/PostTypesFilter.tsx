import React, { useState, useCallback } from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useForm, Controller } from 'react-hook-form';
import Checkbox from '@material-ui/core/Checkbox';
import { RootStateType } from '../../../store/rootReducer';
import { setPostFilters } from '../store/directionSlice';
import { FilterTypeEnum, IPostType } from '../../../lib/types';

export interface IPostTypeFilterProps {
  directionName: string;
}

interface IState {
  [key: string]: boolean;
}

export const PostTypeFilter: React.FC<IPostTypeFilterProps> = ({
  directionName,
}) => {
  const dispatch = useDispatch();
  const { control } = useForm();

  const postTypes = useSelector(
    (state: RootStateType) => state.properties.postTypes,
  );

  const initState = () =>
    postTypes.reduce((acc: IState, next: IPostType) => {
      return { ...acc, [next.id.toString()]: false };
    }, {});

  const [checkedTypes, setChecked] = useState(initState);

  const checkBoxes = postTypes?.map((type) => {
    const id = type.id.toString();
    return (
      <FormControlLabel
        key={type.id}
        control={
          <Controller
            as={Checkbox}
            control={control}
            onClick={(event) => handleClick(event)}
            name={type.name}
            id={id}
            color="primary"
            checked={checkedTypes[id]}
            defaultValue={false}
          />
        }
        label={type.name}
      />
    );
  });

  const handler = useCallback(
    _.debounce((checked: string[]) => {
      dispatch(
        setPostFilters({
          key: FilterTypeEnum.POST_TYPES,
          filters: {
            value: checked,
          },
          directionName,
        }),
      );
    }, 500),
    [],
  );

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkedType = {
      ...checkedTypes,
      [event.target.id]: event.target.checked,
    };
    setChecked(checkedType);

    const checked = Object.keys(checkedType).filter((key) => {
      return checkedType[key] === true;
    });
    handler(checked);
  };

  return <form>{checkBoxes}</form>;
};
