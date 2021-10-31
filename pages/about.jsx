import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

const about = () => {
  return (
    <Layout title="About | Blog" description="About" home >
      <h1>About</h1>

      <section className={utilStyles.headingMd}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eius
          dignissimos ex aut labore itaque sit nisi, quia officia, eligendi
          aliquid eum maxime distinctio ipsa quas animi harum, quis reiciendis!
        </p>
      </section>
    </Layout>
  );
};

export default about;
