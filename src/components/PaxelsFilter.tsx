import React, { useState } from 'react';
import { useStyles } from '../styles';
import { useAppDispatch } from '../app/hooks';
import { filterBy } from '../features/favorites/favoritesSlice';

export const PaxelsFilter: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const handleSelectOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    if (value === 'Group by Author') {
      dispatch(filterBy({ sortBy: 'photographer' }));
    } else if (value === 'All Photos') {
      dispatch(filterBy({ sortBy: 'All' }));
    }
    setSelectedOption(value);
  };

  return (
    <div className={classes.filterContainer}>
      <div className={classes.dropdown}>
        <select
          className={classes.dropdownSelect}
          value={selectedOption}
          onChange={handleSelectOption}
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="All Photos">All Photos</option>
          <option value="Group by Author">Group by Author</option>
        </select>
      </div>
    </div>
  );
};
