import React from 'react';
import { LiveInventoryAPIURL } from '../utils/constants';
 
const HomePage = ({ data }) => {
  return (
    <div>
      <h1>This is for testing purpose</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
 
export async function getStaticProps() {
  const apiUrl = LiveInventoryAPIURL;
 
  console.log('Starting getStaticProps');
 
  let data = {};
  try {
    const res = await fetch(apiUrl);
    console.log('API response status:', res.status);
    if (!res.ok) throw new Error('Failed to fetch data');
    data = await res.json();
    console.log('Fetched data:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
 
  console.log('Returning data from getStaticProps');
 
  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}
 
export default HomePage;