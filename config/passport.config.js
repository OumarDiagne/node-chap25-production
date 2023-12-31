const app = require("../app");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { findUserPerMail, findUserPerId } = require("../queries/user.queries");

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await findUserPerId(id);
    if (user) {
      done(null, user);
    }
  } catch (error) {
    done(error);
  }
});
passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      try {
        const user = await findUserPerMail(email);
        if (user) {
          const match = await user.comparePassword(password);
          if (match) {
            done(null, user);
          } else {
            done(null, false, { message: "Wrong password" });
          }
        } else {
          done(null, false, { message: "User not found" });
        }
      } catch (error) {
        done(error);
      }
    }
  )
);
