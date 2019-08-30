import React, { useEffect, useState } from 'react'
import { Divider, Image, Grid, Header } from 'semantic-ui-react'
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

type Props = {
    movieId: string
}

const GET_MOVIE = gql`
    query GetMovie($movieId: ID!) {
        movie(id: $movieId) {
            title
            description
            posterUrl
            similarMovies(limit: 3) {
                title
                description
                posterUrl
            } 
        }
    }
`;

const Movie: React.FC<Props> = (props) => {
    const { movieId } = props

    const variables = { movieId }
    const { loading, error, data } = useQuery(GET_MOVIE, { variables });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (!data || !data.movie) return <p>Where is data?</p>

    const { movie: { title, posterUrl, description, similarMovies } } = data

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