"use client"
import { Children, ReactNode, createContext, useState } from "react"

export const AppsNameContext = createContext<{appsName: string[], addAppName: (name: string) => void, removeAppName: (name: string) => void} | null>(null)

type PropsType = {
    children: ReactNode
}

const AppsNameProvider = ({children}: PropsType) => {
    const [appsName, setAppsName] = useState<string[]>([])

    const addAppName = (name:string) => {
        let newList = appsName

        newList.push(name)
        setAppsName(newList)
    }

    const removeAppName = (name:string) => {
        let newList = appsName

        newList.filter(s => s != name)
        setAppsName(newList)
    }

    return (
        <AppsNameContext.Provider value={{
            appsName, addAppName, removeAppName
        }}>
            { children }
        </AppsNameContext.Provider>
    )
}

export default AppsNameProvider