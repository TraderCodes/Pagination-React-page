import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
function App() {
   const { loading, data } = useFetch();
   const [page, setPage] = useState(0);
   const [followers, setFollowers] = useState([]);

   useEffect(() => {
      //  don't get data when is loading get it after loading
      if (loading) return;
      setFollowers(data[page]);
      // when loading changes that we set on second param
      // also everytime page changes use useEffect(() =>)
   }, [loading, page]);

   //  setpage by passing in index to page
   const handlePage = (index) => {
      setPage(index);
   };
   const nextPage = () => {
      setPage((oldpage) => {
         let nextPage = oldpage + 1;
         if (nextPage > data.length - 1) {
            nextPage = 0;
         }
         return nextPage;
      });
   };
   const prevPage = () => {
      setPage((oldpage) => {
         let prevPage = oldpage - 1;
         if (prevPage < 0) {
            prevPage = data.length - 1;
         }
         return prevPage;
      });
   };

   return (
      <main>
         {/* setting title to change from loading to pagination */}
         <div className="section-title">
            {/* change heading */}
            <h1> {loading ? 'loading...' : 'pagination'}</h1>
            <div className="underline"></div>
         </div>

         {/* display followers */}
         <section className="followers">
            <div className="container">
               {followers.map((follower) => {
                  return <Follower key={follower.id} {...follower} />;
               })}
            </div>
            {/* setup showing container after the page has load  */}
            {!loading && (
               <div className="btn-container">
                  {/* // add prev page buttton */}
                  <button className="prev-btn" onClick={prevPage}>
                     Prev
                  </button>
                  {/* return page amount */}
                  {data.map((follower, index) => {
                     return (
                        <button
                           className={`page-btn ${
                              index === page ? 'active-btn' : null
                           }`}
                           key={index}
                           onClick={() => handlePage(index)}
                        >
                           {index + 1}
                        </button>
                     );
                  })}
                  <button className="next-btn" onClick={nextPage}>
                     Prev
                  </button>
               </div>
            )}
         </section>
      </main>
   );
}

export default App;
