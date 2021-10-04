import { MessagePayload } from "discord.js";
import commandConfigs from "../configs/commandConfigs";
import { Command } from "../interfaces/command";

export const BlessedCommand : Command = {
    name : ["bless","b"],
    description: "Fetches a blessed quote",
    run : async (message) =>{
        message.reply(MessagePayload.create(message.author,
            {
                content: "what the heaven bro"
            }));
    },
    commandListDescription: () => {
        return {
            name : commandConfigs.commandPrefix + BlessedCommand.name,
            value : BlessedCommand.description,
            inline : false
        };
    }
}