import { save, validate } from './operations';

export const saveName = async (user: string, userName: string): Promise<string | Error> => {
    try {
        const isValid = await validate(userName);

        if (!isValid) {
            return new Error('Validation');
        }

        await save(user, userName);

        return userName;
    } catch (error) {
        return new Error('Unexpected');
    }
}