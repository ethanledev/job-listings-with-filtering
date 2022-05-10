import styles from "./FilterBar.module.css";
import { ReactComponent as RemoveIcon } from "../images/icon-remove.svg";

const FilterBar = () => {
  return (
    <div className={styles.filterBar}>
      <div className={styles.filterList}>
        <span className={styles.filter}>
          <span>Frontend</span>
          <span>
            <RemoveIcon />
          </span>
        </span>
        <span className={styles.filter}>
          <span>CSS</span>
          <span>
            <RemoveIcon />
          </span>
        </span>
        <span className={styles.filter}>
          <span>Javascript</span>
          <span>
            <RemoveIcon />
          </span>
        </span>
      </div>
      <div className={styles.clearFilter}>Clear</div>
    </div>
  );
};

export default FilterBar;
