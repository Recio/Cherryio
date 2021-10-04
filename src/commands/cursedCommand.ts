import { MessagePayload } from "discord.js";
import commandConfigs from "../configs/commandConfigs";
import { Command } from "../interfaces/command";

export const CursedCommand : Command = {
    name : ["curse","c"],
    description: "Fetches a cursed quote",
    run : async (message) =>{
        message.reply(MessagePayload.create(message.author,
            {
                content: "what the fuck bro"
            }));
    },
    commandListDescription: () => {
        return {
            name : commandConfigs.commandPrefix + CursedCommand.name,
            value : CursedCommand.description,
            inline : false
        };
    }
}