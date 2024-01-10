import fs from "fs"
const appDataJson = require("../data/yApp.json")
fs

interface AppInterface {
    name : string,
    logoUrl : string,
    categorie: string,
};


export const getAllApp = async () => {
    try {
        const apps = appDataJson.yApps.map((item: AppInterface) => {return {
                name: item.name,
                logoUrl: item.logoUrl,
                categorie: item.categorie,
            }
        });
        return apps;
    } catch {
        throw new Error()
    }
}

export const getOneApp = async (name: string) => {
    try {
        const apps = appDataJson.yApps.find((item: AppInterface) => {if (name == item.name) return {
                name: item.name,
                logoUrl: item.logoUrl,
                categorie: item.categorie
            }
        });
        console.log(apps)
        return apps;
    } catch {
        throw new Error()
    }
}

export const getUrlByAppName = (name: string) => {
    try {
        const url = appDataJson.yApps.find((element: any) => element.name === name)?.url;
        return url
    } catch {
        throw new Error()
    }
}