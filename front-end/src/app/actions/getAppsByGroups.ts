import { AppsInterface } from "../utils/types";

  
export default async function getAppsByGroup(group: string) {
    const response = await fetch('http://localhost:8000/apps');
    const apps = await response.json();
  
    // Filter apps based on the specified group
    const filteredApps: AppsInterface[] = group
      ? (apps as AppsInterface[]).filter(app => app.groups.includes(group))
      : apps;
  
    return filteredApps;
  }