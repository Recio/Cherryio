import { MessagePayload } from "discord.js";
import commandConfigs from "../configs/commandConfigs";
import { Command } from "../interfaces/command";

export const BlursedCommand : Command = {
    name : ["blurse"],
    description: "Fetches a blursed quote",
    run : async (message) =>{
        message.reply(MessagePayload.create(message.author,
            {
                content: "what the hell bro"
            }));
    },
    commandListDescription: () => {
        return {
            name : commandConfigs.commandPrefix + BlursedCommand.name,
            value : BlursedCommand.description,
            inline : false
        };
    }
}