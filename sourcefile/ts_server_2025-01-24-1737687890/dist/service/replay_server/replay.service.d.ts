/// <reference types="node" />
export declare class FileWriterService {
    private readonly logger;
    private readonly replayPath;
    private tasks;
    private isWriting;
    private lock;
    constructor();
    addTask(filename: string, data: Buffer | string, isBinary: boolean): Promise<void>;
    writeTasks(): Promise<void>;
}
