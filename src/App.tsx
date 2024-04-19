import { useEffect } from 'react';
import Form from './components/Form';
import { themeChange } from 'theme-change';

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <main className="p-4 max-w-screen-xl mx-auto">
      <Form />
    </main>
  );
}

export default App;
