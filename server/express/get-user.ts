export const getUser = () => Promise.resolve('User');
export const getUserPermissions = (user: string) => user === 'User' ? Promise.resolve('*') : Promise.resolve('none');