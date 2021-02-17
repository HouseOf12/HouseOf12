import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Error from 'next/error';
import { all } from '../../../middlewares/index';
import { useCurrentUser } from '../../../hooks/index';
import { extractUser } from '../../../lib/api-helpers';
import { findUserById } from '../../../db/index';
import { defaultProfilePicture } from '../../../lib/default';

export default function UserPage({ user }) {
  if (!user) return <Error statusCode={404} />;
  const {
    name, email, bio, profilePicture, _id
  } = user || {};
  const [currentUser] = useCurrentUser();
  const isCurrentUser = currentUser?._id === user._id;
  return (
    <>
      
      <Head>
        <title>{name}</title>
      </Head>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={profilePicture || defaultProfilePicture(_id)} width="256" height="256" alt={name} />
        <section>
          <div>
            <h2>{name}</h2>
            {isCurrentUser && (
            <Link href="/settings">
              <button type="button">Edit</button>
            </Link>
            )}
          </div>
          Bio
          <p>{bio}</p>
          Email
          <p>
            {email}
          </p>
        </section>
      </div>
      <div>
        
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  await all.run(context.req, context.res);
  const user = extractUser(await findUserById(context.req.db, context.params.userId));
  if (!user) context.res.statusCode = 404;
  return { props: { user } };
}
