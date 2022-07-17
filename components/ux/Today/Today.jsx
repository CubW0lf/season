import { useState, useEffect } from "react";
import dayjs from "dayjs";
import styles from "./Today.module.css";
import "dayjs/locale/de";
import { useUxContext } from "../../../contexts/uxContext";

const Today = () => {
  const [day, setDay] = useState(null);
  const [monthString, setMonthString] = useState(null);
  const [year, setYear] = useState(null);
  dayjs.locale("fr");

  const { selectedType } = useUxContext();

  useEffect(() => {
    const now = new Date();

    setDay(dayjs(now).format("DD"));
    setMonthString(dayjs(now).format("MMMM"));
    setYear(dayjs(now).format("YYYY"));
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.date}>
        Nous sommes le {day && day} {monthString && monthString} {year && year}
      </span>
      <span className={styles.info}>
        {selectedType && selectedType === "vegetables" && `Légumes pour le mois de ${monthString && monthString}`}
        {selectedType && selectedType === "fruits" && `Fruits pour le mois de ${monthString && monthString}`}
      </span>
    </div>
  );
};

export default Today;
