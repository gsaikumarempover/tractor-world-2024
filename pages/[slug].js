import { gql } from '@apollo/client';
import Head from 'next/head';
import { getApolloClient } from '../lib/apollo-client';

export async function getStaticProps({ params }) {
  const client = getApolloClient(); // Get the Apollo Client

  const { data } = await client.query({
    query: gql`
     query PostBySlug($slug: String!) {
      generalSettings {
        title
      }
      postBy(slug: $slug) {
        id
        content
        title
        slug
        seo {
          metaDesc
          title
          fullHead
        }
      }
    }
    `,
    variables: {
      slug: params.slug,
    },
  });

  // Console log the data to verify it's being fetched correctly
  console.log('Fetched data:', data);

  // Pass the data as props to the page component
  return {
    props: {
      page: data.pageBy,
    },
  };
}

export async function getStaticPaths() {
  const client = getApolloClient();

  const { data } = await client.query({
    query: gql`
      query AllPages {
        pages {
          nodes {
            uri
          }
        }
      }
    `,
  });

  const paths = data.pages.nodes.map((page) => ({
    params: { slug: page.uri },
  }));

  return {
    paths,
    fallback: false,
  };
}

const Page = ({ page }) => {
  return (
    <>
      <Head>
        <title>{page.seo.title}</title>
        <meta name="description" content={page.seo.metaDesc} />
      </Head>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </>
  );
}

export default Page;
