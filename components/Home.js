import styles from '../styles/Home.module.css';

function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Welcome</h1>
        <h2>Log in to you Google account to continue</h2>
        <div className={styles.divider}></div>
        {/* Add Google connect here */}
      </div>
    </div>
  );
}

export default Home;
