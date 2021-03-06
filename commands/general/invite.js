const Discord = require("discord.js")
const { Color } = require("../../config.js")

module.exports = {
  name: "invite",
  aliases: ["invites","inv","invite"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 3000,
  run: async (bot, message, args, dev) => {
    let embed = new Discord.MessageEmbed()
      .setColor(Color)
      .setTitle("**Gamble Bot**  InviteLink!")
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=758821724996370473&permissions=8&scope=bot`
      )
     
      
      message.channel.send({embeds:[embed]}).catch(err=>{
      message.author.send({embeds:[embed]})
      })
  }
}
