interface App {
    name: string;
    logoUrl: string;
    categorie: string;
    groups: string[];
  }
  
export default async function getAppsByGroup(group: string) {
    const response = await fetch('http://localhost:8000/apps');
    const apps = await response.json();
  
    // Filter apps based on the specified group
    const filteredApps = group
      ? (apps as App[]).filter(app => app.groups.includes(group))
      : apps;
  
    return filteredApps;
  }