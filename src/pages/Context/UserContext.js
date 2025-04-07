const { createContext, useContext, useState, useEffect } = require("react");

const UserContext = createContext();

export const UserProvider = ({children})=>{
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/api/user');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const result = await response.json();
            console.log(result);
          } catch (error) {
            setError(error.message); // Handle any error that occurs
          }
        };
    
        fetchData(); // Call the fetch function
      }, []);
    const [user,setUser] = useState({
        class:"",
        buleg:"",
        lastName:"",
        firstName: "",
    });
    
    return <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
}

export const useUser = () => useContext(UserContext);
