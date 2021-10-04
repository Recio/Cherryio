import { MessagePayload } from "discord.js";
import commandConfigs from "../configs/commandConfigs";
import { Command } from "../interfaces/command";

export const InsertBlursedCommand : Command = {
    name : ["wblurse"],
    description: "Records and inserts a blursed quote",
    run : async (message) =>{
        message.reply(MessagePayload.create(message.author,
            {
                content: "what the hell bro"
            }));
    },
    commandListDescription: () => {
        return {
            name : commandConfigs.commandPrefix + InsertBlursedCommand.name,
            value : InsertBlursedCommand.description,
            inline : false
        };
    }
}