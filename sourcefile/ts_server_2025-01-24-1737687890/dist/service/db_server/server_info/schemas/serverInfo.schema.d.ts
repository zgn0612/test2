import { Document } from 'mongoose';
import mongoose from 'mongoose';
export type ServerInfoDocument = ServerInfo & Document;
export declare class ServerInfo {
    _id: mongoose.Types.ObjectId;
    OffsetSec: number;
}
export declare const ServerInfoSchema: mongoose.Schema<ServerInfo, mongoose.Model<ServerInfo, any, any, any, Document<unknown, any, ServerInfo> & ServerInfo & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ServerInfo, Document<unknown, {}, mongoose.FlatRecord<ServerInfo>> & mongoose.FlatRecord<ServerInfo> & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}>;
