import { ConfigService } from '@nestjs/config'
import { TypegooseModuleOptions } from 'nestjs-typegoose'

const options = {}

export const getMongoConfig = async (
	configService: ConfigService
): Promise<TypegooseModuleOptions> => ({
	uri: configService.get('MONGO_URI'),
	password: configService.get('MONGO_PASS'),
	username: configService.get('MONGO_USERNAME'),
	...options,
})
