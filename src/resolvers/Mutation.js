const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const mutations = {
  // eslint-disable-next-line no-unused-vars
  async signin(parent, { email, password }, ctx, info) {
    // 1. check if ther is a user with that email
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`No such user found for email ${email}`);
    }
    // 2. check if their password is correct
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid Password');
    }
    // 3. generate the JWT Token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // 4. Set the cookie with the token
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
    });
    // 5. finally we return the user to the browser
    return user;
  },

  async signup(parent, args, ctx, info) {
    // lowercase the email
    const email = args.email.toLowerCase();
    // hash the password
    const password = await bcrypt.hash(args.password, 10);
    // create user in the database
    console.log(args);
    const [user] = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
          email,
          password,
          permissions: { set: ['ADMIN'] },
        },
      },
      info,
    );

    // create JWT token for them
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    //  we set the jwt as a cookie on the response
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
    });
    // finally we return the user to the browser
    return user;
  },

  signout(parent, args, ctx) {
    ctx.response.clearCookie('token');
    return { message: 'Goodbye!' };
  },

  async updateAdmin(parent, args, ctx, info) {
    // 1. login  punya hak akses dan query user login tersebut
    const { userId } = ctx.request;
    if (!userId) throw new Error('Kamu Harus Login dahulu, untuk melakukan aksi ini');
    const user = await ctx.db.query.user(
      { where: { id: userId } },
      `{
      id

      email
      admin {
        id
        nama
      }}`,
    );

    if (user.id !== userId) {
      throw new Error('Kamu tidak punya izin akses untuk melakukan ini');
    }

    // console.log(args, 'ini args');

    // // 4. update data

    const updateInfo = await ctx.db.mutation.updateUser(
      {
        where: {
          id: 'cjs0ncg9r00gd07186gzlv2e9',
        },
        data: {
          ...args.user,
          admin: {
            update: {
              ...args.admin,
            },
          },
        },
      },
      info,
    );

    // 4. return data

    return updateInfo;
  },
};

module.exports = mutations;
