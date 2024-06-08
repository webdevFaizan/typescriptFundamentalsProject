import axios from "axios";
import { ActionType, ActionTypeArr } from "../actionType/actionType"
import { Dispatch } from "redux";

export const FetchingNPMListAction = (searchTerm : string | undefined) : any => {
    return async (dispatch: Dispatch<ActionType>) => {
            dispatch({
                type: ActionTypeArr.PENDING,
                payload: null
            })

        try {
            if(searchTerm && searchTerm.length > 0){
                const response  = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${searchTerm}`);
                console.log(response);
                const finalArr = response.data.objects.map((item : any) => {
                    return item.package.name;
                })
                dispatch({
                    type: ActionTypeArr.SUCCESS,
                    payload: finalArr
                })
                return response;
            }
        } catch (err) {
            dispatch({
                type: ActionTypeArr.ERROR,
                payload: "Some kind of error occured",
            });
            return ;
        }
    }
}
