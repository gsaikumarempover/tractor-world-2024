import { gql } from '@apollo/client'; 

export const customImageLoader = ({ src }) => {
  return src; // Return the original image source directly
};

export const HOMEPAGE_QUERIES = gql`
  query GetHomeData($lang: LanguageCodeFilterEnum!) {

    homeSliders(where: {orderby: {field: DATE, order: ASC}, language: $lang}) {
      nodes {
        homesliders { 
          sliderimage {
            node {
              mediaItemUrl
            }
          }
          mobilesliderimage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }

 testimonials(where: {orderby: {field: DATE, order: ASC}, language: $lang}) {
    nodes {
      tesimonails {
        description
        videourl
        mobileimage {
          node {
            mediaItemUrl
          }
        }
        webimage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }

contentgallerys(where: {orderby: {field: DATE, order: ASC}, language: $lang}) {
    nodes {
      contentGalleryFields {
        badge
        description
        image {
          node {
            mediaItemUrl
            sourceUrl
          }
        }
      }
      date
      title
      uri
    }
  }

  latestnews(where: {orderby: {field: TITLE, order: ASC}, language: $lang}) {
    edges {
      node {
        contentGalleryFields {
          badge
          description
          image {
            node {
              mediaItemUrl
            }
          }
        }
        title
        uri
        date
      }
    }
  }
  }  
`;  
 
export const GET_LIVE_INVENTORY = gql` 
query GetLiveInventory($lang: LanguageCodeFilterEnum!, $first: Int!, $after: String) {
  allLiveInventory(
    where: {orderby: {field: DATE, order: DESC}, language: $lang}
    first: $first,
    after: $after
  ) {
    edges {
      node {
        title
        liveInventoryData {
          engineHours
          brand
          driveType
          enginePower
          maxPrice
          imageLinks
          brand
          isVerified
          district
        }
        slug
        id
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
} 
`;  

export const GET_ALL_STATES = gql`
  query GetAllStates{
  allStateTowns(where: {orderby: {order: ASC, field: TITLE}}) {
    edges {
      node {
        stateTownList {
          state
        }
      }
    }
  }
}
`;  
//const states = response.data.allStateTowns.edges.map(edge => edge.node.stateTownList.state);
//console.log(states); 

export const GET_ALL_TOWNS = gql`
  query GetTownsByState($state: String!) {
  allStateTowns(where: {name: $state}) {
    edges {
      node {
        stateTownList {
          townsList
          state
        }
      }
    }
  }
}
`; 
//const states = response.data.allStateTowns.edges.map(edge => edge.node.stateTownList.townsList);
//{ "state": "Maharashtra"}

export const GET_ALL_BRANDS = gql`
query GetBrands {
  brandsmodels(where: {orderby: {field: TITLE, order: ASC}}, first: 50) {
    edges {
      node {
        brandmodelFields {
          brand
          models
          brandLogo
        }
        slug
      }
    }
  }
}
`; 
//const brands = response.data.brandsmodels.edges.map(edge => edge.node.brandmodelFields.brand);
 
export const GET_ALL_MODELS_BY_BRAND = gql`
query GetModelsByBrand($brand: String!) {
  brandsmodels(where: {name: $brand}) {
    edges {
      node {
        brandmodelFields {
          brand
          models
        }
      }
    }
  }
}
`;  

// //all latest news 
// export const GET_ALL_LATEST_NEWS= gql`
// query AllLatestNews($lang: [LanguageCodeEnum!]) {
//   latestnews(where: {orderby: {field: TITLE, order: ASC}, language: $lang}) {
//     edges {
//       node {
//         contentGalleryFields {
//           badge
//           description
//           image {
//             node {
//               mediaItemUrl
//             }
//           }
//         }
//         title
//         uri
//         date
//       }
//     }
//   }
// }
// `; 

