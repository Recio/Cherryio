import { model, Schema } from "mongoose";
import { QuoteInt } from "../../interfaces/quote";

export const BlessedQuote = new Schema({
    discordId: String,
    postId: String,
    text: String,
    timestamp: Number,
    postUrl: String,
});

export default model<QuoteInt>("blessedQuotes", BlessedQuote);