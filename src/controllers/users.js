const jwt = require("jsonwebtoken")
const { readFile } = require("../daos/index")

const dbFilePath = `${__dirname}../../../data/user-db.json`

module.exports = {
  authenticate: async (req, res, next) => {
    if (Object.keys(res.locals)) return next()
    const adminData = await readFile(dbFilePath)
    //NOTE: match if username & password are equal to the ones from user-db.json
    /** if true:
     * const token = jwt.sign({ id: userInfo._id }, req.app.get('secretKey'), { expiresIn: '1h' });
     * res.json({ status: 200, data: { token } });
     */
    /**
     * else:
     * res.locals.status = 400
     * res.locals.error = "Invalid username/password !"
     * next();
     */
     const {username, password} = req.body;
     if (
         adminData.username === username &&
         adminData.password === password
     ) {
         const token = jwt.sign(
             { id: adminData.id },
             req.app.get("secretKey"),
             { expiresIn: "2h" }
         );
         res.json({status: 200, data: {token}});
     } else {
         res.locals.status = 400;
         res.locals.error = "!!!Invalid username or password!!!";
         next();
     }
  },
}
