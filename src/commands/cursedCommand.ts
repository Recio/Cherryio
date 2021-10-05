import { MessageEmbed, MessagePayload } from "discord.js";
import commandConfigs from "../configs/commandConfigs";
import { Command } from "../interfaces/command";
import CursedQuote from "../db/models/cursedQuoteModel";
import { randomInt } from "crypto";

export const CursedCommand : Command = {
    name : ["curse","c"],
    emoji: [],
    description: "Fetches a cursed quote",
    run : async (message) =>{
        let blessedCount = await CursedQuote.count();
        if(blessedCount == 0){
            message.reply(MessagePayload.create(message.author,
                {
                    content: "no cursed quotes available :("
                }));
                return;
        }
        let rng = randomInt(0,blessedCount);
        let cursedQuote = await CursedQuote.find().limit(-1).skip(rng).findOne();
        if(cursedQuote){
            const embed = new MessageEmbed();
            const user = message.client.users.cache.get(cursedQuote.discordId);
            if(user)
            {
                embed.setAuthor(user.username, user.avatarURL() ?? undefined, cursedQuote.postUrl);
            }
            embed.setTitle(":skull: A cursed quote to increase the pain :skull:")
            embed.setColor("#ff0000")
            embed.addField("quote",cursedQuote.text);
            embed.setFooter("Originally said at: " + new Date(cursedQuote.timestamp).toLocaleDateString());
            message.reply(MessagePayload.create(message.author,
                {
                    embeds: [embed] 
                } 
            ));
        }
    },
    commandListDescription: () => {
        return {
            name : commandConfigs.commandPrefix + CursedCommand.name,
            value : CursedCommand.description,
            inline : false
        };
    }
}