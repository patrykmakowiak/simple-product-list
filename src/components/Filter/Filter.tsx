/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useCollapse from 'react-collapsed';
import { useMediaQuery } from 'react-responsive';
import cx from 'classnames';

import './Filter.scss';
import useFilter from './useFilter';
import { colors } from '../../constants/filters';

const Filter = () => {
  const { t } = useTranslation();
  const {
    handleOnChangeFilter,
  } = useFilter();
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [isExpanded, setExpanded] = useState(!isMobile);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  useEffect(() => {
    setExpanded(!isMobile);
  }, [isMobile]);

  return (
    <div className="filter">
      <div className="filter__header">
        <div>
          {t('Filter.Name')}
        </div>
        <button
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
          type="button"
          className={cx('filter__icon', {
            'filter__icon--hide': isExpanded,
          })}
          aria-label={isExpanded ? t('Filter.Hide') : t('Filter.Show')}
        />
      </div>
      <div {...getCollapseProps()}>
        <div className="filter__label">
          {t('Filter.Color')}
        </div>
        <ul className="filter__list">
          {colors.map(({
            id, name, color, nameColor,
          }) => (
            <li key={id} className="filter__list-item">
              <label htmlFor={name}>
                <input
                  type="checkbox"
                  id={name}
                  name={name}
                  onChange={handleOnChangeFilter(nameColor)}
                />
                <div className="filter__color" style={{ backgroundColor: color }} />
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
