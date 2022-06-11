import { faker } from '@faker-js/faker';
import { ILaptop } from "../entities";
import { OPERATING_SYSTEM } from "../enums";
import { Factory } from "./factory";

export default class LaptopFactory implements Factory<ILaptop> {
    create(params: Partial<ILaptop> = {}): ILaptop {
        return {
            battery: faker.datatype.number(100),
            cores: faker.datatype.number(8),
            durability: faker.datatype.number(100),
            powerUsage: faker.datatype.number(10),
            graphicCard: faker.commerce.productName(),
            processor: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            operatingSystem: faker.helpers.arrayElement(
                Object.values(OPERATING_SYSTEM)
            ),
            hardDrive: {
                model: faker.random.word(),
                memory: faker.datatype.number({ min: 256, max: 512 }),
                type: faker.helpers.arrayElement(['HDD', 'SSD']),
            },
            network: {
                device: faker.internet.userAgent(),
                connected: Math.random() >= 0.5,
                ipv4: faker.internet.ipv4(),
                ipv6: faker.internet.ipv6(),
                ssh: {
                    open: Math.random() >= 0.5,
                    port: faker.datatype.number(65535),
                    password: faker.internet.password(),
                },
                speed: {
                    value: faker.datatype.number(1000),
                    unit: "MB/S",
                    type: faker.helpers.arrayElement([
                        "2G",
                        "3G",
                        "4G",
                        "5G",
                        "WI-FI",
                        "GSPR",
                    ]),
                },
            },
            ...params,
        };
    }
}
