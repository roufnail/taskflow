import useLocalStorage from "../hooks/useLocalStorage";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

const TACHES_INITIALES = [
  {
    id: 1,
    titre: "Conception de l'ontologie",
    description: "Rédiger les axiomes de base du domaine.",
    statut: "A faire",
  },
  {
    id: 2,
    titre: "Intégration de l'API REST",
    description: "Connecter le front-end aux endpoints backend.",
    statut: "En cours",
  },
  {
    id: 3,
    titre: "Rédaction du rapport final",
    description: "Synthétiser les résultats et conclusions du projet.",
    statut: "Termine",
  },
];

// Compteurs par statut pour le résumé
function compter(taches, statut) {
  return taches.filter((t) => t.statut === statut).length;
}

function Dashboard() {
  // Jalon 4 : persistance via hook personnalisé (Bonus)
  const [taches, setTaches] = useLocalStorage("taskflow_data", TACHES_INITIALES);

  // Jalon 3 : ajout immuable via spread operator
  function handleAddTask(nouvelleTache) {
    setTaches([...taches, nouvelleTache]);
  }

  return (
    <main className="dashboard">
      {/* Résumé statistique */}
      <section className="stats-bar">
        <div className="stat">
          <span className="stat-num">{taches.length}</span>
          <span className="stat-lbl">Total</span>
        </div>
        <div className="stat">
          <span className="stat-num todo">{compter(taches, "A faire")}</span>
          <span className="stat-lbl">À faire</span>
        </div>
        <div className="stat">
          <span className="stat-num progress">{compter(taches, "En cours")}</span>
          <span className="stat-lbl">En cours</span>
        </div>
        <div className="stat">
          <span className="stat-num done">{compter(taches, "Termine")}</span>
          <span className="stat-lbl">Terminées</span>
        </div>
      </section>

      <div className="dashboard-body">
        {/* Jalon 3 : formulaire avec callback */}
        <TaskForm onAddTask={handleAddTask} />

        {/* Jalon 2 : rendu avec .map() + key=id */}
        <section className="tasks-section">
          <h2 className="tasks-heading">
            Tâches <span className="tasks-count">{taches.length}</span>
          </h2>
          {taches.length === 0 ? (
            <p className="tasks-empty">Aucune tâche. Commencez par en créer une !</p>
          ) : (
            <div className="tasks-grid">
              {taches.map((tache) => (
                <TaskCard key={tache.id} tache={tache} />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default Dashboard;
