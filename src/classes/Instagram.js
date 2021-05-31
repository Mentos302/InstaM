const InstagramClient = require('instagram-web-api')
const { username, password } = process.env

const InstagramAPI = new InstagramClient({ username, password })

class Instagram {
  async getUserID(username) {
    await InstagramAPI.login()
    const user = await InstagramAPI.getUserByUsername({ username })

    return user ? user.id : null
  }
}

module.exports = new Instagram()
