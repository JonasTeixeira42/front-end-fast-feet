import produce from 'immer';

const INITIAL_STATE = {};

export default function recipients(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@recipients/FETCH_RECIPIENTS_SUCCESS': {
        Object.entries(draft).forEach(([key]) => {
          delete draft[key];
        });

        action.payload.recipients.forEach((item) => {
          draft[item.id] = { ...item, enabled: false };
        });
        break;
      }
      case '@recipients/CHANGE_ENABLE_FIELD': {
        const { index } = action.payload;
        draft[index].enabled = !draft[index].enabled;
        break;
      }
      default:
    }
  });
}
