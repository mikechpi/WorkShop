"use client"
import { Children, ReactNode, createContext, useState } from "react"

interface AppNameContextInterface {
    appsName: string[],
    addAppName: (name:string) => void,
    removeAppName: (name:string) => void
}

const defautlValueAppsName: AppNameContextInterface = {
    appsName: [],
    addAppName: (name: string) => { console.log(name)},
    removeAppName: (name: string) => { console.log(name)}
}

export const AppsNameContext = createContext<AppNameContextInterface> (defautlValueAppsName)

type PropsType = {
    children: ReactNode
}

const AppsNameProvider = ({children}: PropsType) => {
    const [appsName, setAppsName] = useState<string[]>([])

    const addAppName = (name:string) => {
        let newList = [...appsName]

        newList.push(name)

        console.log(`ajout de ${name} a la liste d'application a installer`)
        setAppsName(newList)

    }

    const removeAppName = (name:string) => {
        let newList = appsName.filter(s => s != name)

        console.log(`supression de ${name} de la liste d'application a installer`)
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