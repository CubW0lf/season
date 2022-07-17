import { GiStrawberry } from "react-icons/gi";
import { HiOutlineChevronUp } from "react-icons/hi";
import { FaCarrot } from "react-icons/fa";
import { useUxContext } from "../../../contexts/uxContext";
import styles from "./TypeSelector.module.css";
import { useState } from "react";

const TypeSelector = () => {
  const [selectorVisible, toggleSelectorVisibility] = useState(false);
  const { setSelectedType, selectedType } = useUxContext(false);

  return (
    <nav className={styles.container}>
      <HiOutlineChevronUp
        className={`${styles.bring} ${selectorVisible && styles.bringRotate}`}
        onClick={() => toggleSelectorVisibility(!selectorVisible)}
      />
      <div className={`${styles.selector} ${selectorVisible && styles.selectorVisible}`}>
        <GiStrawberry className={selectedType === "fruits" && styles.active} onClick={() => setSelectedType("fruits")} />
        <FaCarrot className={selectedType === "legumes" && styles.active} onClick={() => setSelectedType("legumes")} />
      </div>
    </nav>
  );
};

export default TypeSelector;
