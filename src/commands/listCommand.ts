import { MessageEmbed, MessagePayload } from "discord.js";
import commandConfigs from "../configs/commandConfigs";
import { Command } from "../interfaces/command";
import { CommandList, EmojiCommandList } from "./_commandList";


export const ListCommand : Command = {
    name: ["list","help"],
    emoji: [],
    description: "Lists the available commands",
    run: async (message) => {
        const embed = new MessageEmbed();
        embed.setTitle("🍒 Cherry.io 🍒");
        embed.setDescription("currently available functionalities");
        embed.addField("Commands:",
            CommandList.map((command) => `\`${commandConfigs.commandPrefix}${command.name.join(`|${commandConfigs.commandPrefix}`)}\` : ${command.description}`).join("\n"));
        embed.addField("Reactions:",
            EmojiCommandList.map((command) => `${command.emoji.join(" | ")} : ${command.description}`).join("\n"));

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