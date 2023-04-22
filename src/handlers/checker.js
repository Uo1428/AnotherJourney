const set = require(`${process.cwd()}/Assets/Config/settings`)
module.exports = {
  async execute(ex) {
    if (!ex.config.TOKEN) {
      ex.logger("Add Bot Token.\n".bold.red + "if you dont know how to add then go there ".gray + "https://discord.gg/uoaio".bold.white + " or ".gray + "Uo#0331".bold.white)
      process.exit(1)
    }
    if (!ex.config.CLIENT_ID) {
      ex.logger("add client id".bold.red)
      process.exit(1)
    }
    if (!set.SLASH_GLOBLE && !ex.config.SUPPORT_SERVER) {
      ex.logger("add SUPPORT_SERVER (guild id) in config file".bold.red)
      process.exit(1)
    }
  }
}