import React, { useEffect, useState } from 'react'
import { Divider, Image, Grid, Header } from 'semantic-ui-react'
import staticMovie from '../static-data'

type Props = {
    movieId: string
}

interface Movie {
    title: string
    description: string
    posterUrl: string
    similarMovies: Movie[]
}

const Movie: React.FC<Props> = (props) => {
    const { movieId } = props

    const [movie, setMovie] = useState<Movie | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function loadMovie() {
            const query = `query { movie(id: "${movieId}") { title posterUrl description similarMovies { posterUrl } } }`

            setLoading(true)
            const response = await fetch('http://localhost:4000/graphql', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query }),
            })

            setLoading(false)
            if (response && response.status === 200) {
                const { data: { movie } } = await response.json()
                console.log(movie)
                setMovie(movie)
            } else {
                setError("Error :(")
            }
        }

        loadMovie()
    }, [])

    if (loading) { return <p>loading...</p> }
    if (error || !movie) { return <p>Error :(</p> }

    const { posterUrl, title, description, similarMovies } = movie

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={8}>
                    <Image centered size='medium' src={posterUrl} />
                </Grid.Column>
                <Grid.Column width={8}>
                    <Header as='h1'>{title}</Header>
                    <Header as='h5'>{description || 'No description'}</Header>
                    <Divider />
                    <Header as='h3'>Similar Movies</Header>
                    <Image.Group size='tiny'>
                        {
                            similarMovies.map((m: any) => {
                                return (<Image src={m.posterUrl} />)
                            })
                        }
                    </Image.Group>
                </Grid.Column>
            </Grid.Row>
        </Grid >
    )
}

export default Movie;