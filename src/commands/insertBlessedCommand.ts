import commandConfigs from "../configs/commandConfigs";
import { Command } from "../interfaces/command";
import BlessedQuote from "../db/models/blessedQuoteModel";

export const InsertBlessedCommand : Command = {
    name : [],
    emoji: ["🙏"],
    description: "Records the reacted blessed quote",
    run : async (message) =>{
        let blessedQuote = await BlessedQuote.findOne({discordId: message.author.id, postId: message.id})
        if(!blessedQuote)
        {
            await BlessedQuote.create({
                discordId: message.author.id,
                postId : message.id,
                text : message.content,
                timestamp: message.createdTimestamp,
                postUrl : message.url
            });
        }
        await message.react("🕊");
    },
    commandListDescription: () => {
        return {
            name : commandConfigs.commandPrefix + InsertBlessedCommand.name,
            value : InsertBlessedCommand.description,
            inline : false
        };
    }
}