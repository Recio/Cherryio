import { MessagePayload } from "discord.js";
import commandConfigs from "../configs/commandConfigs";
import { Command } from "../interfaces/command";

export const InsertCursedCommand : Command = {
    name : ["wcurse","wc"],
    description: "Records and inserts a cursed quote",
    run : async (message) =>{
        message.reply(MessagePayload.create(message.author,
            {
                content: "what the fuck bro"
            }));
    },
    commandListDescription: () => {
        return {
            name : commandConfigs.commandPrefix + InsertCursedCommand.name,
            value : InsertCursedCommand.description,
            inline : false
        };
    }
}