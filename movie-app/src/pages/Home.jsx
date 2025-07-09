function Home(){
    const movies =[
        {
            id: 1,
            title: "abc"
        },
        {
            id: 2,
            title: "xyz"
        }
    ]

    return (
        <div>
            {
                movies.map(movie =>(
                    <div key={movie.id}> {movie.title}</div>
                ))
            }
        </div>
    )
}
export default Home;