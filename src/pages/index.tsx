import Experiences from "@/components/Expericences";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Projects from "@/components/Projects";

function HomePage() {
  return (
    <Layout>
      <Hero />
      <Experiences />
      <Projects />
    </Layout>
  );
}

export default HomePage;
