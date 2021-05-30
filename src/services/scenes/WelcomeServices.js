const Extra = require('telegraf/extra')

class WelcomeServices {
  enter(ctx) {
    ctx.reply(ctx.i18n.t('welcome'), Extra.HTML())
  }
}

module.exports = new WelcomeServices()
