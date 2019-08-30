import React from 'react'
import { Divider, Image, Grid, Header } from 'semantic-ui-react'

type Movie = {
    title: string
    description: string
    coverImageUrl: string
    suggestions?: Movie[]
}

type Props = {
    movie: Movie
}

const Movie: React.FC<Props> = (props) => {
    const { movie } = props
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={8}>
                    <Image centered size='medium' src={movie.coverImageUrl} />
                </Grid.Column>
                <Grid.Column width={8}>
                    <Header as='h1'>{movie.title}</Header>
                    <Header as='h5'>{movie.description}</Header>
                    <Divider />
                    <Header as='h3'>Similar Movies</Header>
                    <Image.Group size='tiny'>
                        {
                            movie.suggestions && movie.suggestions.map((suggestion) => {
                                return (<Image src={suggestion.coverImageUrl} />)
                            })
                        }
                    </Image.Group>
                </Grid.Column>
            </Grid.Row>
        </Grid >
    )
}

export default Movie;