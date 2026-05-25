import { useParams, Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const STATUT_META = {
  "A faire":  { label: "À faire",  cls: "badge-todo"    },
  "En cours": { label: "En cours", cls: "badge-progress" },
  "Termine":  { label: "Terminé",  cls: "badge-done"    },
};

function TaskDetail() {
  const { id } = useParams();
  const [taches] = useLocalStorage("taskflow_data", []);

  // Recherche de la tâche par identifiant (id stocké en number ou string)
  const tache = taches.find((t) => String(t.id) === String(id));
  const meta  = tache ? (STATUT_META[tache.statut] ?? STATUT_META["A faire"]) : null;

  if (!tache) {
    return (
      <main className="detail-page">
        <div className="detail-notfound">
          <span className="detail-notfound-icon">⚠</span>
          <h2>Tâche introuvable</h2>
          <p>L'identifiant <strong>#{id}</strong> ne correspond à aucune tâche existante.</p>
          <Link to="/" className="btn-back">← Retour au tableau de bord</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="detail-page">
      <Link to="/" className="btn-back">← Retour</Link>

      <article className="detail-card">
        <header className="detail-header">
          <span className={`badge badge-lg ${meta.cls}`}>{meta.label}</span>
          <span className="detail-id">Tâche #{tache.id}</span>
        </header>

        <h1 className="detail-title">{tache.titre}</h1>

        <div className="detail-section">
          <h3 className="detail-label">Description</h3>
          <p className="detail-body">{tache.description || <em>Aucune description fournie.</em>}</p>
        </div>

        <div className="detail-section">
          <h3 className="detail-label">Statut</h3>
          <p className="detail-body">{meta.label}</p>
        </div>

        <div className="detail-section">
          <h3 className="detail-label">Identifiant unique</h3>
          <code className="detail-code">{tache.id}</code>
        </div>
      </article>
    </main>
  );
}

export default TaskDetail;
