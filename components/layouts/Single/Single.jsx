import Image from "next/image";
import getAssetURL from "../../../services/directus/getAssets";
import styles from "./Single.module.css";
import { IoCaretBack } from "react-icons/io5";
import Link from "next/link";

const Single = ({ item }) => {
  return (
    <div className={styles.container}>
      <h1>{item.name}</h1>
      <div className={styles.image}>
        <Image src={getAssetURL(item.picture.id)} alt={item.name} layout="fill" objectFit="contain" />
      </div>
      <h2>Mois de disponibilité</h2>
      <ul className={styles.months}>
        {item.month
          .sort((a, b) => a - b)
          .map((m) => (
            <li key={m}>{m}</li>
          ))}
      </ul>
      <h2>Description</h2>
      {item.description ? <div dangerouslySetInnerHTML={{ __html: item.description }}></div> : <p>Pas de description</p>}

      <Link href="/">
        <a>
          <div className={styles.back}>
            <IoCaretBack />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Single;
