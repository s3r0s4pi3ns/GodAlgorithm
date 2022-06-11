import { OPERATING_SYSTEM } from "./enums";

export type Network = {
    device: string;
    connected: boolean;
    speed: {
        type: string;
        value: number;
        unit: string;
    };
    ipv4: string;
    ipv6?: string;
    ssh: {
        open: boolean;
        password: string;
        port: number;
    }
};

export type HardDrive = {
    model: string,
    memory: number,
    type: 'HDD' | 'SSD'
}

export interface Laptop {
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