import styles from "./FilterBar.module.css";
import { ReactComponent as RemoveIcon } from "../icons/icon-remove.svg";

const FilterBar = ({ tags, clearTags, removeTag }) => {
  const renderTags = () => {
    if (tags.length) {
      return tags.map((tag) => {
        const tagParts = tag.split("/");
        return (
          <span className={styles.filter} key={tag}>
            <span>{tagParts[1]}</span>
            <span onClick={() => removeTag(tag)}>
              <RemoveIcon />
            </span>
          </span>
        );
      });
    }
  };

  return (
    <div className={`${styles.filterBar} ${tags.length === 0 && styles.hide}`}>
      <div className={styles.filterList}>{renderTags()}</div>
      <div className={styles.clearFilter} onClick={clearTags}>
        Clear
      </div>
    </div>
  );
};

export default FilterBar;
