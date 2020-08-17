import { ACTIVE_FILTER, DEACTIVE_FILTER } from './actionsType';

export const activeFilter = (name: string) => ({
  type: ACTIVE_FILTER,
  payload: { name },
});

export const deactiveFilter = (name: string) => ({
  type: DEACTIVE_FILTER,
  payload: { name },
});
