import { useState, useEffect } from "react";
import Head from "next/head";
import { useUxContext } from "../contexts/uxContext";
import { getAll } from "../services/directus/utils";
import Today from "../components/ux/Today/Today";
import Items from "../components/layouts/Items/Items";
import dayjs from "dayjs";
import styles from "../styles/Home.module.css";
import "dayjs/locale/fr";

const Home = ({ fruits, vegetables }) => {
  dayjs.locale("fr");

  const { selectedType } = useUxContext();

  const [currentMonth, setCurrentMonth] = useState(null);
  const [seasonalFruits, setSeasonalFruits] = useState(null);
  const [seasonalVegetables, setSeasonalVegetables] = useState(null);

  // on récupère le mois courant
  useEffect(() => {
    const now = new Date();
    setCurrentMonth(dayjs(now).format("M"));
  }, []);

  // on filtre les fruits saisonniers
  useEffect(() => {
    if (currentMonth !== null && fruits) {
      setSeasonalFruits(fruits.filter((f) => f.month.includes(currentMonth.toString())));
    }
  }, [fruits, currentMonth]);

  // on filtre les légumes saisonniers
  useEffect(() => {
    if (currentMonth !== null && vegetables) {
      setSeasonalVegetables(vegetables.filter((v) => v.month.includes(currentMonth.toString())));
    }
  }, [vegetables, currentMonth]);

  return (
    <>
      <Head>
        <title>Fruits et légumes de saison | Season</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Today />
        {selectedType === "" && ""}
        {selectedType === "fruits" && fruits && <Items items={seasonalFruits} />}
        {selectedType === "legumes" && <Items items={seasonalVegetables} />}
        {(selectedType !== "" && !fruits) || (selectedType !== "" && !vegetables && <p>Loading...</p>)}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const fruits = await getAll("fruit");
  const vegetables = await getAll("vegetable");

  return {
    props: {
      fruits: fruits,
      vegetables: vegetables,
    },
  };
}

export default Home;