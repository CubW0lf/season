import { getAll, find } from "../../services/directus/utils";
import Single from "../../components/layouts/Single/Single";

const SingleFruit = ({ vegetable }) => {
  return <Single item={vegetable} />;
};

export async function getStaticProps(context) {
  const id = context.params.legume;
  const vegetable = await find("vegetable", id);
  return {
    props: {
      vegetable,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const vegetables = await getAll("vegetable");

  const paths = vegetables.map((item) => ({
    params: { legume: item.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export default SingleFruit;
