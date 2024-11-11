import React, { createContext } from "react"
import watchProducts from "../../Assets/watch";

export const WatchContext = createContext(null);

const WatchContextProvider = (props) => {
    const contextValue = {watchProducts};
    return(
        <WatchContext.Provider value={contextValue}>
            {props.children}
        </WatchContext.Provider>
    )
    
}
export default WatchContextProvider;