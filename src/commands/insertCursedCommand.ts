import { MessagePayload } from "discord.js";
import commandConfigs from "../configs/commandConfigs";
import { Command } from "../interfaces/command";
import CursedQuote from "../db/models/cursedQuoteModel";


export const InsertCursedCommand : Command = {
    name : [],
    emoji: ["💀","☠"],
    description: "Records the reacted cursed quote",
    run : async (message) =>{
        let cursedQuote = await CursedQuote.findOne({discordId: message.author.id, postId: message.id})
        if(!cursedQuote)
        {
            await CursedQuote.create({
                discordId: message.author.id,
                postId : message.id,
                text : message.content,
                timestamp: message.createdTimestamp,
                postUrl : message.url
            });
        }
        await message.react("⚰");
    },
    commandListDescription: () => {
        return {
            name : commandConfigs.commandPrefix + InsertCursedCommand.name,
            value : InsertCursedCommand.description,
            inline : false
        };
    }
}