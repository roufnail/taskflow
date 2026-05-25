import { useState } from "react";

const VIDE = { titre: "", description: "", statut: "A faire" };

function TaskForm({ onAddTask }) {
  const [champs, setChamps] = useState(VIDE);
  const [erreur, setErreur] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setChamps((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!champs.titre.trim()) {
      setErreur("Le titre est obligatoire.");
      return;
    }
    const nouvelleTache = {
      id: Date.now(),
      titre: champs.titre.trim(),
      description: champs.description.trim(),
      statut: champs.statut,
    };
    onAddTask(nouvelleTache);
    setChamps(VIDE);
    setErreur("");
  }

  return (
    <section className="form-section">
      <h2 className="form-heading">Nouvelle tâche</h2>
      <div className="form-card">
        {erreur && <p className="form-error">{erreur}</p>}

        <div className="form-group">
          <label htmlFor="titre">Titre</label>
          <input
            id="titre"
            name="titre"
            type="text"
            placeholder="Ex. : Rédiger les spécifications…"
            value={champs.titre}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows={3}
            placeholder="Détaillez la tâche…"
            value={champs.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="statut">Statut initial</label>
          <select
            id="statut"
            name="statut"
            value={champs.statut}
            onChange={handleChange}
          >
            <option value="A faire">À faire</option>
            <option value="En cours">En cours</option>
            <option value="Termine">Terminé</option>
          </select>
        </div>

        <button className="btn-submit" onClick={handleSubmit}>
          Ajouter la tâche ＋
        </button>
      </div>
    </section>
  );
}

export default TaskForm;
