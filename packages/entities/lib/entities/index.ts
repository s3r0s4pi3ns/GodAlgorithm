import { OPERATING_SYSTEM } from "../enums";
import type { HardDrive, Network } from "../types";

export interface ILaptop {
    battery: number;
    durability: number;
    powerUsage: number;
    operatingSystem: OPERATING_SYSTEM;
    cores: number;
    graphicCard: string;
    processor: string;
    hardDrive: HardDrive
    network: Network;
    description?: string;
}