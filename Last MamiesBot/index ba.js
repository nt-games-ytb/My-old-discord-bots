//#region Client
const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "*";

const ytdl = require('ytdl-core');

const queue = new Map();

var servers = {};

client.login("");
//#endregion

//#region Play
function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end",function() {
        if (server.queue[0]) play(connection, message)

        else connection.disconnect();


    });
}
//#endregion

//#region Client on
client.on("ready", () => { 
    console.log("Je suis ready !")
    client.user.setActivity("Ez des Mamies | **help | **invite")
});
//#endregion

//#region Message
client.on(`message`,message => {

    //#region Basic message
    if(message.content === "Bonjour"){
        message.reply("Bonjour à toi aussi,passe une bonne journée dans ce serveur !");
        console.log('Le bot dit bonjour');
    }

    if(message.content === "Bonsoirs"){
        message.reply("Bonsoirs à toi aussi,passe une bonne soirer dans ce serveur !");
        console.log('Le bot dit bonsoirs');
    }

    if(message.content === "Papi"){
        message.channel.send("Il dort dans sa tombe...");
        console.log('Le bot dit la tagique histoire de son mec');
    }

    if(message.content === "Qui pipe ?"){
      message.channel.send("Vas voir ItZ_DyLaNzZ#8704, il pipe **GRATUIT** !");
      console.log('Le bot dit pipe');
    }

    if(message.content === "Vas voir ItZ_DyLaNzZ#8704, il pipe **GRATUIT** !"){
      message.channel.send("Et si tu veux plus de **sensations** ! Alors vas voir sofianegg1#6977 !");
      console.log('Le bot dit pipe sofiane');
    }

    if(message.content === "Connard"){
        message.delete;
        message.channel.send(`**warn ${message.author} Cornnard`);
        console.log('Le bot dit connard');
    }

    if(message.content === "Salope"){S
        message.delete;
        message.channel.send(`**warn ${message.author} Salope`);
        console.log('Le bot dit salope');
    }

    if(message.content === "rt"){
        message.channel.send("C'est tros triste je vais pleurer !");
        console.log('Le bot dit rt');
    }

    if(message.content === "rip"){
      message.channel.send("C'est tros triste je vais pleurer !");
      console.log('Le bot dit rip');
    }

    if(message.content === "avast"){
        message.channel.send("une menace à était détécter !");
        console.log('Le bot dit avast');
    }

    if(message.content === "porno"){
        message.reply("tu n'a pas l'age pour regarder sa petit perver !!!");
        console.log('Le bot dit ne pas regarder du porno');
    }

    if(message.content === "ma co"){
        message.reply("ta co c'est de la putain de merde , tu la acheter chez lidl ou quoi !");
        console.log('Le bot dit sa co c est de la merde');
    }

    if(message.content === "mamies"){
        message.channel.send("quoi ?!");
        console.log('Le bot dit mamies');
    }

    if(message.content === "mdr"){
        message.reply("il y a rien drole !");
        console.log('Le bot dit mdr');
    }

    if(message.content === "lol"){
        message.reply("il y a rien drole !");
        console.log('Le bot dit lol');
    }

    if(message.content === "quesqui est jaune et qui attend ?"){
        message.reply("TES PTN DE DENT JAUNE ! VA LES LAVER !");
        console.log('Le bot dit de se laver les dent');
    }

    if(message.content === "suce"){
        message.channel.send("MA BITE ! https://www.youtube.com/watch?v=VAGs4Z4Iyms");
        console.log('Le bot dit ma bite');
    }

    if(message.content === "**demande de commandes"){
        message.reply("ajoute mon créateur en amis nt games#0375 ou va sur le serveur où j'ai été creer https://discord.gg/5wcx4QG et dit moi la commande que tu veux que je rajoute !");
        console.log('Le bot dit demandede commande');
    }

    if(message.content === "fdp"){
      message.delete;
      message.channel.send(`**warn ${message.author} fdp`);
        console.log('Le bot dit fdp');
    }

    var msgauthor = message.author.id;

    if(message.content === "Fdp"){
      message.delete("Fdp");
      message.channel.send(`**warn ${message.author} Fdp`);
      console.log('Le bot dit fdp');
    }

    if(message.content === "Nike ta mère"){
      message.delete("Fdp");
      message.channel.send(`**warn ${message.author} Nike ta mère`);
      console.log('Le bot dit fdp');
    }

    if(message.content === "Ntm"){
      message.delete("Fdp");
      message.channel.send(`**warn ${message.author} Nike ta mère`);
      console.log('Le bot dit fdp');
    }

    if(message.content === "jme branle sur toi"){
        message.channel.send("moi sur ta mère fdp");
        console.log('Le bot se branle');
    }

    if(message.content === "sofiane"){
        message.channel.send("Je suis un creeper !");
        console.log('Le bot dit qu il est un creeper');
    }

    if(message.content === "CTRL C"){
      message.delete("CTRL C");
      message.author.send("4993497286392567662");
      console.log('Le bot dit gazgoh');
    }

    if(message.content === "4993497286392567662"){
      message.delete("4993497286392567662");
      console.log('Le bot dit gazgoh');
    }

    if(message.content === "Suck my dick"){
        message.reply("Je suis pas ta pute enfaite !");
        console.log('Le bot dit qu il est pas une pute');
    }

    if(message.content === "Zebi"){
        message.reply("Qu'est-ce tu parle arabe toi ! Tes français !");
        console.log('Le bot dit que l autre est français');
    }

    if(message.content === "Quoi"){
        message.channel.send("Feur");
        console.log('Le bot dit feur');
    }

    if(message.content === "Feur"){
        message.channel.send("Qu'est-ce ta cette blague elle est dépasé depuis 2012");
        console.log('Le bot parle contre feur');
    }

    if(message.content === "Code créateur"){
        message.channel.send("N'oublie pas le Gode créateur : michelle");
        console.log('Le bot dit son code créateur');
    }

    if(message.content === "Maman"){
        message.channel.send("Elle je peux plus me la voir comment j'ai peux faire un gosse pareil !");
        console.log('Le bot parle de sa fille');
    }

    if(message.content === "**commandes"){
        message.channel.send("non max cette commande est toujours pas rajouter !Cheh");
        console.log('Le bot dit demande de commande');
    }

    if(message.content === "s!poke"){
        message.reply("tu joue encore à Pokemon tes vraiment un jk ! Moi aussi ji joue en secret le dit pas à mon maitre ok ?");
        console.log('Le bot dit pokemon');
    }

    if(message.content === "S!poke"){
        message.reply("tu joue encore à Pokemon tes vraiment un jk ! Moi aussi ji joue en secret le dit pas à mon maitre ok ?");
        console.log('Le bot dit pokemon');
    }

    if(message.content === "s!rmd poke"){
        message.reply("sa sert à rien d'attendre ton Pokemon viendra jamais !");
        console.log('Le bot dit pokemon attente');
    }

    if(message.content === "S!rmd poke"){
        message.reply("sa sert à rien d'attendre ton Pokemon viendra jamais !");
        console.log('Le bot dit pokemon attente');
    }

    if(message.content === "$paycheck"){
        message.reply("pay rien du tout rentre chez ta mère !");
        console.log('Le bot dit paycheck');
    }

    if(message.content === "Merci @MamiesBot"){
        message.reply("De rien !");
        console.log('Le bot dit de rien');
    }

    if(message.content === "merci"){
        message.reply("De rien !");
        console.log('Le bot dit de rien');
    }

    if(message.content === "mrc"){
        message.reply("De rien !");
        console.log('Le bot dit de rien');
    }

    if(message.content === ">mineall"){
        message.reply("mine rien du tout rentre chez ta mère !");
        console.log('Le bot dit mineall');
    }

    if(message.content === "jtm"){
        message.reply("moi aussi");
        console.log('Le bot dit jtm');
    }
    
    if(message.content === "bite"){
        message.channel.send(";;play https://youtu.be/eZ4HHZ84g-o");
        console.log('Le bot dit bite poilue');
    }

    if(message.content === ";;play https://youtu.be/eZ4HHZ84g-o"){
        message.channel.send("waiting...");
        message.delete("!play https://youtu.be/eZ4HHZ84g-o");
        console.log('Le bot dit bite poilue delete');
    }

    if(message.content === "!play https://youtu.be/eZ4HHZ84g-o"){
        message.channel.send("SONG !");
        console.log('Le bot dit SONG !');
    }
    //#endregion

    //#region **help
    if(message.content === prefix +"*help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#CC3333")
        .setTitle("COMMANDES :")
        .setDescription("Bonjours je suis la meilleurs Mamies qui soit,voici mes commandes :")
        .addField("**commandes","affiche les commandes du bot ! PAS ENCORE FONCTIONNEL")
        .addField("**invite","permet d'inviter MamiesBot dans ton serveur !")
        .addField("**statistiques","permet de recevoir tes statistiques discord en messages privés !")
        .addField("**info","donne des information sur le créateur du bot !")
        .addField("**kick","pour kick les gens du serveur !")
        .addField("**ban","pour ban les gens du serveur !")
        .addField("**clear","pour supprimés beaucoup de messages en peu de temps !")
        .addField("**demande de commandes","pour demander des commandes à rajouter !")
        .addField("**warn","permet de warn une pesonne !")
        .addField("**seewarns","permet de voir un warn d'une pesonne !")
        .addField("**deletewarns","permet de enlever un warn à une pesonne !")
        .setFooter("MENU POUR INFORMER")
        message.channel.sendMessage(help_embed);
        console.log("Un menbre du serveur a voulue savoir comment fonctionne MamiesBot")
    }
    //#endregion

    //#region **info
    if(message.content === prefix + "*info") {
        var info_embed = new Discord.RichEmbed()
        .setColor("#FFFF00")
        .setTitle("Voici les information du Créateur de MamiesBot")
        .addField("Nom et Prénom :","Toro Nicolas")
        .addField("Date de Naissance :","23/03/2005")
        .addField("Pays et Ville :","France,Nice")
        .addField("Anime Préféré :","Fairy Tail")
        .addField("Ma chaine Youtube :","https://www.youtube.com/channel/UCqI3x47OlUfndU3b9VhAwwQ?view_as=subscriber%22")
        .addField("Mon Discord :","nt games#0375")
        .addField("Mon twitter :","nt_games_ytb")
        .addField("Mon snapchat :","nicoco2303")
        .addField("Mon skype :","Toro nicolas")
        .addField("Mon instagram :","nicolas_tr")
        .addField("Mon animal péféré :","panda roux")
        .addField("Comment j'ai eu l'idée de creer ce bot :","enfait à la base je regardais NYXOO et un jour il a dit EzLesMamies et depuis Les Mamies sont restés ma marque de fabrique")
        .setFooter("MENU POUR INFORMER")
        message.channel.sendMessage(info_embed);
        console.log("Un menbre du serveur a voulue savoir qui était le créateur du bot")
    }
    //#endregion

    //#region **kick
    if(message.content.startsWith(prefix + "*kick")) {
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas le droit d'effectuer cette commande !");

        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un membre du serveur")
        }
        
        var kick = message.guild.member(message.mentions.users.first());
        if(!kick) {
            return message.channel.send("je ne sais pas si se membre existe :/")
        }

        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("Je ne peux pas kick les gens ! Il me faut les permissions !");
        }

        kick.kick().then(member => {
            message.channel.send(`${member.user.username} à été kick par ${message.author.username}`)
        });
    }
    //#endregion

    //#region **ban
    if(message.content.startsWith(prefix + "*ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas le droit d'effectuer cette commande !");

        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un membre du serveur");
        }
        
        var ban = message.guild.member(message.mentions.users.first());
        if(!ban) {
            return message.channel.send("je ne sais pas si se membre existe :/")
        }

        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("Je ne peux pas ban les gens ! Il me faut les permissions !");
        }

        ban.ban().then(member => {
            message.channel.send(`${member.user.username} à été ban par ${message.author.username}`)
        });
    }
    //#endregion

    //#region **clear
    if(message.content.startsWith(prefix + "*clear")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGE")) return message.channel.send("Vous n'avez pas le droit d'effectuer cette commande !");

        let args = message.content.split(" ").slice(1);

        if(!args[0]) return message.channel.send("Tu dois me dire un nombre de message à supprimer ![un nombre entre 1 à 100]")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]} messages ont été supprimés !`)
        })
    }
    //#endregion

    //#region **mute
    if(message.content.startsWith(prefix + "*mute")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send("Vous n'avez pas le droit d'effectuer cette commande !");

        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un membre du serveur");
        }

        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("je ne sais pas si se membre existe :/")
        }

        if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send("Je ne peux pas mute les gens ! Il me faut les permissions !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
            message.channel.send(`${mute.user.username} est mute !`);
        })
    }
    //#endregion

    //#region **unmute
    if(message.content.startsWith(prefix + "*unmute")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send("Vous n'avez pas le droit d'effectuer cette commande !");

        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un membre du serveur");
        }

        var unmute = message.guild.member(message.mentions.users.first());
        if(!unmute) {
            return message.channel.send("je ne sais pas si se membre existe :/")
        }
        
        if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send("Je ne peux pas unmute les gens ! Il me faut les permissions !");
        message.channel.overwritePermissions(unmute, { SEND_MESSAGES: true}).then(member => {
            message.channel.send(`${unmute.user.username} est unmute !`);
        })
    }
    //#endregion

    //#region Warns
    var fs = require('fs');

    let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));

    if (message.content.startsWith(prefix + "*warn")){

    if (message.channel.type === "dm") return;

    var mentionned = message.mentions.users.first();

    if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);

    if(message.mentions.users.size === 0) {

      return message.channel.send("**:x: Vous n'avez mentionnée aucun utilisateur**");

    }else{

        const args = message.content.split(' ').slice(1);

        const mentioned = message.mentions.users.first();

        if (message.member.hasPermission('MANAGE_GUILD')){

          if (message.mentions.users.size != 0) {

            if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {

              if (args.slice(1).length != 0) {

                const date = new Date().toUTCString();

                if (warns[message.guild] === undefined)

                  warns[message.guild] = {};

                if (warns[message.guild][mentioned.username] === undefined)

                  warns[message.guild][mentioned.username] = {};

                const warnumber = Object.keys(warns[message.guild][mentioned.username]).length;

                if (warns[message.guild][mentioned.username][warnumber] === undefined){

                  warns[message.guild][mentioned.username]["1"] = {"raison": args.slice(1).join(' '), time: date, user: message.author.username};

                } else {

                  warns[message.guild][mentioned.username][warnumber+1] = {"raison": args.slice(1).join(' '),

                    time: date,

                    user: message.author.username};

                }

                fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});

    message.delete();

                message.channel.send(':warning: | **'+mentionned.tag+' à été averti**');

    message.mentions.users.first().send(`:warning: **Warn |** depuis **${message.guild.name}** donné par **${message.author.username}**\n\n**Raison:** ` + args.slice(1).join(' '))

              } else {

                message.channel.send("Erreur mauvais usage: "+prefix+"*warn <user> <raison>");

              }

            } else {

              message.channel.send("Erreur mauvais usage: "+prefix+"*warn <user> <raison>");

            }

          } else {

            message.channel.send("Erreur mauvais usage: "+prefix+"*warn <user> <raison>");

          }

        } else {

          message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");

        }

      }

    }

  if (message.content.startsWith(prefix+"*seewarns")||message.content===prefix+"*seewarns") {

  if (message.channel.type === "dm") return;

if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);

    const mentioned = message.mentions.users.first();

    const args = message.content.split(' ').slice(1);

    if (message.member.hasPermission('MANAGE_GUILD')){

      if (message.mentions.users.size !== 0) {

        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {

          try {

            if (warns[message.guild.name][mentioned.username] === undefined||Object.keys(warns[message.guild.name][mentioned.username]).length === 0) {

              message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");

              return;

            }

          } catch (err) {

            message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");

            return;

          }

          let arr = [];

          arr.push(`**${mentioned.tag}** a **`+Object.keys(warns[message.guild.name][mentioned.username]).length+"** warns :eyes:");

          for (var warn in warns[message.guild.name][mentioned.username]) {

            arr.push(`**${warn}** - **"`+warns[message.guild.name][mentioned.username][warn].raison+

            "**\" warn donné par **"+warns[message.guild.name][mentioned.username][warn].user+"** le **"+warns[message.guild.name][mentioned.username][warn].time+"**");
            
          }

          message.channel.send(arr.join('\n'));

        } else {

          message.channel.send("Erreur mauvais usage: "+prefix+"*seewarns <user>");

          console.log(args);

        }

      } else {

        message.channel.send("Erreur mauvais usage: "+prefix+"*seewarns <user>");

      }

    } else {

      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");

    }

  }



  if (message.content.startsWith(prefix+"*deletewarns")||message.content===prefix+"*deletewarns") {

if (message.channel.type === "dm") return;

if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);

   const mentioned = message.mentions.users.first();

    const args = message.content.split(' ').slice(1);

    const arg2 = Number(args[1]);

    if (message.member.hasPermission('MANAGE_GUILD')){

      if (message.mentions.users.size != 0) {

        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">"){

          if (!isNaN(arg2)) {

            if (warns[message.guild.name][mentioned.username] === undefined) {

              message.channel.send(mentioned.tag+" n'a aucun warn");

              return;

            } if (warns[message.guild.name][mentioned.username][arg2] === undefined) {

              message.channel.send("**:x: Ce warn n'existe pas**");

              return;

            }

            delete warns[message.guild.name][mentioned.username][arg2];

            var i = 1;

            Object.keys(warns[message.guild.name][mentioned.username]).forEach(function(key){

              var val=warns[message.guild.name][mentioned.username][key];

              delete warns[message.guild.name][mentioned.username][key];

              key = i;

              warns[message.guild.name][mentioned.username][key]=val;

              i++;

            });

            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});

            if (Object.keys(warns[message.guild.name][mentioned.username]).length === 0) {

              delete warns[message.guild.name][mentioned.user];

            }

            message.channel.send(`Le warn de **${mentioned.tag}**\: **${args[1]}** a été enlevé avec succès!`);

            return;

          } if (args[1] === "tout") {

            delete warns[message.guild.name][mentioned.username];

            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});

            message.channel.send(`Les warns de **${mentioned.tag}** a été enlevé avec succès!`);

            return;

          } else {

            message.channel.send("Erreur mauvais usage: "+prefix+"*deletewarns <utilisateur> <nombre>");

          }

        } else {

          message.channel.send("Erreur mauvais usage: "+prefix+"*deletewarns <utilisateur> <nombre>");

        }

      } else {

       message.channel.send("Erreur mauvais usage: "+prefix+"*deletewarns <utilisateur> <nombre>");

      }

    } else {

      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");

    }

  }
  //#endregion

  //#region Statistiques
    if(!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) { 
        case "*statistiques":

        var userCreateDate = message.author.createdAt.toString().split(" ");
        var msgauthor = message.author.id;

        var stats_embed = new Discord.RichEmbed()

        .setColor("#66FF99")
        .setTitle(`Statistique du membre : ${message.author.username}`)
        .addField(`ID du membre :id:`, msgauthor, true)
        .addField("Date de création du memebre :", userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
        .setThumbnail(message.author.avatarURL)
        message.reply("Regarde tes messages privés ! Tu as recu tes statistiques !")
        message.author.send({embed: stats_embed});
        break;
        //#endregion

    //#region Music
    case "play":

    if (!args[1]) {

    message.channel.sendMessage("Tu dois m’indiquer un lien YouTube"); 

    return;

  }

    if(!message.member.voiceChannel) {

    message.channel.sendMessage(":x: Tu dois être dans un salon vocal"); 

    return;

  }


    if(!servers[message.guild.id]) servers[message.guild.id] = {

    queue: []

  };


  var server = servers[message.guild.id];


  server.queue.push(args[1]);

  if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {

  play(connection, message) 

  });

  break; 

  case "skip":

    if(!message.member.voiceChannel) {

    message.channel.sendMessage(":x: Tu dois être dans un salon vocal"); 

    return;

  }

    var server = servers[message.guild.id];

    if(server.dispatcher) server.dispatcher.end();

    break;

  case "stop":

    if(!message.member.voiceChannel) 
    
    return message.channel.send(":x: Tu dois être dans un salon vocal");

    message.member.voiceChannel.leave();

    break;
  
  }
  //#endregion
});
//#endregion

//#region ez
client.on(`message`,message => {

    if(message.content === "ez"){
        message.reply("Toi aussi tes EZ sale random !");
        console.log('Le Bot empêche de ez les gens');
    }

    if(message.content === "Ez"){
        message.channel.send("Toi aussi tes EZ sale random !");
        console.log('Le Bot empêche de ez les gens');
    }

    if(message.content === "ez mec"){
        message.channel.send("mec tes EZ sale random !");
        console.log('Le Bot empêche de ez les mecs');
    }
});
//#endregion

//#region tg
client.on(`message`,message => {

    if(message.content === "tg"){
        message.delete;
        message.channel.send(`**warn ${message.author} tg`);
        console.log('Le bot dit tg');
    }

    if(message.content === "Tg"){
        message.delete;
        message.channel.send(`**warn ${message.author} tg`);
        console.log('Le bot dit tg');
    }

    if(message.content === "TG"){
        message.delete;
        message.channel.send(`**warn ${message.author} tg`);
        console.log('Le bot dit tg');
    }
});
//#endregion

//#region **invite
client.on(`message`,message => {

    if(message.content === "**invite"){
        message.channel.send("m'ajouter à ton serveur:https://discordapp.com/oauth2/authorize?client_id=482206540489555968&permissions=-1&scope=bot");
        console.log('Le bot donne une invation pour aller sur le serveur des autres');
    }
});
//#endregion

//#region  **dog
client.on(`message`,message => {
    if(message.content.startsWith(prefix + "*dog")) {

        var chien = [

            "https://media.giphy.com/media/9Cn2niGNwj2lq/source.gif",
            "https://img.buzzfeed.com/buzzfeed-static/static/2013-12/enhanced/webdr06/3/12/anigif_enhanced-buzz-14140-1386090436-22.gif?downsize=715:*&output-format=auto&output-quality=auto"
        ];
       
        var gif = chien[Math.floor(Math.random() * chien.length)];

        var dog_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('CHIEN :')
        .setImage(gif)
        //.setThumbnail(gif)
        .setFooter('photo de chien')
        message.channel.send(dog_embed);
    }
    
    if(message.content.startsWith(prefix + "*color")) {

        var couleur = [

            "bleu",
            "rouge"
        ];
       
        var message = couleur[Math.floor(Math.random() * couleur.length)];

        var color_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('COULEUR RANDOM :')
        .addField(message)
        .setFooter('couleur random')
        message.channel.send(color_embed);
    }
});
//#endregion