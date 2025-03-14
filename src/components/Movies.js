import Card from './Card'

function Movies(props) {
    return (
        <div className="movies">
            {props.movies.length ? (
                props.movies.map(movie => 
                    <Card
                        key={movie.imdbID}
                        readMoreHandler={props.readMoreHandler}
                        {...movie}
                    />
                )
            ) : (
                <p>Не найдено, попробуй проверить запрос</p>
            )}
        </div>
    );
}

export default Movies;