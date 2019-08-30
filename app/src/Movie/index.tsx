import React from 'react'
import { Divider, Image, Grid, Header } from 'semantic-ui-react'
import staticMovie from '../static-data'

type Props = {
    movieId: string
}

const Movie: React.FC<Props> = (props) => {
    const { movieId } = props

    const { posterUrl, title, description, similarMovies } = staticMovie

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