import express from "express";
import DB from "../database/db"
import user_game from "../db_objects/user_game";
const app = express();
let max_game_id = 5;
let max_user_id = 3;

app.get("/", function(request, response){
     
    response.send("Hello world!");
});

// GAME Requests

app.get("/games", function(request, response){
    response.json()
});
app.get("/games/:id", function (request, response) {
    const id = parseInt(request.params.id);
    const game = DB.games.find((game) => game.id == id);
    response.json(game)
});
app.post("/games", function (request, response) {
    let game = request.body;
    game.id = max_game_id;
    max_game_id ++;
    DB.games = [...DB.games, game];
    response.send(`{"id": ${game.id}}`);
});
app.put("/games/:id", function (request, response) {
    const id = parseInt(request.params.id);
    const game = request.body;
    DB.games = [...DB.games.filter((game) => game.id != id), game];
    response.end();
});
app.delete("/games/:id", function (request, response) {
    const id = parseInt(request.params.id);
    DB.games = DB.games.filter((game) => game.id != id);
    for (let i = 0; i < DB.users.length; i++)
    {
        DB.users[i].games = DB.users[i].games.filter((game_user) => game_user.game.id != id);
    }
    response.end();
});

// USER Requests

app.get("/users/:id", function (request, response) {
    const id = parseInt(request.params.id);
    const user = DB.users.find((user) => user.id == id);
    response.json({ id: user?.id, name: user?.username });
});
app.post("/users", function (request, response) {
    let user = request.body;
    user.id = max_user_id;
    max_user_id ++;
    DB.users = [...DB.users, user];
    response.send(`{"id": ${user.id}}`);
});
app.put("/users/:id", function (request, response) {
    const id = parseInt(request.params.id);
    const user = request.body;
    DB.users = [...DB.users.filter((user) => user.id != id), user];
    response.end();
});
app.delete("/users/:id", function (request, response) {
    const id = parseInt(request.params.id);
    DB.users = DB.users.filter((user) => user.id != id);
    response.end();
});
// USER GAMES Requests
app.get("/users/:id/games", function (request, response) {
    const id = parseInt(request.params.id);
    const user = DB.users.find((user) => user.id == id);
    response.json({ games: user?.games });
});
app.post("users/:id/games", function (request, response) {
    const id = parseInt(request.params.id);
    const user_game = request.body;
    const user = DB.users.find((user) => user.id == id);
    if (user) {
      user.games = [...user.games, {...user_game, play_time_hours: 0}];
      DB.users = [...DB.users.filter((user) => user.id != id), user];
    }
});
app.post("users/:id/games/:gameId", function (request, response) {
    const id = parseInt(request.params.id);
    const game_id = parseInt(request.params.gameId);
    const user_game: user_game = request.body;
    const user = DB.users.find((user) => user.id == id);
    if (user) {
        const game = user.games.find((game) => game.game.id == game_id)
        if (game)
        {
            game.play_time_hours += user_game.play_time_hours
            user.games = [...user.games.filter((g) => g.game.id != game_id), game];
        }
        else
        {
            user.games = [...user.games, {...user_game, play_time_hours: user_game.play_time_hours}];
        }
        DB.users = [...DB.users.filter((user) => user.id != id), user];
      }
});
app.delete("users/:id/games/:gameId", function (request, response) {
    const id = parseInt(request.params.id);
    const game_id = parseInt(request.params.gameId);
    const user = DB.users.find((user) => user.id == id);
    if (user) {
      user.games = user.games.filter((game) => game.game.id != game_id);
      DB.users = [...DB.users.filter((user) => user.id != id), user];
    }
});


app.listen(3000, () => {
    console.log("Server started!");
});