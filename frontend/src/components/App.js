import React, { useState } from 'react';
import ApplicationsList from './ApplicationsList';
import ApplicationDetails from './ApplicationDetails';

const App = () => {
  const [selectedAppId, setSelectedAppId] = useState(null);

  return (
    <div>
      {!selectedAppId ? (
        <ApplicationsList onSelect={setSelectedAppId} />
      ) : (
        <ApplicationDetails appId={selectedAppId} onBack={() => setSelectedAppId(null)} />
      )}
    </div>
  );
};

export default App;
