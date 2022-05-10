import styles from "./App.module.css";
import FilterBar from "./FilterBar";
import Job from "./Job";
import data from "../data.json";

const App = () => {
  const renderJobs = () => {
    return data.map((job) => <Job key={job.id} job={job} />);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.srOnly}>Job Listings With Filtering</h1>
      <div className={styles.header}></div>
      <section className={styles.section}>
        <h2 className={styles.srOnly}>Job List</h2>
        <FilterBar />
        {renderJobs()}
      </section>
    </main>
  );
};

export default App;
