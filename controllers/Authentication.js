const db = require("../util/database");
const bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  db.execute("SELECT * FROM users WHERE user_email='" + email + "'")
    .then((result) => {
      res.status(200).json(result[0]);
      if (result[0].length == 0) {
        if (confirmPassword == password) {
          const salt = 12;
          bcrypt.hash(password, salt).then((hashedPassword) => {
            db.execute(
              "INSERT INTO users(user_name, user_email, password) VALUES (?, ?, ?)",
              [userName, email, hashedPassword]
            ).then(() => {
              res.status(200).json({ message: "signedup" });
            });
          });
        } else {
          res.status(200).json({ message: "confirm password please" });
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.login = (req, res) => {
  res.status(200).json({ message: "Logedin" });
};
