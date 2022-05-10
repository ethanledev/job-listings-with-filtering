import styles from "./App.module.css";
import FilterBar from "./FilterBar";

const App = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.srOnly}>Job Listings With Filtering</h1>
      <div className={styles.header}></div>
      <section className={styles.section}>
        <FilterBar />
        <div>Hello</div>
      </section>
    </main>
  );
};

export default App;
