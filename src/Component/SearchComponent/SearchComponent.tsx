import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { FetchingNPMListAction } from "../../store/actions";
import { useSelector } from "react-redux";

const SearchComponent: React.FC<{}>  = (props : any) => {
    const [typedValue, setTypedValue] = useState<string | undefined>();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useDispatch();
    const { loading, data } = useSelector((state : any)=> state.repositoryReducer)

    useEffect(() => {
        if(inputRef.current) {
            inputRef.current.focus();
        }
    },[ inputRef ])

    const searchNPM = () => {
        dispatch(FetchingNPMListAction(typedValue));
    }

    return (
        <div>
            User Search
            <input ref={inputRef} value={typedValue} onChange={(e)=>setTypedValue(e.target.value)}/>
            <button onClick={searchNPM}>Click</button>
            {loading && <p>Loading....</p>}
            {!loading && data && data.length> 0 && data.map((item : any)=>{
                return (
                    <div>
                        <p>{item}</p>
                    </div>
                )
            })}
            {/* {user && 
                (<div>
                    Found User
                    <p>{user.user} + {user.age}</p>
                </div>)} */}
        </div>
    )
}

export default SearchComponent;