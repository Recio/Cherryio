import { MessagePayload } from "discord.js";
import commandConfigs from "../configs/commandConfigs";
import { Command } from "../interfaces/command";

export const InsertBlursedCommand : Command = {
    name : [],
    emoji: ["🦄"],
    description: "Records the reacted blursed quote",
    run : async (message) =>{
        message.react("🌈");
    },
    commandListDescription: () => {
        return {
            name : commandConfigs.commandPrefix + InsertBlursedCommand.name,
            value : InsertBlursedCommand.description,
            inline : false
        };
    }
}