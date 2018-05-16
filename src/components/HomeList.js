import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./ComponentStyles/buyList.scss";



class HomeList extends Component {
    constructor() {
        super();
        this.state = {
            homes: []
        };
    }

    componentDidMount() {
        const type = this.props.type;
        fetch('../api/db.json')
            .then(results => {
                return results.json();
            }).then(data => {
                let filteredHomes = data.homes.filter((home) => {
                    return home.type === type;
                  })
                let homes = filteredHomes.map((home, index) => {
                    return (
                        <div key={index}>
                            <Card className="card">
                                <CardMedia
                                    className="media"
                                    image={home.media}
                                    title="Beach"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="headline" component="h2">
                                        {home.address}
                                    </Typography>
                                    <Typography component="p">
                                        {home.state}, {home.zipcode}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                    )
                })
                this.setState({ homes: homes });
            })
    }

    render() {
        return (
            <div className="container">
                {this.state.homes}
            </div>
        )
    }
}

export default HomeList;