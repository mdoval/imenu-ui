'use client'

import { createContext, useContext, useState } from "react";

export const AppContext = createContext({})

export default function AppProvider({children}) {
    const [mesa, setMesa] = useState({})

    return <AppContext.Provider value={mesa}>{children}</AppContext.Provider>
}