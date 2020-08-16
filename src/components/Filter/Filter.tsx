import React from 'react';
import { useTranslation } from 'react-i18next';

import './Filter.scss';
import useFilter from './useFilter';
import { colors } from '../../constants/filters';

const Filter = () => {
  const { t } = useTranslation();
  const { handleOnChangeFilter } = useFilter();

  return (
    <div className="filter">
      <div className="filter-header">
        {t('Filter.Name')}
      </div>
      <div>
        <div className="filter-label">
          {t('Filter.Color')}
        </div>
        <ul className="filter-list">
          {colors.map(({
            id, name, color, nameColor,
          }) => (
            <li key={id} className="filter-list-item">
              <label htmlFor={name}>
                <input
                  type="checkbox"
                  id={name}
                  name={name}
                  onChange={handleOnChangeFilter(nameColor)}
                />
                <div className="filter-icon" style={{ backgroundColor: color }} />
                {name}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
