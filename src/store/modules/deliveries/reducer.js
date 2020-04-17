import produce from 'immer';

const INITIAL_STATE = {};

export default function deliveries(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@deliveries/FETCH_DELIVERIES_SUCCESS': {
        Object.entries(draft).forEach(([key]) => {
          delete draft[key];
        });

        action.payload.deliveries.forEach((item) => {
          draft[item.id] = { ...item, enabled: false };
        });
        break;
      }
      case '@deliveries/CHANGE_ENABLE_FIELD': {
        const { index } = action.payload;
        draft[index].enabled = !draft[index].enabled;
        break;
      }
      case '@deliveries/DELETE_DELIVERY_SUCCESS': {
        const { index } = action.payload;
        draft[index].status = 'CANCELADA';
        break;
      }
      default:
    }
  });
}
