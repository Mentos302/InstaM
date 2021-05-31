module.exports = (bot) => {
  const session = require('telegraf/session')
  const Stage = require('telegraf/stage')
  const updateHandler = require('../services/updateHandler')

  const WelcomeScene = require('./scenes/WelcomeScene')()
  const InstagramScene = require('./scenes/InstagramScene')()

  const stage = new Stage([WelcomeScene, InstagramScene], {
    ttl: 999,
  })

  bot.use(
    session({
      getSessionKey: (ctx) =>
        ctx.from &&
        `${ctx.from.id}:${(ctx.chat && ctx.chat.id) || ctx.from.id}`,
    })
  )

  bot.use(stage.middleware())

  bot.use((ctx) => updateHandler(ctx))
}
