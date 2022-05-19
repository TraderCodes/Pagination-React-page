import { useState, useEffect } from 'react';
import paginate from './utils';
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export const useFetch = () => {
   const [loading, setLoading] = useState(true);
   const [data, setData] = useState([]);

   const getProducts = async () => {
      const response = await fetch(url);
      const data = await response.json();
      // pass in the data from pagination in utils.js
      // which is 12 arrays of data now the data on line 7 is set to 12 arrays of users 
      
      setData(paginate(data));

      setLoading(false);
   };

   useEffect(() => {
      getProducts();
   }, []);
   return { loading, data };
};
