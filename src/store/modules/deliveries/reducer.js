import produce from 'immer';

const INITIAL_STATE = {};

export default function deliveries(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@deliveries/FETCH_DELIVERIES_SUCCESS': {
        action.payload.deliveries.forEach((item) => {
          draft[item.id] = item;
        });
        break;
      }
      default:
    }
  });
}
