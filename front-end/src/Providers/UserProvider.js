import React, { useState, useEffect, createContext } from "react";
import { auth } from "../Services/Firebase";

export const UserContext = createContext(null)

export default (props) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged(async(user) => {
            if(user) {
                console.log(user)
                const {email, displayName, photoURL} = user
                setUser({
                    email, 
                    displayName, 
                    photoURL
                })
            } else {
                setUser(null)
            }
        })
    }, []) 
    return (
      <div> 
          <UserContext.Provider value={user}>
            <div>{props.children}</div>
          </UserContext.Provider>
      </div>
    ) 
}