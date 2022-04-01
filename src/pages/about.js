// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <h1>About Me</h1>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
      <StaticImage
        alt="A picture of the wedding"
        src="../images/IMG_8196_1.jpg"
      />
      <Link to="/">Back home!</Link>
    </Layout>
  );
};

// Step 3: Export your component
export default AboutPage;
