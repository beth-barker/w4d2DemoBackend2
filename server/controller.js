
const movies = require(`./db.json`)

let globalID = 11;

module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movies)
    },
    createMovie: (req, res) => {
        const {title, rating, imageURL} = req.body;
        let newMovie = {
            title: title,
            rating: +rating,
            imageURL,
            id: globalID
        }

        movies.push(newMovie)
        globalID++
        res.status(200).send(movies)
    },
    deleteMovie: (req, res) => {
        const {id} = req.params;
        let index = movies.findIndex((element) => element.id === +id)
        movies.splice(index, 1)
        res.status(200).send(movies)
    },
    updateMovie: (req, res) => {
        const {type} = req.body;
        let index = movies.findIndex((element) => element.id === +req.params.id);
        if(type === `minus` && movies[index].rating > 1){
            movies[index].rating -= 1;
            res.status(200).send(movies)
        } else if (type === `plus` && movies[index].rating < 5) {
            movies[index].rating += 1;
            res.status(200).send(movies)
        } else {
            res.status(400).send(`Invalid star rating!`)
        }
    }
}