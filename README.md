# TaskFlow – Gestionnaire de tâches d'équipe

Application SPA développée avec React + Vite dans le cadre du TP évalué en Architecture Front-End ( AHMADOU ROUFAÏ_SEC_IC4).

## Prérequis

- Node.js ≥ 18
- npm ≥ 9

## Installation des dépendances

```bash
npm install
```

## Lancement du serveur de développement

```bash
npm run dev
```

L'application sera accessible à l'adresse : **http://localhost:5173**

## Structure du projet

```
src/
├── components/
│   ├── TaskCard.jsx      # Carte d'affichage d'une tâche
│   └── TaskForm.jsx      # Formulaire contrôlé d'ajout de tâche
├── hooks/
│   └── useLocalStorage.js  # Hook personnalisé (Bonus)
├── layouts/
│   └── Navbar.jsx        # Barre de navigation globale
├── pages/
│   ├── Dashboard.jsx     # Écran principal (liste + formulaire)
│   └── TaskDetail.jsx    # Fiche détaillée d'une tâche
├── App.jsx               # BrowserRouter + arbre de routes
├── main.jsx              # Point d'entrée React
└── styles.css            # Design system global
```

## Jalons implémentés

| Jalon | Description                              | Points |
|-------|------------------------------------------|--------|
| 1     | Environnement Vite + architecture /src   | 3 pts  |
| 2     | Composants TaskCard + `.map()` avec `key=id` | 4 pts  |
| 3     | Formulaire contrôlé + Lifting State Up   | 5 pts  |
| 4     | `useEffect` + `localStorage`             | 4 pts  |
| 5     | React Router DOM + `useParams`           | 4 pts  |
| Bonus | Hook `useLocalStorage.js`                | +2 pts |

