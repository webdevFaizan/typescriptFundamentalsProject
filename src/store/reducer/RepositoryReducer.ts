import { ActionType, ActionTypeArr, StateInterface } from "../actionType/actionType";

const initialState = {
  error: null,
  loading: false,
  data: null,
};

const Reducer = (
  state: StateInterface = initialState,
  action: ActionType
): StateInterface => {

  switch (action.type) {
    case ActionTypeArr.PENDING:
      return { ...state, error: null, loading: true, data: [] };
    case ActionTypeArr.SUCCESS:
      return { ...state, error: null, loading: false, data: action.payload };
    case ActionTypeArr.ERROR:
      return { ...state, error: action.payload, loading: false, data: [] };
    default:
      return { ...state };
  }
};

export default Reducer;
