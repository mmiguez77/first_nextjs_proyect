import Layout from "../../components/Layout";
import Link from "next/link";

const index = ({ data }) => {
  return (
    <Layout title="Blog" description="Blog" home>
      <h1>Blog</h1>
      <h3>Lista de Posts</h3>
      {data.map(({ id, title, body }) => (
        <div key={id}>
          <h4>
            <Link href={`/blog/posts/${id}`}>
              <a>
                {id} - {title}
              </a>
            </Link>
          </h4>
          <p>{body}</p>
        </div>
      ))}
    </Layout>
  );
};
export default index;

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {
      props: { data }
    };
  } catch (error) {
    console.error(error);
  }
}
