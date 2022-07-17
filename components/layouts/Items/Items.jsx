import Card from "../../ux/Card/Card";
import styles from "./Items.module.css";

const Fruits = ({ items }) => {
  return <div className={styles.container}>{items && items.map((f) => <Card key={f.id} item={f} />)}</div>;
};

export default Fruits;
