const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "+";

const ytdl = require('ytdl-core');

const queue = new Map();

var servers = {};

client.login("");

function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end",function() {
        if (server.queue[0]) play(connection, message)

        else connection.disconnect();


    });
}

client.on("ready", () => { 
    console.log("Je suis ready !")
    client.user.setActivity("Solary bot | ++help | ++invite")
});

client.on(`message`,message => {

    if(message.content === "Bonjours"){
        message.reply("Bonjours à toi aussi,passe une bonne journée dans ce serveur !");
        console.log('Le bot dit bonjours');
    }

    if(message.content === "Bonsoirs"){
        message.reply("Bonsoirs à toi aussi,passe une bonne soirer dans ce serveur !");
        console.log('Le bot dit bonsoirs');
    }

    if(message.content === "rt"){
        message.channel.send("C'est tros triste je vais pleurer !");
        console.log('Le bot dit rt');
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

    if(message.content === "++demande de commandes"){
        message.reply("ajoute mon créateur en amis nt games#0375 ou va sur le serveur où j'ai été creer https://discord.gg/8auWquk et dit moi la commande que tu veux que je rajoute !");
        console.log('Le bot dit demandede commande');
    }

    if(message.content === "fdp"){
        message.reply("va voir ta mère après on parle !");
        console.log('Le bot dit fdp');
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

    if(message.content === "Ping !"){
        message.channel.send("Pong !");
        console.log('Le bot dit ping');
    }

    if(message.content === "Pong !"){
        message.channel.send("Ping !");
        console.log('Le bot dit pong');
    }

    if(message.content === "Alphabet"){
        message.channel.send("A");
        console.log('Le bot dit A');
    }

    if(message.content === "A"){
        message.channel.send("B");
        console.log('Le bot dit B');
    }

    if(message.content === "B"){
        message.channel.send("C");
        console.log('Le bot dit C');
    }

    if(message.content === "C"){
        message.channel.send("D");
        console.log('Le bot dit D');
    }

    if(message.content === "D"){
        message.channel.send("E");
        console.log('Le bot dit E');
    }

    if(message.content === "E"){
        message.channel.send("F");
        console.log('Le bot dit F');
    }

    if(message.content === "F"){
        message.channel.send("G");
        console.log('Le bot dit G');
    }

    if(message.content === "G"){
        message.channel.send("H");
        console.log('Le bot dit H');
    }

    if(message.content === "H"){
        message.channel.send("I");
        console.log('Le bot dit I');
    }

    if(message.content === "I"){
        message.channel.send("J");
        console.log('Le bot dit J');
    }

    if(message.content === "J"){
        message.channel.send("K");
        console.log('Le bot dit K');
    }

    if(message.content === "K"){
        message.channel.send("L");
        console.log('Le bot dit L');
    }

    if(message.content === "L"){
        message.channel.send("M");
        console.log('Le bot dit M');
    }

    if(message.content === "M"){
        message.channel.send("N");
        console.log('Le bot dit N');
    }

    if(message.content === "N"){
        message.channel.send("O");
        console.log('Le bot dit O');
    }

    if(message.content === "O"){
        message.channel.send("P");
        console.log('Le bot dit P');
    }

    if(message.content === "P"){
        message.channel.send("Q");
        console.log('Le bot dit Q');
    }

    if(message.content === "Q"){
        message.channel.send("R");
        console.log('Le bot dit R');
    }

    if(message.content === "R"){
        message.channel.send("S");
        console.log('Le bot dit S');
    }

    if(message.content === "S"){
        message.channel.send("T");
        console.log('Le bot dit T');
    }

    if(message.content === "T"){
        message.channel.send("U");
        console.log('Le bot dit U');
    }

    if(message.content === "U"){
        message.channel.send("V");
        console.log('Le bot dit V');
    }

    if(message.content === "V"){
        message.channel.send("W");
        console.log('Le bot dit W');
    }

    if(message.content === "W"){
        message.channel.send("X");
        console.log('Le bot dit X');
    }

    if(message.content === "X"){
        message.channel.send("Y");
        console.log('Le bot dit Y');
    }

    if(message.content === "Y"){
        message.channel.send("Z");
        console.log('Le bot dit Z');
    }

    if(message.content === "Z"){
        message.channel.send("Voila c'est finis maintenant tu connais l'alphabet donc je suis simpa je te le re dit");
        console.log('Le bot dit Voila ...');
    }

    if(message.content === "Voila c'est finis maintenant tu connais l'alphabet donc je suis simpa je te le re dit"){
        message.channel.send("Alphabet");
        console.log('Le bot dit Alphabet');
    }

    if(message.content === "!play https://youtu.be/eZ4HHZ84g-o"){
        message.channel.send("SONG !");
        console.log('Le bot dit SONG !');
    }


    if(message.content === prefix +"+help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#CC3333")
        .setTitle("COMMANDES :")
        .setDescription("Bonjours je suis solary bot, voici mes commandes :")
        .addField("++commandes","affiche les commandes du bot ! PAS ENCORE FONCTIONNEL")
        .addField("++invite","permet d'inviter MamiesBot dans ton serveur !")
        .addField("++statistiques","permet de recevoir tes statistiques discord en messages privés !")
        .addField("++info","donne des information sur le créateur du bot !")
        .addField("++kick","pour kick les gens du serveur !")
        .addField("++ban","pour ban les gens du serveur !")
        .addField("++clear","pour supprimés beaucoup de messages en peu de temps !")
        .addField("++demande de commandes","pour demander des commandes à rajouter !")
        .addField("++warn","permet de warn une pesonne !")
        .addField("++seewarns","permet de voir un warn d'une pesonne !")
        .addField("++deletewarns","permet de enlever un warn à une pesonne !")
        .setFooter("MENU POUR INFORMER")
        message.channel.sendMessage(help_embed);
        console.log("Un menbre du serveur a voulue savoir comment fonctionne MamiesBot")
    }

    if(message.content === prefix + "+info") {
        var info_embed = new Discord.RichEmbed()
        .setColor("#FFFF00")
        .setTitle("Voici les information du Créateur de Solary Bot")
        .addField("Nom et Prénom :","Nexus et nt games")
        .addField("Date de Naissance :","?")
        .addField("Pays et Ville :","?")
        .addField("Anime Préféré :","?")
        .addField("Ma chaine Youtube :","?")
        .addField("Mon Discord :","?")
        .addField("Mon twitter :","?")
        .addField("Mon snapchat :","?")
        .addField("Mon skype :","?")
        .addField("Mon instagram :","?")
        .addField("Mon animal péféré :","?")
        .addField("Comment j'ai eu l'idée de creer ce bot :","?")
        .setFooter("MENU POUR INFORMER")
        message.channel.sendMessage(info_embed);
        console.log("Un menbre du serveur a voulue savoir qui était le créateur du bot")
    }

    if(message.content.startsWith(prefix + "+kick")) {
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

    if(message.content.startsWith(prefix + "+ban")) {
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

    if(message.content.startsWith(prefix + "+clear")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGE")) return message.channel.send("Vous n'avez pas le droit d'effectuer cette commande !");

        let args = message.content.split(" ").slice(1);

        if(!args[0]) return message.channel.send("Tu dois me dire un nombre de message à supprimer ![un nombre entre 1 à 100]")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]} messages ont été supprimés !`)
        })
    }

    if(message.content.startsWith(prefix + "+mute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas le droit d'effectuer cette commande !");

        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un membre du serveur");
        }

        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("je ne sais pas si se membre existe :/")
        }

        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je ne peux pas mute les gens ! Il me faut les permissions !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
            message.channel.send(`${mute.user.username} est mute !`);
        })
    }

 if(message.content.startsWith(prefix + "+unmute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas le droit d'effectuer cette commande !");

        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un membre du serveur");
        }

        var unmute = message.guild.member(message.mentions.users.first());
        if(!unmute) {
            return message.channel.send("je ne sais pas si se membre existe :/")
        }

        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je ne peux pas unmute les gens ! Il me faut les permissions !");
        message.channel.overwritePermissions(unmute, { SEND_MESSAGES: true}).then(member => {
            message.channel.send(`${unmute.user.username} est unmute !`);
        })
    }

    var fs = require('fs');

let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));

if (message.content.startsWith(prefix + "+warn")){

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

            if (warns[message.guild.id] === undefined)

              warns[message.guild.id] = {};

            if (warns[message.guild.id][mentioned.id] === undefined)

              warns[message.guild.id][mentioned.id] = {};

            const warnumber = Object.keys(warns[message.guild.id][mentioned.id]).length;

            if (warns[message.guild.id][mentioned.id][warnumber] === undefined){

              warns[message.guild.id][mentioned.id]["1"] = {"raison": args.slice(1).join(' '), time: date, user: message.author.id};

            } else {

              warns[message.guild.id][mentioned.id][warnumber+1] = {"raison": args.slice(1).join(' '),

                time: date,

                user: message.author.id};

            }

            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});

message.delete();

            message.channel.send(':warning: | **'+mentionned.tag+' à été averti**');

message.mentions.users.first().send(`:warning: **Warn |** depuis **${message.guild.name}** donné par **${message.author.username}**\n\n**Raison:** ` + args.slice(1).join(' '))

          } else {

            message.channel.send("Erreur mauvais usage: "+prefix+"+warn <user> <raison>");

          }

        } else {

          message.channel.send("Erreur mauvais usage: "+prefix+"+warn <user> <raison>");

        }

      } else {

        message.channel.send("Erreur mauvais usage: "+prefix+"+warn <user> <raison>");

      }

    } else {

      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");

    }

  }

}



  if (message.content.startsWith(prefix+"+seewarns")||message.content===prefix+"+seewarns") {

if (message.channel.type === "dm") return;

if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);

    const mentioned = message.mentions.users.first();

    const args = message.content.split(' ').slice(1);

    if (message.member.hasPermission('MANAGE_GUILD')){

      if (message.mentions.users.size !== 0) {

        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {

          try {

            if (warns[message.guild.id][mentioned.id] === undefined||Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {

              message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");

              return;

            }

          } catch (err) {

            message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");

            return;

          }

          let arr = [];

          arr.push(`**${mentioned.tag}** a **`+Object.keys(warns[message.guild.id][mentioned.id]).length+"** warns :eyes:");

          for (var warn in warns[message.guild.id][mentioned.id]) {

            arr.push(`**${warn}** - **"`+warns[message.guild.id][mentioned.id][warn].raison+

            "**\" warn donné par **"+message.guild.members.find("id", warns[message.guild.id][mentioned.id][warn].user).user.tag+"** a/le **"+warns[message.guild.id][mentioned.id][warn].time+"**");

          }

          message.channel.send(arr.join('\n'));

        } else {

          message.channel.send("Erreur mauvais usage: "+prefix+"+seewarns <user> <raison>");

          console.log(args);

        }

      } else {

        message.channel.send("Erreur mauvais usage: "+prefix+"+seewarns <user> <raison>");

      }

    } else {

      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");

    }

  }





  if (message.content.startsWith(prefix+"+deletewarns")||message.content===prefix+"+deletewarns") {

if (message.channel.type === "dm") return;

if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);

   const mentioned = message.mentions.users.first();

    const args = message.content.split(' ').slice(1);

    const arg2 = Number(args[1]);

    if (message.member.hasPermission('MANAGE_GUILD')){

      if (message.mentions.users.size != 0) {

        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">"){

          if (!isNaN(arg2)) {

            if (warns[message.guild.id][mentioned.id] === undefined) {

              message.channel.send(mentioned.tag+" n'a aucun warn");

              return;

            } if (warns[message.guild.id][mentioned.id][arg2] === undefined) {

              message.channel.send("**:x: Ce warn n'existe pas**");

              return;

            }

            delete warns[message.guild.id][mentioned.id][arg2];

            var i = 1;

            Object.keys(warns[message.guild.id][mentioned.id]).forEach(function(key){

              var val=warns[message.guild.id][mentioned.id][key];

              delete warns[message.guild.id][mentioned.id][key];

              key = i;

              warns[message.guild.id][mentioned.id][key]=val;

              i++;

            });

            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});

            if (Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {

              delete warns[message.guild.id][mentioned.id];

            }

            message.channel.send(`Le warn de **${mentioned.tag}**\': **${args[1]}** a été enlevé avec succès!`);

            return;

          } if (args[1] === "tout") {

            delete warns[message.guild.id][mentioned.id];

            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});

            message.channel.send(`Les warns de **${mentioned.tag}** a été enlevé avec succès!`);

            return;

          } else {

            message.channel.send("Erreur mauvais usage: "+prefix+"+deletewarns <utilisateur> <nombre>");

          }

        } else {

          message.channel.send("Erreur mauvais usage: "+prefix+"+deletewarns <utilisateur> <nombre>");

        }

      } else {

       message.channel.send("Erreur mauvais usage: "+prefix+"+deletewarns <utilisateur> <nombre>");

      }

    } else {

      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");

    }

  }

    if(!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) { 
        case "+statistiques":

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

});

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

client.on(`message`,message => {

    if(message.content === "tg"){
        message.reply("c'est toi tg ta mère la pute grosse pétasse !");
        console.log('Le bot dit tg');
    }

    if(message.content === "Tg"){
        message.reply("c'est toi tg ta mère la pute grosse pétasse !");
        console.log('Le bot dit tg');
    }

    if(message.content === "TG"){
        message.reply("c'est toi tg ta mère la pute grosse pétasse !");
        console.log('Le bot dit tg');
    }
});

client.on(`message`,message => {

    if(message.content === "++invite"){
        message.channel.send("m'ajouter à ton serveur:https://discordapp.com/oauth2/authorize?client_id=539189103866937356&permissions=-1&scope=bot");
        console.log('Le bot donne une invation pour aller sur le serveur des autres');
    }
});

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