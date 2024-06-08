import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { FetchingNPMListAction } from "../store/actions";

type UserType = {
    user: string,
    age: number,
};

// const userList: UserType[] = [
//     {user: 'Sarah', age: 20},
//     {user: 'Rahul', age: 40},
//     {user: 'Kamikaze', age: 23},
// ];

const UserSearch: React.FC<{}>  = (props : any) => {
    const [typedValue, setTypedValue] = useState<string | undefined>();
    const [user, setUser] = useState<undefined | UserType>();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if(inputRef.current) {
            inputRef.current.focus();
        }
    },[ inputRef ])

    useEffect(()=>{
        dispatch(FetchingNPMListAction('react'));
    },[])

    // const searchUser = () => {
    //     const foundUser : UserType | undefined = userList?.find( ( userItem ) => userItem.user === typedValue );
    //     setUser(foundUser);
    // }

    const searchNPM = () => {
        dispatch(FetchingNPMListAction(typedValue));
    }

    return (
        <div>
            User Search
            <input ref={inputRef} value={typedValue} onChange={(e)=>setTypedValue(e.target.value)}/>
            <button onClick={searchNPM}>Click</button>
            {/* {user && 
                (<div>
                    Found User
                    <p>{user.user} + {user.age}</p>
                </div>)} */}
        </div>
    )
}

export default UserSearch;