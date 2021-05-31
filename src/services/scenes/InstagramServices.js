const Extra = require('telegraf/extra')
const Instagram = require('../../classes/Instagram')
const messageUpdate = require('../messageUpdate')

class InstagramServices {
  async enter(ctx) {
    await messageUpdate(ctx, ctx.i18n.t('instagram.title'))
  }

  async getUserID(ctx) {
    ctx.session.instagram_id = await Instagram.getUserID(ctx.message.text)

    // if (!ctx.session.instagram_id) {
    //   messageUpdate(ctx, ctx.i18n.t('instagram.e404'))
    // }
  }
}

module.exports = new InstagramServices()
