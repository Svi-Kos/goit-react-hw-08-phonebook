import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import * as actions from 'redux/actions';
import { getFilter } from 'redux/selectors';
import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <form className={s.filter}>
      {' '}
      <TextField
        label="Find contacts by name"
        type="text"
        name="name"
        value={value}
        onChange={event => dispatch(actions.changeFilter(event.target.value))}
      />
    </form>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};

export default Filter;
