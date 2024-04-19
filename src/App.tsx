import { useEffect } from 'react';
import Form from './components/Form';
import { themeChange } from 'theme-change';

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="p-4">
      <Form />
    </div>
  );
}

export default App;
