import { Command } from "../interfaces/command";
import { BlessedCommand } from "./blessedCommand";
import { InsertCursedCommand } from "./insertCursedCommand";
import { BlursedCommand } from "./blursedCommand";
import { CursedCommand } from "./cursedCommand";
import { ListCommand } from "./listCommand";
import { InsertBlessedCommand } from "./insertBlessedCommand";
import { InsertBlursedCommand } from "./insertBlursedCommand";

export const CommandList: Command[] = [
    ListCommand,
    BlessedCommand, 
    CursedCommand,
    //BlursedCommand
];

export const EmojiCommandList: Command[] = [    
    InsertCursedCommand, 
    InsertBlessedCommand, 
    //InsertBlursedCommand
]