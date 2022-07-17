import Link from "next/link";
import getAssetURL from "../../../services/directus/getAssets";
import NextImage from "../NextImage/NextImage";
import styles from "./Card.module.css";
import { useUxContext } from "../../../contexts/uxContext";

const Card = ({ item }) => {
  const { selectedType } = useUxContext();
  return (
    <>
      {item && (
        <div className={styles.container}>
          <div className={styles.top}>
            <Link href={`/${selectedType}/${item.id}`}>
              <a>
                {item.picture && <NextImage image={getAssetURL(item.picture.id)} alt={item.name} width="200" height="200" />}
              </a>
            </Link>
            <div className={styles.clip}></div>
          </div>

          <div className={styles.bottom}>
            <h3>{item.name}</h3>
            <Link href={`/${selectedType}/${item.id}`}>
              <a>
                <button>Voir Fiche</button>
              </a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
