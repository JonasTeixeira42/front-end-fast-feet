import produce from 'immer';

const INITIAL_STATE = {};

export default function recipients(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@couriers/FETCH_COURIERS_SUCCESS': {
        Object.entries(draft).forEach(([key]) => {
          delete draft[key];
        });

        action.payload.couriers.forEach((item) => {
          draft[item.id] = { ...item, enabled: false };
        });
        break;
      }
      case '@couriers/CHANGE_ENABLE_FIELD': {
        const { index } = action.payload;
        draft[index].enabled = !draft[index].enabled;
        break;
      }
      default:
    }
  });
}
