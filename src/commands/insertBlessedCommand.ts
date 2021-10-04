import { MessagePayload } from "discord.js";
import commandConfigs from "../configs/commandConfigs";
import { Command } from "../interfaces/command";

export const InsertBlessedCommand : Command = {
    name : ["wbless","wb"],
    description: "Records and inserts a blessed quote",
    run : async (message) =>{
        message.reply(MessagePayload.create(message.author,
            {
                content: "what the heaven bro"
            }));
    },
    commandListDescription: () => {
        return {
            name : commandConfigs.commandPrefix + InsertBlessedCommand.name,
            value : InsertBlessedCommand.description,
            inline : false
        };
    }
}