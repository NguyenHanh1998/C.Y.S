const models = require("../Models");
import bcrypt from "bcrypt";
const q = require("q");

class UserService {
  constructor(req) {
    this.req = req;
    this.model = models["users"];
  }

  login() {
    let deffered = q.defer();
    const email = this.req.body.email;
    this.model
      .findOne({ where: { email } })
      .then(async (user) => {
        const userDetails = user.get();
        const passwordMatch = await bcrypt.compare(
          this.req.body.password,
          userDetails.password
        );

        if (!passwordMatch) deffered.reject({ error: "password is incorrect" });
        else deffered.resolve(userDetails);
      })
      .catch((error) => {
        deffered.reject(error);
      });

    return deffered.promise;
  }
}

module.exports = UserService;
