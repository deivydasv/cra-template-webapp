import React from 'react';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.App__header}>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className={styles.App__link} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
