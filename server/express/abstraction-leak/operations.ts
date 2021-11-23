const users: Map<string, string> = new Map();

export const save = async (user: string, name: string) => {
    users.set(user, name);
};
export const validate = async (name: string): Promise<boolean> => true;