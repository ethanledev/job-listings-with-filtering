import styles from "./Job.module.css";

const TAG_PROPS = ["role", "level", "languages", "tools"];

const Job = ({ job, addTag }) => {
  const renderTags = () => {
    const tags = [];

    for (let prop of TAG_PROPS) {
      if (prop === "role" || prop === "level") {
        if (job[prop]) {
          tags.push(
            <span
              key={job.company + job[prop]}
              className={styles.tag}
              onClick={() => addTag(prop + "/" + job[prop])}
            >
              {job[prop]}
            </span>
          );
        }
      } else {
        for (let tag of job[prop]) {
          tags.push(
            <span
              key={job.company + tag}
              className={styles.tag}
              onClick={() => addTag(prop + "/" + tag)}
            >
              {tag}
            </span>
          );
        }
      }
    }

    return tags;
  };

  return (
    <article
      className={`${styles.article} ${job.featured && styles.featuredJob}`}
    >
      <div className={styles.info}>
        <img
          src={job.logo}
          alt={`${job.company} logo`}
          className={styles.logo}
        />
        <div className={styles.detail}>
          <div>
            <span className={styles.companyName}>{job.company}</span>
            {job.new && <span className={styles.newTag}>NEW!</span>}
            {job.featured && (
              <span className={styles.featuredTag}>FEATURED</span>
            )}
          </div>
          <h2>{job.position}</h2>
          <div className={styles.infoFooter}>
            <span>{job.postedAt}</span>
            <span className={styles.dot}>&bull;</span>
            <span>{job.contract}</span>
            <span className={styles.dot}>&bull;</span>
            <span>{job.location}</span>
          </div>
        </div>
      </div>
      <div className={styles.tags}>{renderTags()}</div>
    </article>
  );
};

export default Job;
