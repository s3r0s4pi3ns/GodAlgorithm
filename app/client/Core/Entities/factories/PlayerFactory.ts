import { faker } from '@faker-js/faker';
import { IPlayer, JOB_TITLE, PROGRAMMING_LANGUAGE } from "../types";
import { Factory } from "./factory";
import LaptopFactory from './LaptopFactory';

export default class PlayerFactory implements Factory<IPlayer> {
    create(params: Partial<IPlayer> = {}): IPlayer {

        return {
            id: faker.datatype.uuid(),
            skinId: faker.internet.url(),
            programmingLanguage: faker.helpers.arrayElement(Object.values(PROGRAMMING_LANGUAGE)),
            name: faker.name.firstName(),
            team: undefined,
            level: 1,
            experience: 0,
            jobTitle: faker.helpers.arrayElement(Object.values(JOB_TITLE)),
            laptop: new LaptopFactory().create(),
            ...params
        }

    }

}