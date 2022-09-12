require("dotenv").config({ path: `${__dirname}/.env` })

module.exports.config = {
  GA_TACKING_ID: process.env.GA_TRACKING_ID,
}
