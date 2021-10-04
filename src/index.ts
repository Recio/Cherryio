import { Client, Intents } from "discord.js";
import { messageCreate } from "./events/messageCreate.js";
import { validateEnv } from "./validateEnv.js"

(async () => {
    if(!validateEnv()) {
        return;
    }
    const BOT = new Client({intents : [Intents.FLAGS.GUILD_MEMBERS,Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES] }); 
    await BOT.login(process.env.AUTH_TOKEN);

    BOT.on("ready",() => {
        console.log("cherry is up!");
    })

    BOT.on("messageCreate", messageCreate);

})();