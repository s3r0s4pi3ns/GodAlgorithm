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


export enum OPERATING_SYSTEM {
    MAC = "MAC",
    WINDOWS = "WINDOWS",
    LINUX = "LINUX",
}


export enum JOB_TITLE {
    JUNIOR = "JUNIOR",
    MEDIER = "MEDIER",
    SENIOR = "SENIOR",
    LEAD_DEVELOPER = "LEAD DEVELOPER",
    SITE_RELIABILITY_ENGINEER = "SITE RELIABILITY ENGINEER",
    TECH_LEAD = "TECH LEAD",
    CTO = "CTO",
}

export enum PROGRAMMING_LANGUAGE {
    PHP = 'PHP',
    RUBY = 'RUBY',
    PYTHON = 'PYTHON',
    JAVASCRIPT = 'JAVASCRIPT',
    TYPESCRIPT = 'TYPESCRIPT',
    JAVA = 'JAVA',
    C = 'C',
    CSHARP = 'C#',
    SCALA = 'SCALA'
}

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

export interface IPlayer {
    id: string;
    skinId: string;
    programmingLanguage: PROGRAMMING_LANGUAGE
    name: string;
    team?: string;
    level: number;
    experience: number;
    jobTitle: JOB_TITLE,
    laptop: ILaptop
}