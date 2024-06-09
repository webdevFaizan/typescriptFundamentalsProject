  export interface StateInterface {
    error: string | null;
    loading: boolean;
    data: string[] | null;
  }
  
  export enum ActionTypeArr {
    PENDING = "sAearch_repositories_pending",
    SUCCESS = "search_repositories_success",
    ERROR = "search_repositories_error",
  }

  export type ActionType = ActionPending | ActionSuccess | ActionError;

  export interface ActionPending {
    type: ActionTypeArr.PENDING;
    payload: null;
  }
  
  export interface ActionSuccess {
    type: ActionTypeArr.SUCCESS;
    payload: string[];
  }
  
  export interface ActionError {
    type: ActionTypeArr.ERROR;
    payload: string;
  }