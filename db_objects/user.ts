import user_game from "./user_game";

export default interface User {
    id: number;
    username: string;
    games: Array<user_game>;
}

