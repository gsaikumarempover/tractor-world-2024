import { gql } from '@apollo/client';

export const HOME_SLIDERS = gql`
  query HomePageSlider($lang: LanguageCodeFilterEnum!) {
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
  }
`;
 
export const GET_LIVE_INVENTORY = gql`
  query GetLiveInventory($lang: LanguageCodeFilterEnum!) { 
    allLiveInventory(where: {orderby: {field: DATE, order: DESC}, language: $lang}) {
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
          }
          slug 
          id 
        }
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
        }
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


///get testimonails  

export const GET_ALL_TESTIMONIALS = gql`
query AllTestimonails($lang: LanguageCodeFilterEnum!) {
  allTestimonial(where: {orderby: {field: DATE, order: ASC}, language: $lang}) {
    nodes {
      testimonials {
        description
        tittle
        videoUrl
        tesimonialImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
}
`; 

///all content gallery


export const GET_ALL_CONTENT_GALLERY = gql`
query AllContentGallery($lang: [LanguageCodeEnum!]) {
  contentgallerys(where: {orderby: {field: DATE, order: ASC}, languages: $lang}) {
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
}
`; 

//all latest news

export const GET_ALL_LATEST_NEWS= gql`
query AllLatestNews($lang: [LanguageCodeEnum!]) {
  latestnews(where: {orderby: {field: TITLE, order: ASC}, languages: $lang}) {
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

