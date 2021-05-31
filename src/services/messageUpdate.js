module.exports = async (ctx, msg, extra) => {
  await ctx.editMessageText(msg)
  if (extra) {
    await ctx.editMessageReplyMarkup(extra)
  }
}
