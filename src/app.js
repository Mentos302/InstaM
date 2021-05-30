const { Telegraf } = require('telegraf')
const I18n = require('telegraf-i18n')
const path = require('path')
const getScenes = require('./contollers/scenesController')
const { db } = require('./database')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.catch((error) => {
  console.log('Oops', error)
})

const i18n = new I18n({
  directory: path.resolve(__dirname, 'locales'),
  defaultLanguage: 'ua',
  defaultLanguageOnMissing: true,
})

bot.use(i18n.middleware())

bot.context.db = db
bot.context.i18n = i18n

getScenes(bot)

db.connection.once('open', async () => {
  console.log('Connected to MongoDB')
  bot.launch().then(() => {
    console.log('Bot has been started ...')
  })
})
