const appDataJson = require("../data/yApp.json")


interface AppInterface {
    name : string,
    logoUrl : string,
    categorie: string,
    groups: string[]
};


export const getAllApp = async () => {
    try {
        const apps = appDataJson.yApps.map((item: AppInterface) => {return {
                name: item.name,
                logoUrl: item.logoUrl,
                categorie: item.categorie,
                groups: item.groups
            }
        });
        return apps;
    } catch {
        throw new Error()
    }
}

export const getOneApp = async (name: string) => {
    try {
        const app = appDataJson.yApps.find((item: AppInterface) => name === item.name);

        return {
            name: app.name,
            logoUrl: app.logoUrl,
            categorie: app.categorie,
            groups: app.groups
       }
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