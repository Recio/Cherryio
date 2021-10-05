import { MessageEmbed, MessagePayload } from "discord.js";
import commandConfigs from "../configs/commandConfigs";
import { Command } from "../interfaces/command";
import BlessedQuote from "../db/models/blessedQuoteModel";
import { randomInt } from "crypto";

export const BlessedCommand : Command = {
    name: ["bless","b"],
    emoji: [],
    description: "Fetches a blessed quote",
    run: async (message) => {
        let blessedCount = await BlessedQuote.count();
        if (blessedCount == 0) {
            message.reply(MessagePayload.create(message.author,
                {
                    content: "no blessed quotes available :("
                }));
            return;
        }
        let rng = randomInt(0, blessedCount);
        let blessedQuote = await BlessedQuote.find().limit(-1).skip(rng).findOne();
        if (blessedQuote) {
            const embed = new MessageEmbed();
            const user = message.client.users.cache.get(blessedQuote.discordId);
            if (user) {
                embed.setAuthor(user.username, user.avatarURL() ?? undefined, blessedQuote.postUrl);
            }
            embed.setTitle(":pray: A blessed quote to ease the pain :pray:");
            embed.setColor("#0000ff");
            embed.addField("quote", blessedQuote.text);
            embed.setFooter("Originally said on: " + new Date(blessedQuote.timestamp).toLocaleDateString());
            message.reply(MessagePayload.create(message.author,
                {
                    embeds: [embed]
                }
            ));
        }
    },
    commandListDescription: () => {
        return {
            name: commandConfigs.commandPrefix + BlessedCommand.name,
            value: BlessedCommand.description,
            inline: false
        };
    },
}