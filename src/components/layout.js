import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Header from "../components/header";
import "../styles/style.scss";

const Layout = ({ pageTitle, children }) => {
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
    <div>
      <title>
        {pageTitle} | {data.markdownRemark.frontmatter.title}
      </title>
      <Header headerName="The Page Header" menuLinks="" socialLinks="" />
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
