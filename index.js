 
const aoijs = require("aoi.js");

const bot = new aoijs.AoiClient({
      fetchInvites: true,
  token: "MTAyMjkzNTk2NjYwNTkwNTk0MA.GduX5S.RLIIWCJ5nL4U_wCt_CdK98tymCxcvOfz96CGgM", //Discord Bot Token
  prefix: "m!", //Customizable
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  fetchInvites: true, 
mobile: false, //True or false

})


bot.command({
  name: "ping",
  prototype: "slash",
  code: `
  $thumbnail[]
  $botTyping
  $title[Ping Of Bot]
  $description[
  
  **Message Latency**
   $messagePing ms
   
  **Websocket Ping**
   \`$ping\``
});

bot.status({
  status: 'online', 
  type: 'WATCHING', 
  text: `$guildCount Servers | m!help`
}) 

bot.readyCommand({
  channel: "",
  code: `$log[
  ─━━━━━━━READY━━━━━━━━━━━━━━━━━─
  Client: Matric
  Ping: $ping ms
  Bot Creator: ! 𝙺𝚗𝚘𝚠𝚗𝙰𝚜𝙳𝚎𝚎𝚙𝚊𝚔#4221
  Commands loaded: $commandsCount
  ─━━━━━━━━━━READY━━━━━━━━━━━━━━─
  ]`
})

bot.command({
  name: "help", //Trigger name (command name)
  code: `
$thumbnail[https://media.discordapp.net/attachments/836806934807314442/1024377047621042197/20220927_231733.jpg?width=406&height=406]
$title[My Commands]
$description[
**__Economy__**
  **m!bal**
  **m!search**
  **m!with**

**__Others__**
 **m!serverinfo** (Give The Information About The Server)
 **m!botinfo** (Gives The Informtion About The Bot)
  **m!invite** (invite bot)
  **m!support** (support server)
  **m!sm** (slowmode)
  **m!server-invite** (gets ur server invite)
  **m!avatar** (gets ur avatar)
  **m!server-icon** (gets ur server icon)
  **m!channel-id** (if u want a channel id go to a channel and do m!channel-id u will get channel id)
  **m!server-banner** (gets ur server banner. if there is no banner for server it will not send any message)
  **m!vote** (vote bot now)
  **m!uptime** (shows uptime of bot)
  **m!say** (do m!say and ur message it will send ur message what you wrote
  **m!calculator**
  **m!userinfo** (do m!userinfo or m!ui or m!whois to get a specific user information)
  **m!say**

**__Moderation__**
  **m!kick**
  **m!mute** (mutes a user, first do m!setmute @role)
  **m!membercount** (displays the how many members are in server)
  **m!purge** (do m!purge(number to purge))


**__Stats__**
 **Guilds**: $guildCount
 **Commands**: $commandsCount
 **Ping**: $pingms
 **Made By**: [KnownAsDeepak#3773](https://discord.com/users/808172291811967046)


$color[Blue]
$footer[Matric 🔥;https://media.discordapp.net/attachments/836806934807314442/1024377047621042197/20220927_231733.jpg?width=406&height=406]

]`
})


bot.command({
 name: "purge",
 aliases: ['clear'],
 description: "This command will allow you to delete the amount of messages you request.",
 usage: "purge <amount> [userID]",
 permissions: ["sendMessages", "manageMessages"],
 cooldown: "8s",
 $if: "old",
 code: `
$if[$message[2]==]
$author[1;$username[$clientid] | Purged;$useravatar[$clientid]]
$description[1;Successfully purged $abbreviate[$message[1]] $replaceText[$replaceText[$checkCondition[$message[1]>1];true;messages];false;message] in <#$channelID>.]
$deleteIn[3s]
$clear[$message[1]]
$onlyPerms[managemessages;{newEmbed:{author:$username[$clientid] | Error:$useravatar[$clientid]}{description:You don't have the require permission.Permissions missing: \`MANAGE_MESSAGES\`}{color:Red}}]
$onlyBotPerms[managemessages;{newEmbed:{author:$username[$clientid] | Error:$useravatar[$clientid]}{description:I don't have enough perms to execute this command. Permissions missing: \`MANAGE_MESSAGES\`.}{color:Red}}]
$onlyif[$isnumber[$message[1]]==true;{newEmbed:{author:$username[$clientid] | Error:$useravatar[$clientid]}{description:Please give a valid amount.}{color:Red}}]
$endif`

})

bot.command({
  name: "search",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[500;1000]];$authorID]
$title[Search]
$thumbnail[$userAvatar[$authorID]]
$color[Green]
$description[You searched in your $randomText[Pocket;Purse;Apartment] and you got 💸$$random[500;1000]
]
$globalCooldown[35s;Try Searching again in
 %time%]`
});

bot.command({
  name: "bal",
  code: `$onlyIf[$isBot[$mentioned[1;true]]!=true;Discord bots dont have a balance]
$thumbnail[$userAvatar[$mentioned[1;true]]]
$color[Black]
$title[$username[$mentioned[1;true]]'s Balance]
$description[
$addField[💳Wallet;
$$numberSeparator[$getGlobalUserVar[Wallet;$mentioned[1;true]]]]

$addField[🏦 Bank;
$$numberSeparator[$getGlobalUserVar[Bank;$mentioned[1;true]]]]

$addField[📊 Net Worth;
$$numberSeparator[$sum[$getGlobalUserVar[Wallet;$mentioned[1;true]];$getGlobalUserVar[Bank;$mentioned[1;true]]]]]
]`
});

bot.variables({
Wallet:"",
Bank:""
})

bot.command({
  name: "invite", //Trigger name (command name)
  code: `
$thumbnail[https://media.discordapp.net/attachments/836806934807314442/1024377047621042197/20220927_231733.jpg?width=406&height=406]
$title[Click the button below to invite me!]
$description[

$addButton[1;Invite Me!;link;https://discord.com/api/oauth2/authorize?client_id=1022935966605905940&permissions=8&scope=bot%20applications.commands;no]

]

$color[Green]

`
}); //Code

bot.command({
  name: "deposit",
  aliases: "dep",
  code: `
$setGlobalUserVar[Bank;$sum[$getGlobalUserVar[Bank;$authorID];$message];$authorID]
$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];$message];$authorID]
$title[Deposited]
$thumbnail[$userAvatar[$authorID]]
$color[Random]
$description[
$username, you deposited $$numberSeparator[$message] into your bank!]
$footer[💵 $$numberSeparator[$sub[$getGlobalUserVar[Wallet;$authorID];$message]] | 🏦 $$numberSeparator[$sum[$getGlobalUserVar[Bank;$authorID];$message]] | 📊 $$numberSeparator[$sum[$getGlobalUserVar[Wallet;$authorID];$getGlobalUserVar[Bank;$authorID]]]]
$onlyIf[$isNumber[$message]==true;That's not a number!]
$onlyIf[$message<=$getGlobalUserVar[Wallet;$authorID];Cannot deposit more than what's in your 
$onlyIf[$message[1]!=;How much are you depositing? Try this: \`m!dep <amount>\`]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>0;There's nothing to deposit!]`
})




bot.command ({
  name: "withdraw",
  aliases: "with",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$message];$authorID]
$setGlobalUserVar[Bank;$sub[$getGlobalUserVar[Bank;$authorID];$message];$authorID]
$title[Withdrew]
$thumbnail[$userAvatar[$authorID]]
$color[Random]
$description[
$username, you withdrew $$numberSeparator[$message] from your bank!]
$footer[💵 $$numberSeparator[$sum[$getGlobalUserVar[Wallet;$authorID];$message]] | 🏦 $$numberSeparator[$sub[$getGlobalUserVar[Bank;$authorID];$message]] | 📊 $$numberSeparator[$sum[$getGlobalUserVar[Wallet;$authorID];$getGlobalUserVar[Bank;$authorID]]]]
$onlyIf[$isNumber[$message[1]]==true;That's not a number!]
$onlyIf[$message<=$getGlobalUserVar[Bank;$authorID];Cannot withdraw more than what's in your bank!]
$argsCheck[>1;How much are you withdrawing?]
$onlyIf[$getGlobalUserVar[Bank;$authorID]>0;There's nothing to withdraw!]`
})

bot.command({
  name: "support", //Trigger name (command name)
  code: `
$thumbnail[]
$title[Matric Support Server ]
$description[

$addButton[1;Join Our Support Server Now!!;link;https://discord.gg/w8bkjXYXWc;no]

]

$color[Green]

`
})

bot.command({
  name: "stats",
  aliases: ["i", "botstats", "info", "botinfo", "bot-stats", "bot-info"],
  code: `
$botTyping
$author[Bot Stats;$userAvatar[$clientID]]
$description[
$addField[Links;
<a:links:999024239392862290> [Matric Support Server](https://discord.gg/Cv3JV8qybG)
<a:links:999024239392862290> [Invite Me!](https://discord.com/api/oauth2/authorize?client_id=1022935966605905940&permissions=8&scope=bot%20applications.commands)
<a:links:999024239392862290> [VOTE ME](https://top.gg/bot/1022935966605905940/vote)
$addField[General;

🏓 Ping: $pingms
⏱️ Uptime: $uptime
⚙️ Commands Count: $commandsCount
👥 All Members Count: $allMembersCount
🎚️ Servers Count: $serverCount
🏅 All Channels Count: $allChannelsCount
📀 All Channels Count (text): $allChannelsCount[text]
🔉 All Channels Count (voice): $allChannelsCount[voice]
👑 Owner: $userTag[808172291811967046]]
$color[#2C2F33]
$thumbnail[$userAvatar[$clientid]]
$footer[$userTag[$clientID];$userAvatar[$clientID]]
$addTimestamp
`
});

bot.command({
  name: "nuke",
  code: `
$channelSendMessage[$get[channel];Channel Nuked By $username https://tenor.com/view/explode-blast-blow-nuclear-boom-gif-15025770]
$deleteChannels[$channelID]
$let[channel;$cloneChannel[$channelID;yes]]
$onlyBotPerms[managechannels;I am missing the permission \`MANAGE_CHANNELS\`]
$onlyPerms[managemessages;You are missing the permission \`MANAGE_MESSAGES\`]
$suppressErrors[An error occured]
`
});

bot.command({
 name:"sm",
 code:`$slowmode[$channelID;$noMentionMessage]
 
 I Set slowmode to **$noMentionMessage**.
 
 $if[$checkContains[$message;remove]==true]
 
 $slowmode[$channelID;0]
 
 $endif
 
 $argsCheck[>1;Enter a value for slowmode. Like: 3s, 3m, 3h etc. To remove slowmode simply type **m!sm remove**.]
 
 $onlyPerms[managechannels;You need **managechannels** permission to use this command.]
 
 $onlyBotPerms[managechannels;I need **managechannels** permission.]
 
 $suppressErrors`
});

bot.command({
 name: "membercount",
 $if: 'old',
 aliases: "mc",
 code: `$title[1;Members]
$color[1;BLUE]
$description[1;$membersCount]`
})

bot.command({
name: "lock",
code: `$sendmessage[{description:**Channel Locked by** <@$authorID>!}{color:WHITE};no]
$textsplitmap[lock]
$textsplit[$channelOverwrites[$channelid;{mention};/];/]
$onlyif[$checkcontains[$channelpermissionsfor[$clientid];Embed Links;Manage Channels]==true;I need stack permissions to **MANAGE_CHANNELS** / **EMBED_LINKS**]
$onlyperms[managechannels;You need **MANAGE_CHANNELS** permissions!]`
})
bot.awaitedCommand({
name: "lock",
code: `$modifychannelperms[$channelid;-sendmessages;$findnumbers[$message[1]]]`
}) 

bot.command({
name: "unlock",
code: `$sendmessage[{description: **Channel Unlocked by** <@$authorID>!}{color:WHITE};no]
$textsplitmap[unlock]
$textsplit[$channelOverwrites[$channelid;{mention};/];/]
$onlyif[$checkcontains[$channelpermissionsfor[$clientid];Embed Links;Manage Channels]==true;I need stack permissions to **MANAGE_CHANNELS** / **EMBED_LINKS**]
$onlyperms[managechannels;You need **MANAGE_CHANNELS** permissions!]`
})
bot.awaitedCommand({
name: "unlock",
code: `$modifychannelperms[$channelid;m!sendmessages;$findnumbers[$message[1]]]`
})



bot.command({
  name: "play",
  $if: "old",
  code: `
    $let[msg;$playTrack[$message;youtube]]

    $if[$hasPlayer==false]
        $joinVc
    $endif

    $onlyif[($voiceId[$clientId]!=)&&($voiceId[$clientId]==$voiceId);You need to be with the bot in the voice channel to use this!]
    $onlyif[$voiceId!=;Join a voice channel first!]
    `,
});

bot.command({
name:"songinfo",
code:`Currently Playing: $songInfo[title]`
});

bot.command({
name:"skip",
code: `$skipSong`
})

bot.command({
name: "mute",
description: "Mutes a user for a period of time",
category: "Moderation",
usage: "<prefix>mute <time>",
code:`$if[$roleExists[$findRole[Muted]]==true]
$if[$isNumber[$replaceText[$replaceText[$replaceText[$message[2];h;;];m;;];d;;]]==true]
$takeRole[$mentioned[1];$findRole[Muted]]
$sendMessage[{title:$userTag[$mentioned[1]] is now unmuted. || Time's up.}{color:BLUE};no]
$wait[$message[2]]
$giveRole[$mentioned[1];$findRole[Muted]]
$sendMessage[{title:$userTag[$mentioned[1]] is now temporarily muted by $userTag for $replacetext[$replaceText[$replaceText[$message[2];h; Hour(s)];m; Minute(s)];d; Day(s)]. || Reason : $replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;\`No reason has been specified.\`];false;$messageSlice[2]]}{color:BLUE};no]
$forEachGuildChannel[ccheck]
$else
$giveRole[$mentioned[1];$findRole[Muted]]
$sendMessage[{title:$userTag[$mentioned[1]] is now permanently muted by $userTag. || Reason :`})

bot.command({
name: "setmute",
description: "Set the mute role of your server",
category: "Moderation",
usage: "<prefix>setmute @role",
code:`$setServerVar[mutedrole;$mentionedRoles[1]]
Successfully set muted role to <@&$mentionedRoles[1]>`
})

bot.variables({
mutedrole: ""
})

bot.command({
name: "server-invite", 
code: `
$getServerInvite`
})

bot.command({
    name: "avatar",
    code: `$image[$authorAvatar]`
});

bot.command({
    name: "server-icon",
    code: `$image[$serverIcon]`
})

bot.command({
name: "channel-id", 
code: `$channelID is the channel ID` //Gets the channel ID where the comamnd was ran in
})

bot.command({
name: "server-banner",
code: `Heres the server banner: 
$image[$serverBanner[$guildID;2048]]`
})

bot.command({
  name: "vote", //Trigger name (command name)
  code: `
$thumbnail[https://media.discordapp.net/attachments/836806934807314442/1024377047621042197/20220927_231733.jpg?width=406&height=406]
$title[Click the button below to vote me!]
$description[

$addButton[1;Top.gg;link;https://top.gg/bot/1022935966605905940/vote;no]
$addButton[2;Dbl.com;link;https://discordbotlist.com/bots/matric/upvote;no]

]

$color[Green]

`
})







bot.command({
name: "uptime",
  aliases: ['up'],
code: `
$botTyping
$thumbnail[https://media.discordapp.net/attachments/836806934807314442/1024377047621042197/20220927_231733.jpg?width=406&height=406]
$title[<:UPTIME:999013210520821780> Uptime]
$description[


**<t:$truncate[$sub[$divide[$dateStamp;1000];$divide[$uptime[ms];1000]]]:R>**

$footer[]
]` 
})

bot.command({
name: "ticket",
code: `Ticket Created!
$newTicket[ticket-$random[1;100];Hello, Please mention a staff member!]
`
})

bot.command({
name: "close",
code: `$closeTicket[This is not a ticket!]`
})

bot.command({

 name: "botinfo", 
    aliases: ['botstats', 'binfo'],
    description: "Check the bot's information/stats",
    usage: "",
    category: "information",
    code: `$title[Botinfo (MATRIC)]
    $color[Green]
    $thumbnail[$userAvatar]
    **RAM**: $ramMB
    **CPU Usage**: $cpu/100
    **Ping**: $pingms
    **Uptime**: $uptime
    **Commands**: $commandsCount
    **Users**: $allMembersCount
    **Channels**: $allChannelsCount
    **Servers**: $serverCount
    **Version**: 6.1.1
    $addTimestamp
    $cooldown[5s;{description:A bit too fast there. Wait for **%time%**!}{color:Green}]`
    })

bot.command({
  name: '<@1022935966605905940>',
  code: `
$botTyping $thumbnail[https://media.discordapp.net/attachments/836806934807314442/1024377047621042197/20220927_231733.jpg?width=406&height=406]
$title[]
$description[Hi <a:pika_wave:999032412015165471> ,
My <:name:999032800374177792> is **Matric**
My prefix is m! 
]
  
$footer[Do m!help to get all the commands;https://media.discordapp.net/attachments/836806934807314442/1024377047621042197/20220927_231733.jpg?width=406&height=406]`,
  
nonPrefixed: true
})



bot.command ({ 
     name: "roleinfo",
    aliases: ['roleinformation'],
    description: "Know information about a specific server role",
    usage: "roleinfo <role>",
    category: "information",
    code: `$color[$role[$findRole[$message];hex]]
    $author[$userTag;$authorAvatar]
    $title[Role Information]
    $addField[Hoisted; $replaceText[$replaceText[$checkCondition[$isHoisted[$findRole[$message]]==true];true;Yes];false;No];yes]
    $addField[Mentionable; $replaceText[$replaceText[$checkCondition[$isMentionable[$findRole[$message]]==true];true;Yes];false;No];yes]
    $addField[Hex; $role[$findRole[$message];hex];yes]
    $addField[ID; $findRole[$message];yes]
    $addField[Position; $role[$findRole[$message];position];yes]
    $addField[Creation Date; $role[$findRole[$message];created];yes]
    $addTimestamp
    $onlyIf[$findRole[$message]!=;{description: :x: That role doesn't exist!}{color:RANDOM}]
    $onlyIf[$message!=;{description:You have to specify a role to see that role's information!}{color:RANDOM}]
    $suppressErrors[{description:An error occurred! Please contact the Bot Developer if this keeps happening!}{color:RANDOM}]
    $cooldown[5s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
 })


bot.command({
 name: "serverinfo",
 aliases: ["serverprofile", "server"],
 code: `$title[$serverName[$guildID]'s Info]
$thumbnail[$serverIcon[$guildID]]
$description[**Name**
$serverName[$guildID]

**ID**
$guildID

**Owner**
<@$ownerID>

**Boosts**
$serverBoostCount

**Boost Level**
$serverBoostCount

**Boost Level**
$serverBoostLevel

**Verification Level**
$serverVerificationLevel

**Total Members**
$membersCount

**Creation Date**
$creationDate[$guildID]

**Emojis**
$serverEmojis]
$color[73C2FB]`
})


bot.command({
  name: "Servers",
  code: `
$thumbnail[https://media.discordapp.net/attachments/836806934807314442/1024377047621042197/20220927_231733.jpg?width=406&height=406]
$title[<:server:999017412483616799> Server Count]
$description[I Am In $guildCount Servers]`
})


bot.command({
  name: "calculator",
  aliases: ["calc"],
  code: 
  `$botTyping
  **Calculating...**
  $editIn[2s;
  \`\`\`$math[$replaceText[$message;  ;]]\`\`\`
  \`+\` - **Addition**
  \`-\` - **Subtraction**
  \`*\` - **Multiplication**
   \`/\` - **Division**
      $onlyif[$message!=;**Write Something!**]`
})

bot.command({
  name:"userinfo", 
  aliases:["ui","whois"], 
  code:`
$author[1;Here is the info of $userTag[$mentioned[1];$userAvatar[$mentioned[1]]]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$addField[1;**__Role Info__**; **Highest Role:** $highestRole[$mentioned[1];$guildID;mention]
 **Total Roles:** $userRolesCount[$mentioned[1];$guildID]
$addField[1;**__General Info__**;**Mention:** <@$mentioned[1]>
**Username:** $userTag[$mentioned[1]]
**ID:** $mentioned[1]
**Nickname:** $nickname[$mentioned[1]]
**Bot?** $replaceText[$replaceText[$isBot[$mentioned[1]];false;:no_entry_sign: No];true;:white_check_mark: Yes]
**Account Created:** \`$formatDate[$creationDate[$mentioned[1];ms];D, MMMM YYYY]\`
**Server Joined:** \`$formatDate[$memberJoinedDate[$mentioned[1];$guildID];D, MMMM YYYY]\`
**Join Position:** $memberjoinPosition[$mentioned[1]];$guildID]
$footer[1;Executed By $userTag;$userAvatar]`
});

bot.command({
 name: "kick",
 code: `$kick[$mentioned[1];$guildID;$if[$noMentionMessage==;Not Provided;$noMentionMessage]]
 $title[1;Member Kicked!]
 $description[1;<@$authorID> kicked <@$mentioned[1]>
 Reason: $if[$noMentionMessage==;Not Provided;$noMentionMessage]
 $color[1;Red]
 $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];You can't kick someone with a higher role than you]
 $onlyIf[$highestRole[$mentioned[1]]!=$highestRole[$authorID];You can't kick someone with the same highest role]
 $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];I can't kick someone with higher role than me]
 $onlyIf[$highestRole[$mentioned[1]]!=$highestRole[$clientID];I can't kick someone with the same highest role as mine]
 $onlyIf[$mentioned[1]!=$ownerID;You can't kick the server owner]
 $onlyIf[$mentioned[1]!=$authorID;I am sure you don't want to do that]
 $onlyIf[$mentioned[1]!=$clientID;I can't kick myself]
 $onlyIf[$isMentioned[$mentioned[1]]==true;You need to mention someone you want me to kick]
 $onlyIf[$hasPerms[$guildID;$authorID;kick]==true;You don't have \`KICK\` permisions]
 $onlyBotPerms[kick;I don't have \`KICK\` permissions]`
})

bot.command({
 name: "say", 
 code: `
 $message
$deletecommand
$onlyIf[$checkContains[$toLowerCase[$message];@everyone;@here;https://;www.;.com;discord.gg]!=true;{newEmbed:{description: Please do not use me to mention to \`@here\` or \`@everyone\` or for other stuffs. . . }{color:Red}}]
 `
})

bot.command({
  name: "catch",
  code: `
$title[Catch]
$description[Congratulations <@954367061222633472> you caught a level 12 squirtle!!]
$image[https://images-ext-2.discordapp.net/external/6mQG-4_yZrJE3gJHxjnGa_wsYBwhNHD8ZMspekQkbFA/%3Frik%3DYMAAfnTp%252f5m2iA%26riu%3Dhttp%253a%252f%252fpurepng.com%252fpublic%252fuploads%252flarge%252fpurepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527786718xxl59.png%26ehk%3DDO5L3O%252bE%252bp2Vp0m%252fc%252fq8gjstNSjYwbT3v%252b7UudJqLto%253d%26risl%3D%26pid%3DImgRaw%26r%3D0/https/th.bing.com/th/id/R.f87ff0ddf2874b20d8c3c37b10681a35?width=456&height=468]

`
})

bot.command({
    name: "poke",
    code: `
$channelSendMessage[1024748236721893437;{newEmbed: {title:A new wild pokemon has appeared!!} {image:https://images-ext-2.discordapp.net/external/6mQG-4_yZrJE3gJHxjnGa_wsYBwhNHD8ZMspekQkbFA/%3Frik%3DYMAAfnTp%252f5m2iA%26riu%3Dhttp%253a%252f%252fpurepng.com%252fpublic%252fuploads%252flarge%252fpurepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527786718xxl59.png%26ehk%3DDO5L3O%252bE%252bp2Vp0m%252fc%252fq8gjstNSjYwbT3v%252b7UudJqLto%253d%26risl%3D%26pid%3DImgRaw%26r%3D0/https/th.bing.com/th/id/R.f87ff0ddf2874b20d8c3c37b10681a35?width=456&height=468 }}]
`
})

