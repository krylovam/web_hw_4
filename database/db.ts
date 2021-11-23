import user from "../db_objects/user";
import game from "../db_objects/game";

interface DB_interface {
    users: Array<user>;
    games: Array<game>;
}

const DB: DB_interface = {
    users: [
        {
            id: 1,
            username: 'xXx_sephiroth1997_xXx',
            games: [
                {
                    game: {
                        id: 4,
                        title: "FINAL FANTASY XIV Online"
                    },
                    play_time_hours: 400,
                },
                {
                    game: {
                        id: 1,
                        title: "Mirror's Edge",
                    },
                    play_time_hours: 20,
                },
                {
                    game: {
                        id: 3,
                        title: "Titanfall 2",
                    },
                    play_time_hours: 10,
                },
            ]
        },
        {
            id: 2,
            username: 'Gregor',
            games: [
                {
                    game: {
                        id: 3,
                        title: "Titanfall 2",
                    },
                    play_time_hours: 175,
                },
                {
                    game: {
                        id: 2,
                        title: "Deus Ex: Game of the Year Edition",
                    },
                    play_time_hours: 230,
                },
            ]
        },
    ],

    games: [
        {
            id: 1,
            title: "Mirror's Edge",
            description: "In a city where information is heavily monitored, couriers called Runners transport sensitive data. In this seemingly utopian paradise, a crime has been committed, & you are being hunted. You are a Runner called Faith and this innovative first-person action-adventure is your story.",
            ageRating: "T",
            images: ['image_0', 'image_1'],
        },
        {
            id: 2,
            title: "Deus Ex: Game of the Year Edition",
            description: "The year is 2052 and the world is a dangerous and chaotic place. Terrorists operate openly - killing thousands; drugs, disease and pollution kill even more. The world's economies are close to collapse and the gap between the insanely wealthy and the desperately poor grows ever wider.",
            ageRating: "M",
            images: ['image_0', 'image_1', 'image_3'],
        },
        {
            id: 3,
            title: "Titanfall 2",
            description: "Respawn Entertainment gives you the most advanced titan technology in its new, single player campaign & multiplayer experience. Combine & conquer with new titans & pilots, deadlier weapons, & customization and progression systems that help you and your titan flow as one unstoppable killing force.",
            ageRating: "M",
            images: ['image_0'],
        },
        {
            id: 4,
            title: "FINAL FANTASY XIV Online",
            description: "ake part in an epic and ever-changing FINAL FANTASY as you adventure and explore with friends from around the world.",
            ageRating: "T",
            images: ['image_1', 'image_2','image_3', 'image_4', 'image_5'],
        },
    ]
}

export default DB;