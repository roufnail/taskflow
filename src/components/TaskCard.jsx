import { Link } from "react-router-dom";

const STATUT_META = {
  "A faire":  { label: "À faire",  cls: "badge-todo"    },
  "En cours": { label: "En cours", cls: "badge-progress" },
  "Termine":  { label: "Terminé",  cls: "badge-done"    },
};

function TaskCard({ tache }) {
  const meta = STATUT_META[tache.statut] ?? STATUT_META["A faire"];

  return (
    <Link to={`/task/${tache.id}`} className="task-card-link">
      <article className="task-card">
        <div className="task-card-top">
          <span className={`badge ${meta.cls}`}>{meta.label}</span>
          <span className="task-id">#{tache.id}</span>
        </div>
        <h3 className="task-title">{tache.titre}</h3>
        <p className="task-desc">{tache.description}</p>
        <span className="task-arrow">→</span>
      </article>
    </Link>
  );
}

export default TaskCard;
