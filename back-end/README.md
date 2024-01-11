# Documentation Back-End Projet YunoHost App Installer

## Présentation du Projet

### Objectif
Le projet consiste en une application destinée à l'OS YunoHost, visant à simplifier l'installation d'applications sur la plateforme. L'objectif principal est d'abstraire le lancement de commandes complexes tout en fournissant une gestion des erreurs conviviale au cours du processus d'installation.

### Technologies Utilisées
1. **Node.js et Express**: Framework JavaScript côté serveur pour le développement rapide et efficace d'applications web.
2. **YunoHost**: Système d'exploitation serveur facilitant l'hébergement auto-hébergé.
3. **Git**: Système de contrôle de version pour la gestion collaborative du code source.
4. **Jest et TypeScript**: Configuration pour les tests unitaires et l'utilisation de TypeScript.

### Structure du Projet

```markdown
/backend
|-- /src
|   |-- /controllers
|   |   |-- install.controller.ts
|   |   |-- yApp.controller.ts
|   |
|   |-- /data
|   |   |-- yApp.json
|   |
|   |-- /routes
|   |   |-- install.ts
|   |   |-- scrap.ts
|   |   |-- yApps.ts
|   |
|   |-- /provider
|   |   |-- yApp.provider.ts
|   |
|   |-- index.ts
|
|-- /test
|
|-- .env
|-- .gitignore
|-- jest.config.js
|-- package.json
|-- tsconfig.json
|-- README.md
|-- ...
```
## Ajouter des Applications au Bundle

Pour étendre le bundle avec de nouvelles applications, suivez la nomenclature ci-dessous. Utilisez cet exemple comme modèle pour chaque application que vous souhaitez intégrer :

```json
{
  "name": "Nom_de_l'Application",
  "originalName": "nom_de_l_application",
  "logoUrl": "URL_du_logo_de_l_application",
  "url": "URL_de_la_page_sur_le_catalogue_YunoHost",
  "categorie": "categorie_de_l_application",
  "groups": [
    "groupe1",
    "groupe2"
  ]
}
```

### Explication des Propriétés

- **name**: Le nom de l'application que vous souhaitez ajouter au bundle.
- **originalName**: Le nom original de l'application, en minuscules. Il s'agit d'un identifiant unique pour l'application.
- **logoUrl**: L'URL du logo de l'application. Assurez-vous qu'il s'agit d'une URL directe vers une image.
- **url**: L'URL de la page de l'application sur le catalogue YunoHost.
- **categorie**: La catégorie à laquelle appartient l'application. Utilisez des termes spécifiques comme "bureau", "communication", "sécurité", etc.
- **groups**: Une liste des groupes auxquels l'application appartient. Les groupes sont des catégories spécifiques qui peuvent aider à organiser les applications, comme "collaboration", "productivité", etc.

Assurez-vous de remplir ces propriétés correctement pour chaque application que vous ajoutez. Cela garantira une intégration fluide et cohérente dans le bundle.

N'hésitez pas à me faire part de toute autre information à inclure dans cette section.

## Présentation des Routes

Dans cette section, nous présentons les différentes routes de l'application, chacune ayant un but spécifique. Les routes sont définies dans les fichiers appropriés, organisés par fonctionnalité.

### Routes Apps

Les routes liées aux applications sont définies dans le fichier `yApps.ts` situé dans le dossier `/routes`.

#### Liste de Toutes les Applications

- **Endpoint**: `/apps/`
- **Méthode**: `GET`
- **Description**: Cette route renvoie la liste de toutes les applications disponibles.

#### Détails d'une Application par Nom

- **Endpoint**: `/apps/:name`
- **Méthode**: `GET`
- **Description**: Cette route renvoie les détails d'une application spécifique en utilisant le nom de l'application comme paramètre dans l'URL.

### Scrapping des Applications

- **Endpoint**: `/scrap/`
- **Méthode**: `GET`
- **Description**: Cette route déclenche le processus de scrapping pour obtenir les informations les plus récentes sur les applications disponibles.

Exemple d'utilisation :

```http
GET /scrap/
```

### Routes Installation

Les routes liées à l'installation des applications sont définies dans le fichier `install.ts` situé dans le dossier `/routes`.

#### Installation de Plusieurs Applications

- **Endpoint**: `/install/`
- **Méthode**: `POST`
- **Description**: Cette route permet d'installer plusieurs applications en une seule requête. Le corps de la requête doit contenir une liste d'objets représentant les noms d'applications à installer.

Exemple d'utilisation :

```http
POST /install/
Content-Type: application/json

[
  { "originalName": "Nom_app1" },
  { "originalName": "Nom_app2" },
  { "originalName": "Nom_app3" }
]
```

### Routes Désinstallation

Les routes liées à la désinstallation des applications sont définies dans le fichier `install.ts` situé dans le dossier `/routes`.

#### Désinstallation de Plusieurs Applications

- **Endpoint**: `/`
- **Méthode**: `DELETE`
- **Description**: Cette route permet de désinstaller plusieurs applications en une seule requête. Le corps de la requête doit contenir une liste d'objets représentant les noms d'applications à désinstaller.

Exemple d'utilisation :

```http
DELETE /install/
Content-Type: application/json

[
  { "originalName": "Nom_app1" },
  { "originalName": "Nom_app2" },
  { "originalName": "Nom_app3" }
]