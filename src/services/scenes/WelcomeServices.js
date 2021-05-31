const Extra = require('telegraf/extra')
const User = require('../../classes/User')
const messageUpdate = require('../messageUpdate')

class WelcomeServices {
  enter(ctx) {
    ctx.reply(
      ctx.i18n.t('welcome.title'),
      Extra.HTML().markup((m) =>
        m.inlineKeyboard([
          [m.callbackButton(ctx.i18n.t('welcome.k1'), 'monitoring')],
          [m.callbackButton(ctx.i18n.t('welcome.k2'), 'returned')],
          [m.callbackButton(ctx.i18n.t('welcome.k3'), 'anonymstories')],
          [m.callbackButton(ctx.i18n.t('welcome.k4'), 'private')],
          [m.callbackButton(ctx.i18n.t('welcome.k5'), 'notlikers')],
          [m.callbackButton(ctx.i18n.t('welcome.k6'), 'settings')],
        ])
      )
    )
  }

  async actions(ctx) {
    if (!ctx.session.user.instagram_id) {
      ctx.scene.enter('instagram')
    }
    // switch (ctx.callbackQuery.data) {
    //   case `monitoring`:
    //     await messageUpdate(
    //       ctx,
    //       `PENIS`,
    //       Extra.markup((m) =>
    //         m.inlineKeyboard([
    //           m.callbackButton(`masoifmasofmospmfposf`, 'akslmflksamf'),
    //         ])
    //       )
    //     )
    //     break
    //   case `returned`:
    //     ctx.reply('returned')
    //     break
    // }
  }
}

module.exports = new WelcomeServices()
