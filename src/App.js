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
   }, [loading]);

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
               {data.map((follower) => {
                  return <Follower key={follower.id} {...follower} />;
               })}
            </div>
         </section>
      </main>
   );
}

export default App;
