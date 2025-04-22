"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileWriterService = void 0;
const common_1 = require("@nestjs/common");
const config_service_1 = require("../../config/config.service");
const fs = require("fs-extra");
const path = require("path");
const util_1 = require("util");
const perf_hooks_1 = require("perf_hooks");
const writeFileAsync = (0, util_1.promisify)(fs.writeFile);
const ensureDirAsync = (0, util_1.promisify)(fs.ensureDir);
const pathExistsAsync = (0, util_1.promisify)(fs.pathExists);
let FileWriterService = class FileWriterService {
    logger;
    replayPath;
    tasks = [];
    isWriting = false;
    lock = Promise.resolve();
    constructor() {
        this.logger = new common_1.Logger("FightService");
        const configService = new config_service_1.ConfigService({ folder: './config' });
        this.replayPath = configService.get('ReplayPath', './replay_dir/files');
        setInterval(() => {
            this.writeTasks();
        }, 1000);
    }
    async addTask(filename, data, isBinary) {
        await this.lock;
        const taskExists = this.tasks.some(task => task.filename === filename);
        if (taskExists) {
            this.logger.error(`Task with filename ${filename} already exists and will not be added.`);
            return;
        }
        this.tasks.push({ filename, data, isBinary });
    }
    async writeTasks() {
        if (this.tasks.length === 0 || this.isWriting) {
            return;
        }
        this.isWriting = true;
        this.lock = (async () => {
            try {
                const startTime = perf_hooks_1.performance.now();
                await ensureDirAsync(this.replayPath);
                const tasksToWrite = [...this.tasks];
                this.logger.log(`Number of battle files to write: ${tasksToWrite.length}`);
                this.tasks = [];
                await Promise.all(tasksToWrite.map(async (task) => {
                    const fullPath = path.join(this.replayPath, task.filename);
                    const exists = await pathExistsAsync(fullPath);
                    if (exists) {
                        this.logger.error(`File already exists: ${fullPath}`);
                        return;
                    }
                    if (task.isBinary) {
                        await writeFileAsync(fullPath, task.data);
                    }
                    else {
                        await writeFileAsync(fullPath, task.data, 'utf8');
                    }
                    const fileSize = task.isBinary ? (Buffer.isBuffer(task.data) ? Buffer.byteLength(task.data.buffer) : 0) : Buffer.byteLength(task.data, 'utf8') / 1024;
                    this.logger.log(`Successfully wrote battle replay: ${fullPath} (Size: ${fileSize.toFixed(2)} KB)`);
                    const endTime = perf_hooks_1.performance.now();
                    const duration = (endTime - startTime) / 1000;
                    if (duration > 3) {
                        this.logger.error(`Writing tasks took ${duration.toFixed(2)} seconds for files: ${fullPath}`);
                    }
                }));
            }
            catch (error) {
                this.logger.error(`Error writing tasks: ${error.message}`);
            }
            finally {
                this.isWriting = false;
            }
        })();
        await this.lock;
    }
};
FileWriterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FileWriterService);
exports.FileWriterService = FileWriterService;
//# sourceMappingURL=replay.service.js.map