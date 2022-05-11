import styles from "./App.module.css";
import FilterBar from "./FilterBar";
import Job from "./Job";
import data from "../data.json";
import { useEffect, useState } from "react";

const App = () => {
  const [tags, setTags] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(data);

  useEffect(() => {
    let filteredList = data;

    for (let tag of tags) {
      filteredList = filteredList.filter((job) => {
        const [prop, value] = tag.split("/");
        if (prop === "role" || prop === "level") {
          return job[prop] === value;
        } else {
          return job[prop].indexOf(value) !== -1;
        }
      });
    }

    setFilteredJobs([...filteredList]);
  }, [tags]);

  const renderJobs = () => {
    return filteredJobs.map((job) => (
      <Job key={job.id} job={job} addTag={addTag} />
    ));
  };

  const addTag = (newTag) => {
    if (tags.indexOf(newTag) === -1) {
      setTags((prev) => [...prev, newTag]);
    }
  };

  const removeTag = (tagToRemove) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove);
    setTags([...newTags]);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.srOnly}>Job Listings With Filtering</h1>
      <div className={styles.header}></div>
      <section className={styles.section}>
        <h2 className={styles.srOnly}>Job List</h2>
        <FilterBar
          tags={tags}
          clearTags={() => setTags([])}
          removeTag={removeTag}
        />
        {renderJobs()}
      </section>
    </main>
  );
};

export default App;
