// import nc from 'next-connect';
// import { all } from '../../../../middlewares/index';
// import { findUserById } from '../../../../db/index';
// import { extractUser } from '../../../../lib/api-helpers';

// const handler = nc();

// handler.use(all);



// handler.post(async (req, res) => {
//   const journal_entry = extractUser(await findUserById(req.db, req.query.userId));
//   if (user) res.setHeader('cache-control', `public, max-age=${maxAge}`);
//   res.send({ user });
// });

// export default handler;
