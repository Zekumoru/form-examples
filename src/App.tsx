import { useEffect } from 'react';
import Form from './components/Form';
import { themeChange } from 'theme-change';

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <>
      <main className="p-4 max-w-screen-xl mx-auto">
        <Form />
      </main>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>
            Copyright ©{' '}
            <a
              href="https://github.com/Zekumoru/form-examples"
              rel="noopener noreferrer"
              target="_blank"
            >
              Zekumoru
            </a>{' '}
            |{' '}
            <a
              href="https://www.flaticon.com/free-icons/google-forms"
              title="google forms icons"
              rel="noopener noreferrer"
              target="_blank"
            >
              Google forms icons created by Freepik - Flaticon
            </a>
          </p>
        </aside>
      </footer>
    </>
  );
}

export default App;
