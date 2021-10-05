import { model, Schema } from "mongoose";
import { QuoteInt } from "../../interfaces/quote";

export const BlursedQuote = new Schema({
    discordId: String,
    postId: String,
    text: String,
    timestamp: Number
});

export default model<QuoteInt>("blursedQuotes", BlursedQuote);