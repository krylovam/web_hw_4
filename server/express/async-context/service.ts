import { asyncLocalStorage } from './context';

export const someMethod = async () => {
    const store = asyncLocalStorage.getStore();
    const requestId = store?.get('requestId');

    console.log(`[METHOD] RequestId ${requestId}`);

    await new Promise<void>(res => setTimeout(() => {
        console.log(`[ASYNC] RequestId ${requestId}`);
        res();
    }, Math.random() * 2000))

    return requestId;
}