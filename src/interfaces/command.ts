import { EmbedField, Message } from "discord.js";


export interface Command{
    name: string[],
    emoji: string[],
    description: string,
    run: (message:Message) => Promise<void>,
    commandListDescription : () => EmbedField
}