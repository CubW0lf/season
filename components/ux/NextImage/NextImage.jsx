import Image from "next/image";
import styles from "./NextImage.module.css";

const NextImage = ({ image, name, ...rest }) => {
  return (
    <div className={styles.container}>
      <Image src={image} alt={name} {...rest} />
    </div>
  );
};

export default NextImage;
