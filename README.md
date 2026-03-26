# Sehati API — Node.js + Prisma + PostgreSQL + Mongodb

API REST pour la gestion des médecins, construite avec Node.js, Express et Prisma ORM.

---

## Prérequis

Avant de commencer, assure-toi d'avoir installé sur ta machine :

- [Node.js](https://nodejs.org) version 18 ou plus — vérifie avec `node -v`
- [npm](https://www.npmjs.com) version 9 ou plus — vérifie avec `npm -v`
- [PostgreSQL](https://www.postgresql.org) version 14 ou plus — vérifie avec `psql --version`
- [Mongoose](https://mongodb.com) — vérifie avec `mongoose -v`
- [Git](https://git-scm.com) — vérifie avec `git --version`

---

## 1. Cloner le repository

```bash
git clone https://github.com/ton-username/Backend.git
```

Ensuite entre dans le dossier du projet :

```bash
cd Backend
```

---

## 2. Installer les dépendances Node.js

```bash
npm install
```

Cette commande lit le fichier `package.json` et installe tous les packages listés dans `node_modules/`.

Les packages principaux installés :

| Package | Rôle |
|---|---|
| `express` | Framework HTTP — gère les routes et les requêtes |
| `@prisma/client` | Client Prisma généré — donne accès à `prisma.doctor.*` |
| `dotenv` | Charge les variables du fichier `.env` |
| `cors` | Autorise les requêtes depuis d'autres origines (front-end) |
| `morgan` | Logger des requêtes HTTP dans le terminal |
| `bcryptjs` | Hashage des mots de passe |

Les packages de développement :

| Package | Rôle |
|---|---|
| `prisma` | CLI Prisma — commandes `migrate`, `generate`, `studio` |
| `nodemon` | Redémarre le serveur automatiquement à chaque modification |

---

## 3. Configurer les variables d'environnement

Crée un fichier `.env` à la racine du projet :

```bash
cp .env.example .env
```

Ouvre le fichier `.env` et remplis tes valeurs :

```env
# Port du serveur Express
PORT=3000

# Connexion PostgreSQL
# Format : postgresql://UTILISATEUR:MOT_DE_PASSE@HOTE:PORT/NOM_BASE
DATABASE_URL="postgresql://postgres:tonmotdepasse@localhost:5432/sehati"

# Connexion MongoDB
UTILISATEUR:MOT_DE_PASSE@NOM_BASE
MONGO_URI=mongodb+srv://mongodb:tonmotdepasse@sehati.hx4mwkg.mongodb.net/sehati




# Environnement
NODE_ENV=development
```

> **Important** — Le fichier `.env` ne doit jamais être commité sur Git.
> Il est déjà listé dans `.gitignore`.

---

## 4. Créer la base de données PostgreSQL

Ouvre ton terminal PostgreSQL et crée la base :

```bash
psql -U postgres
```

Puis dans le shell PostgreSQL :

```sql
CREATE DATABASE clinic_db;
\q
```

---

## 5. Installer Prisma CLI

Prisma CLI est déjà inclus dans les `devDependencies`. Il est accessible via `npx` sans installation globale :

```bash
npx prisma --version
```

Tu devrais voir quelque chose comme :

```
prisma : 5.x.x
@prisma/client : 5.x.x
```

---

## 6. Lancer la migration Prisma

Cette commande lit le fichier `prisma/schema.prisma`, génère le SQL correspondant et crée les tables dans ta base PostgreSQL :

```bash
npx prisma migrate dev --name init
```

Ce que fait cette commande :

1. Compare `schema.prisma` avec l'état actuel de ta base
2. Génère un fichier SQL dans `prisma/migrations/`
3. Exécute ce SQL sur ta base `clinic_db`
4. Génère automatiquement le client Prisma (`prisma generate`)

Résultat attendu dans le terminal :

```
✔ Generated Prisma Client (v5.x.x)
✔ Your database is now in sync with your schema.
```

---

## 7. Générer le client Prisma

> Cette étape est faite automatiquement par `migrate dev`.
> Relance-la manuellement uniquement si tu modifies `schema.prisma` sans créer de migration.

```bash
npx prisma generate
```

Cette commande génère le code dans `node_modules/@prisma/client` qui te donne accès à `prisma.doctor.findMany()`, `prisma.doctor.create()`, etc.

---

## 8. (Optionnel) Vérifier la base avec Prisma Studio

Prisma Studio est une interface visuelle pour explorer tes tables :

```bash
npx prisma studio
```

Ouvre ton navigateur sur [http://localhost:5555](http://localhost:5555).
Tu peux y voir les tables, ajouter des données et vérifier les enregistrements.

---

## 9. Lancer le serveur

### En développement (avec rechargement automatique)

```bash
npm run dev
```

### En production

```bash
npm start
```

Résultat attendu :

```
Serveur démarré sur le port 3000
```

---

## 10. Tester l'API

Ouvre Postman ou Thunder Client et teste les routes suivantes :

| Méthode | URL | Description |
|---|---|---|
| GET | `http://localhost:3000/api/doctors` | Récupérer tous les doctors |
| POST | `http://localhost:3000/api/doctors` | Créer un doctor |
| GET | `http://localhost:3000/api/doctors/:id` | Récupérer un doctor par id |
| PUT | `http://localhost:3000/api/doctors/:id` | Modifier un doctor |
| DELETE | `http://localhost:3000/api/doctors/:id` | Supprimer un doctor |

Exemple de body JSON pour `POST /api/doctors` :

```json
{
  "firstName": "Ahmed",
  "lastName": "Bennani",
  "email": "ahmed.bennani@clinic.ma",
  "passwordHash": "motdepasse123",
  "speciality": "Cardiologie",
  "phone": "+212600000000"
}
```

---

## Structure du projet

```
backend/
├── prisma/
│   ├── schema.prisma          ← définition des modèles (tables)
│   └── migrations/            ← historique des migrations SQL
├── routes/
│   └── doctor.routes.js       ← définition des URLs
├── controllers/
│   └── doctor.controller.js   ← gestion req / res
├── services/
│   └── doctor.service.js      ← logique métier + appels Prisma
├── app.js                     ← configuration Express
├── .env                       ← variables d'environnement (ne pas commiter)
├── .env.example               ← modèle de .env à commiter
├── .gitignore
└── package.json
```

---

## Commandes utiles

| Commande | Description |
|---|---|
| `npm install` | Installer les dépendances |
| `npm run dev` | Lancer le serveur en mode développement |
| `npm start` | Lancer le serveur en production |
| `npx prisma migrate dev --name nom` | Créer une nouvelle migration |
| `npx prisma generate` | Regénérer le client Prisma |
| `npx prisma studio` | Ouvrir l'interface visuelle de la base |
| `npx prisma migrate reset` | Réinitialiser la base (attention : supprime toutes les données) |

---

## Variables d'environnement

| Variable | Description | Exemple |
|---|---|---|
| `DATABASE_URL` | URL de connexion PostgreSQL | `postgresql://postgres:1234@localhost:5432/clinic_db` |
| `PORT` | Port du serveur Express | `3000` |
| `NODE_ENV` | Environnement d'exécution | `development` ou `production` |

---

## En cas de problème

**Erreur `P1001` — Cannot reach database server**
Vérifie que PostgreSQL est bien lancé et que `DATABASE_URL` est correcte dans `.env`.

**Erreur `P2002` — Unique constraint failed**
Tu essaies de créer un doctor avec un email ou un `licenceNbr` déjà existant en base.

**Erreur `Cannot find module '@prisma/client'`**
Lance `npx prisma generate` pour régénérer le client.

**Port 3000 déjà utilisé**
Change `PORT=3001` dans `.env` ou arrête le processus qui utilise le port 3000.
