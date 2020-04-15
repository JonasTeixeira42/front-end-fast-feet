import produce from 'immer';

const INITIAL_STATE = {};

export default function deliveries(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@problems/FETCH_PROBLEMS_DELIVERIES_SUCCESS': {
        action.payload.problems.forEach((item) => {
          draft[item.id] = { ...item, enabled: false };
        });
        break;
      }
      case '@problems/CHANGE_ENABLE_FIELD': {
        const { index } = action.payload;
        draft[index].enabled = !draft[index].enabled;
        break;
      }
      default:
    }
  });
}
