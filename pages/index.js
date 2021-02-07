import React from 'react';
import { useCurrentUser } from '../hooks/index.js';


const IndexPage = () => {
  const [user] = useCurrentUser();

  return (
    <>
      <style jsx>
        {`
          p {
            text-align: center;
            color: #888;
          }
          h3 {
            color: #555;
          }
        `}
      </style>
      <div style={{ marginBottom: '2rem' }}>
        <h2>
          Hello,
          {' '}
          {user ? user.name : 'stranger'}
          !
        </h2>
        
      </div>
      <div>
        
        
        
      </div>
    </>
  );
};
export default IndexPage;