import { Children, createContext , useEffect, useState} from "react";
import { URL } from "../../url";

// Create a new context object with an initial value of an empty object
export const UserContext=createContext({})

// Define a component that provides the UserContext to its children
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
                throw new Error('Network response was not ok ' + res.statusText);
              }          
              const data = await res.json(); // Parse the JSON response
              setUser(data); // Use the response data to set user
            
        } catch (err) {
            console.log(err)
        }

    }

    return( 
      // Render the UserContext.Provider component with the user state and setUser function as the context value
      <UserContext.Provider value={{user,setUser}}>
       {children}
      </UserContext.Provider>
  )
}
