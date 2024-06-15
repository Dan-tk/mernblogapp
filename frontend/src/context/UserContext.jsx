import { Children, createContext , useEffect, useState} from "react";
import { URL } from "../../url";

export const UserContext=createContext({})

export function UserContextProvider({children}){
    const [user,setUser]=useState(null)

     //REFETCH USER so that you will not be logged out after refreshing
    useEffect(()=>{
      getUser()

    },[])

    const getUser=async()=>{
        try {
            const res = await fetch(URL + "/api/auth/refetch", {
                method: 'GET', // Specifies the HTTP method
                credentials: 'include', // This is equivalent to { withCredentials: true } in axios
              });
          
              if (!res.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
              }          
              const data = await res.json(); // Parse the JSON response
              setUser(data); // Use the response data to set user
            
        } catch (err) {
            console.log(err)
        }

    }

    return( 
      <UserContext.Provider value={{user,setUser}}>
       {children}
      </UserContext.Provider>
  )
}