module.exports = async (ctx) => {
  const moment = require('moment')

  //   const user = await ctx.db.User.findOne({ chat_id: ctx.from.id })

  //   if (!user) {
  //     await ctx.db.User.create({
  //       first_name: ctx.from.first_name,
  //       chat_id: ctx.from.id,
  //       lang: `ua`,
  //       reg_date: moment().format('DD.MM.YYYY'),
  //     })
  //   }

  console.log(ctx.from)
  ctx.scene.enter('welcome')
}
