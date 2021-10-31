import Layout from "../../../components/Layout";
import Link from "next/link";
import Image from "next/image";

const firstPost = ({ data }) => {
    console.log(data);
  return (
    <Layout title="First Post" description="First Post" home>
      <Image src="/img/1.jpg" width={400} height={400} alt="Ocean"></Image>
      <h1>
        {data.id} - {data.title}
      </h1>
      <p> {data.body} </p>

      <br />
      <br />
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </Layout>
  );
};

export default firstPost;

export async function getStaticPaths() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const paths = data.map(({ id }) => ({ params: { id: `${id}` } }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error(error);
  }
}

export async function getStaticProps({params}) {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + params.id
    );
    const data = await res.json();

    return {
      props: {data},
    };
  } catch (error) {
    console.error(error);
  }
}
