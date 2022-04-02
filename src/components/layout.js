import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/style.scss";

const Layout = ({ pageTitle, children, pageHero }) => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "settings-seo" } }) {
        id
        frontmatter {
          title
        }
      }
    }
  `);

  return (
    <div class="scroll-snap parallax">
      {pageHero}
      <Header headerName="The Page Header" menuLinks="" socialLinks="" />
      <main class="container main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
