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
 