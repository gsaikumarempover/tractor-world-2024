// import { gql } from '@apollo/client';
// import Head from 'next/head';
// import { getApolloClient } from '../lib/apollo-client';

// export async function getStaticProps({ params }) {
//   const client = getApolloClient(); // Get the Apollo Client
//   try {
//     const { data } = await client.query({
//       query: gql`
//         query PostBySlug($slug: String!) {
//           generalSettings {
//             title
//           }
//           postBy(slug: $slug) {
//             id
//             content
//             title
//             slug
//             seo {
//               metaDesc
//               title 
//               fullHead
//             }
//           }
//         }
//       `,
//       variables: {
//         slug: params.slug,
//       },
//     });

//     //console.log('Fetched data:', data);

//     // Handle the case where `postBy` might be undefined or null
//     return {
//       props: {
//         post: data.postBy || null,
//         generalSettings: data.generalSettings || null,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error); 
//     return {
//       props: {
//         post: null,
//         generalSettings: null,
//       },
//     };
//   }
// }

// export async function getStaticPaths() {
//   const client = getApolloClient();

//   try {
//     const { data } = await client.query({
//       query: gql`
//         query AllPages {
//           pages {
//             nodes {
//               uri
//             }
//           }
//         }
//       `,
//     });

//     const paths = data.pages.nodes.map((page) => ({
//       params: { slug: page.uri },
//     }));

//     return {
//       paths,
//       fallback: false,
//     };
//   } catch (error) {
//     console.error('Error fetching paths:', error);

//     return {
//       paths: [],
//       fallback: false,
//     };
//   }
// }
// const Page = ({ page }) => {
//   return (
//     <>
//       <Head>
//         <title>{page.seo.title}</title>
//         <meta name="description" content={page.seo.metaDesc} />
//       </Head>
//       <h1>{page.title}</h1>
//       <div dangerouslySetInnerHTML={{ __html: page.content }} />
//     </>
//   );
// }

// export default Page;
