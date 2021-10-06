import { CommandInteractionOptionResolver, Message } from "discord.js";
import { CommandList } from "../commands/_commandList";
import commandConfigs from "../configs/commandConfigs";


export const messageCreate = async (message: Message) => {
    if(message.author.bot || !message.content.startsWith(commandConfigs.commandPrefix))
    {
        return;
    }

    for(const command of CommandList)
    {
        if(command.name.some(name => message.content.startsWith(commandConfigs.commandPrefix + name)))
        {
            await command.run(message);
            break;
        }
    }
};