const User = require('../classes/User')

module.exports = async (ctx) => {
  await User.getOne(ctx)

  if (!ctx.session.user) {
    await User.create(ctx)
  } else {
    await User.activityUpdate(ctx)
  }

  ctx.scene.enter('welcome')
}
