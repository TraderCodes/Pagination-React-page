import React from 'react';

const Follower = ({ avatar_url, html_url, login }) => {
   return (
      <article className="card">
         <img src={avatar_url} alt="none" />
         <h4>{login}</h4>
         <a href={html_url} className="btn">Go to Profile</a>
      </article>
   );
};

export default Follower;
