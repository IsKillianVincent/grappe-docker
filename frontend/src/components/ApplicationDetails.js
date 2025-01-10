import React, { useEffect, useState } from 'react';

const ApplicationDetails = ({ appId, onBack }) => {
  const [appDetails, setAppDetails] = useState(null);
  const [versions, setVersions] = useState([]);
  const [newVersion, setNewVersion] = useState({
    version_number: '',
    environment: '',
    deployment_date: '',
    status: '',
  });

  useEffect(() => {
    fetch(`http://localhost:5001/applications/${appId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setAppDetails(data))
      .catch((err) => console.error('Error fetching application details:', err));
  
    fetch(`http://localhost:5001/versions/${appId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setVersions(data))
      .catch((err) => console.error('Error fetching versions:', err));
  }, [appId]);
  

  const addVersion = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5001/versions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...newVersion,
        application_id: appId, // Inclure l'application ID
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setVersions([...versions, data]);
        setNewVersion({ version_number: '', environment: '', deployment_date: '', status: '' });
      })
      .catch((error) => console.error('Error adding version:', error));
  };

  return (
    <div>
      <button onClick={onBack}>Retour</button>

      {appDetails && (
        <div>
          <h2>{appDetails.name}</h2>
          <p>{appDetails.description}</p>
        </div>
      )}

      <h3>Versions</h3>
      <ul>
        {versions.map((version) => (
          <li key={version.id}>
            Version: {version.version_number}, Environnement: {version.environment}, Date: {version.deployment_date}, Statut: {version.status}
          </li>
        ))}
      </ul>

      <h3>Ajouter une version</h3>
      <form onSubmit={addVersion}>
        <label>
          Numéro de version:
          <input
            type="text"
            value={newVersion.version_number}
            onChange={(e) => setNewVersion({ ...newVersion, version_number: e.target.value })}
          />
        </label>
        <br />
        <label>
          Environnement:
          <select
            value={newVersion.environment}
            onChange={(e) => setNewVersion({ ...newVersion, environment: e.target.value })}
          >
            <option value="">Choisir...</option>
            <option value="Production">Production</option>
            <option value="Acceptance">Acceptance</option>
          </select>
        </label>
        <br />
        <label>
          Date de déploiement:
          <input
            type="date"
            value={newVersion.deployment_date}
            onChange={(e) => setNewVersion({ ...newVersion, deployment_date: e.target.value })}
          />
        </label>
        <br />
        <label>
          Statut:
          <select
            value={newVersion.status}
            onChange={(e) => setNewVersion({ ...newVersion, status: e.target.value })}
          >
            <option value="">Choisir...</option>
            <option value="Success">Succès</option>
            <option value="Failed">Échec</option>
          </select>
        </label>
        <br />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default ApplicationDetails;
