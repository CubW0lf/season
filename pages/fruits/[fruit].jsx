import { getAll, find } from "../../services/directus/utils";
import Single from "../../components/layouts/Single/Single";

const SingleFruit = ({ fruit }) => {
  return <Single item={fruit} />;
};

export async function getStaticProps(context) {
  const id = context.params.fruit;
  const fruit = await find("fruit", id);
  return {
    props: {
      fruit,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const fruits = await getAll("fruit");

  const paths = fruits.map((item) => ({
    params: { fruit: item.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export default SingleFruit;
