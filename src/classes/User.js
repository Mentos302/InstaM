const moment = require('moment')

class User {
  async create(ctx) {
    try {
      ctx.session.user = {
        first_name: ctx.from.first_name,
        chat_id: ctx.from.id,
        lang: `ua`,
        reg_date: moment().format('DD.MM.YYYY'),
        last_activity: moment().format('DD.MM.YYYY'),
      }

      await ctx.db.User.create(ctx.session.user)
    } catch (e) {
      console.log(e)
    }
  }

  async getOne(ctx) {
    try {
      ctx.session.user = await ctx.db.User.findOne({ chat_id: ctx.from.id })
    } catch (e) {
      console.log(e)
    }
  }

  async activityUpdate(ctx) {
    try {
      await ctx.db.User.updateOne(
        { chat_id: ctx.from.id },
        { last_activity: moment().format('DD.MM.YYYY') }
      )
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new User()
