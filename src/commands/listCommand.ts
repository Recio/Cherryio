import { MessageEmbed, MessagePayload } from "discord.js";
import commandConfigs from "../configs/commandConfigs";
import { Command } from "../interfaces/command";
import { CommandList } from "./_commandList";


export const ListCommand : Command = {
    name: ["list","help"],
    description: "Lists the available commands",
    run: async (message) => {
        const embed = new MessageEmbed();
        embed.setTitle("List of commands");
        embed.setDescription("many commands");
        embed.addField("Commands:",
        CommandList.map((command) => `\`${commandConfigs.commandPrefix}${command.name.join("|")}\` : ${command.description}`).join("\n"));

        message.reply(MessagePayload.create(message.author, {
            embeds: [embed]
        }));
    },
    commandListDescription: () => {
        return {
            name : commandConfigs.commandPrefix + ListCommand.name,
            value : ListCommand.description,
            inline : false
        };
    }

}