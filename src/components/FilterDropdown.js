// src/components/FilterDropdown.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const FilterDropdown = () => {
  const dispatch = useDispatch();
  const filters = ['all', 'active', 'completed'];
  const [dropdownOpen, setOpen] = React.useState(false);
  const [selectedFilter, setSelectedFilter] = React.useState('all');

  const toggle = () => setOpen(!dropdownOpen);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    dispatch(setFilter(filter));
  };

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Filter: {selectedFilter}</DropdownToggle>
      <DropdownMenu>
        {filters.map((filter) => (
          <DropdownItem key={filter} onClick={() => handleFilterChange(filter)}>
            {filter}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default FilterDropdown;
