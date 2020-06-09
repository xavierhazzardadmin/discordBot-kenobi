require("dotenv").config();
var fs = require("fs")
const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = process.env.BOT_TOKEN;
const app = require("express")()

app.get("/", async function(req, res){
  res.setHeader("content-type", "text/html")
  res.end(fs.readFileSync("index.html"))
})

app.listen(3000)
bot.login(TOKEN);
var logch = {send: () => console.log("Bot not ready!")};
function log(title, col, fds){
  var f = []
  for(var i in fds){
    f.push({name:i.replace(/-/,"").replace(/^\\-/,"-"),value:fds[i],inline:fds[i][0]=="-"});
  }
  logch.send(new Discord.MessageEmbed().setColor(col).setTitle(title).setAuthor("Kenobi > Logs").addFields(...f).setTimestamp())
}
bot.on("ready", () => {
  logch = bot.guilds.find(a => a.id="699267121359749180").channels.find(a => a.name == "logs");
  //HOW TO USE LOG()
  log("BOTSTATUS", "#333333", {"bot": "Windu", "status": "online"});
  //
  

  console.clear()
	console.info(`Logged in as \u001b[36m${bot.user.tag.replace("#","\u001b[38;5;208m#")}\u001b[0m!`);
  bot.user.setActivity("STAR WARS", { type: "WATCHING" });
});

bot.on("message", (msg) => {
	if (msg.content === "ping") {
		msg.reply("pong");

	}
	if(msg.content.match(/kenobi/gi)) {
	    msg.reply("Hello There")
	}
	
	if(msg.content.toLowerCase().replace(/[^\w ]/g,"") == "i hate you") {
	    msg.reply("You were my brother Anakin, I loved you")
	} else if(msg.content.toLowerCase().replace(/[^\w ]/g,"") === "if youre not with me then youre my enemy") {msg.reply("Only a sith deals in absolutes, I will do what I must!")} else if(msg.content.match(/absolutely/gi)){
	    msg.reply("Only a sith deals in absolutes, I will do what i must");
	    
	    setTimeout(() => {
	        msg.channel.reply("***Ignites Lightsaber***")
	    }, 1750)
	} else if(msg.content === "runClicker"){
        for(let i = 0; i < 120; i++){
            msg.channel.send("/click")
        }
    }
	// } else {
	// 	msg.reply("Please tag a valid user!");
	// }
});
undefined;
