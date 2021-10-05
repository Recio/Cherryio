import { Message, MessageReaction, PartialMessageReaction, PartialUser, User } from "discord.js";
import { EmojiCommandList } from "../commands/_commandList";


export const messageReactionAdd = async (reaction: PartialMessageReaction| MessageReaction, partialUser : PartialUser | User) => {
    // When a reaction is received, check if the structure is partial
	if (reaction.partial) {
		// If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message:', error);
			// Return as `reaction.message.author` may be undefined/null
			return;
		}
	}

	if(reaction.message?.author?.bot){
		reaction.message.react("🤖");
		reaction.message.react("❌");
		return;
	}
	if(reaction.message?.attachments){
		reaction.message.react("📎");
		reaction.message.react("❌");
		return;
	}
    
    for(const command of EmojiCommandList)
    {
        if(command.emoji.some(x => x == reaction.emoji.toString()))
        {
            await command.run(reaction.message as Message);
            break;
        }
    }
};