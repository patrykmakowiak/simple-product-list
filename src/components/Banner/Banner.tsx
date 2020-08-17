import React from 'react';
import { useTranslation } from 'react-i18next';

import './Banner.scss';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className="banner">
      <h1>
        {t('Banner')}
      </h1>
    </div>
  );
};

export default Banner;
