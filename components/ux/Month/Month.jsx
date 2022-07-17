import styles from "./Month.module.css";
import getAssetURL from "../../../services/directus/getAssets";
import NextImage from "../NextImage/NextImage";
import { useState } from "react";

const Month = ({ month }) => {
  const [monthVisible, toggleMonthVisibility] = useState(false);

  return (
    <div className={styles.container}>
      <h2 onClick={() => toggleMonthVisibility(!monthVisible)}>
        <span>{month[0].name}</span>
      </h2>
      <div className={styles.grid}>
        {month
          .filter((i, index) => index > 0)
          .map((i, index) => (
            <div className={`${styles.item} ${monthVisible ? styles.visible : styles.notVisible}`} key={index}>
              <span>{i.name}</span>
              <NextImage image={getAssetURL(i.picture.id)} name={i.name} width="50" height="50" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Month;
