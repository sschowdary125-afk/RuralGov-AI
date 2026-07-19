import { createContext, useState } from "react";


export const ApplicationContext = createContext();


export function ApplicationProvider({children}){


const [applicationData,setApplicationData]=useState(null);



return(

<ApplicationContext.Provider
value={{
applicationData,
setApplicationData
}}
>

{children}

</ApplicationContext.Provider>


);


}