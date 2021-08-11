const Discord = require("discord.js");
const db = require('wio.db');
exports.run = (client, message, args) => {
  const narcosmisafir = message.guild.roles.cache.find(r => r.id === "KAYITSIZ ID"); 
  const nkızkayıt = message.guild.roles.cache.find(r => r.id === "KIZ ID"); 
  const log = message.guild.channels.cache.find(c => c.id === "LOG ID"); 
  const tag = "TAG"; //tagınız
  if(!message.member.roles.cache.array().filter(r => r.id === "KAYIT YETKILISI ID")[0]) { 
    return message.channel.send("Yetkiniz yetersiz");
  } else {
    let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("**Kayıt Edebilmem İçin Bir ``İsim`` Girmelisin.**")
      if(!yas) return message.channel.send("**Kayıt Edebilmem İçin Bir ``Yaş`` Girmelisin.**")
    c.roles.add(nkızkayıt)
    c.roles.remove(narcosmisafir)
    c.setNickname(`${tag} ${nick} | ${yas}`)
        const narcoscod = new Discord.MessageEmbed()
    .setDescription(`
:white_check_mark: Kayıt Başarılı :white_check_mark:

• Kaydı Yapılan Üye: **${c.user.tag}**
• Değiştirilen İsim: ${tag} ${nick} | ${yas}
• Verilen Rol: ${nkızkayıt}
`)
         .setFooter('Narcos Kayıt Sistemi')
     message.channel.send(narcoscod)
    
    

    const narcos = new Discord.MessageEmbed()
    .setDescription(`
**Bir Kadın Üye Kayıt Oldu! Aşağıda Bilgiler Yazmakta.**

• Kaydı Yapılan Üye: **${c.user.tag}**
• Kaydı Yapan Yetkili: **${message.author.tag}**
• Değiştirilen İsim: ${tag} ${nick} | ${yas}

**Rol Bilgileri Aşağıda Yazmakta.**

• Verilen Rol: ${nkızkayıt}
• Alınan Rol: ${narcosmisafir}

`)
    .setFooter('Narcos Kayıt Sistemi')
   .setColor('RED')
    log.send(narcos)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k","bayan","kadın"],
  permLevel: 0
};
exports.help = {
  name: "kız",
  description: "",
  usage: ""
};
   
