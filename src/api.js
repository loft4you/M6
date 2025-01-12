export let GamesCategory = async (category) => {
    let url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}&sort-by=release-date`;
    let options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "42c6745e43mshf95a75c3c8e31d2p1c295bjsne99577e2877e",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
    };

    try {
        let response = await fetch(url, options);
        let result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
        return;
    }
};
export let DetailGame = async (id) => {
    let url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    let options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "42c6745e43mshf95a75c3c8e31d2p1c295bjsne99577e2877e",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
    };

    try {
        let response = await fetch(url, options);
        let result = await response.json();
        console.log(result);

        return result;
    } catch (error) {
        console.error(error);
        return;
    }
};