import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Bio = ({ name }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          authors {
            name
            summary
          }
        }
      }
    }
  `);

  const { authors } = data.site.siteMetadata;
  const author = authors.find((it) => it.name == name) || {
    name: "Tox",
    summary: "contributor " + name,
  };
  return (
    <div>
      <img
        src={"https://avatars.githubusercontent.com/" + author.name}
        alt={author.name}
        style={{
          width: 50,
          borderRadius: "100%",
        }}
      />
      <p>
        Written by{" "}
        <a href={"https://github.com/" + author.name}>
          <strong>{author.name}</strong>
        </a>{" "}
        {author.summary}
      </p>
    </div>
  );
};

export default Bio;
