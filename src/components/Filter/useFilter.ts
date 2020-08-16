import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { activeFilter, deactiveFilter } from '../../store/actions/filter';
import { RootState } from '../../store/reducers';

const useFilter = () => {
  const dispatch = useDispatch();
  const { activeColors } = useSelector((state: RootState) => state.filter);
  const handleOnChangeFilter = useCallback(
    (name: string) => (e: any) => {
      if (e.target.checked) {
        dispatch(activeFilter(name));
      } else {
        dispatch(deactiveFilter(name));
      }
    },
    [dispatch],
  );

  return {
    handleOnChangeFilter,
    activeColors,
  };
};

export default useFilter;
