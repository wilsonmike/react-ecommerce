import Hero from "./hero/hero";
import Layout from "../shared/layout";
import FeaturedCollection from "./featured-collection/featured-collection";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <FeaturedCollection />
      </Layout>
    </>
  );
};

export default HomePage;
