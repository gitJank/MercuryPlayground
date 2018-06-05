import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./ComponentStyles/homeList.scss";

class HomeList extends Component {
    constructor() {
        super();
        this.state = {
            homes: []
        };
    }

    componentDidMount() {
        const type = this.props.type;
        fetch('http://localhost:3002/api/homes')
            .then(results => {      
                return results.json();
            }).then(data => {
                let filteredHomes = data.filter((home) => {
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
                                <CardContent className="cardContent">
                                    <Typography gutterBottom variant="headline" component="h2">
                                        {home.address} <br/>
                                        {home.state}, {home.zipcode}
                                    </Typography>
                                    <Typography component="p">
                                        Price: {home.price}
                                    </Typography>
                                </CardContent>
                                <CardActions disableActionSpacing = {true}>
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

HomeList.propTypes = {
    type: PropTypes.string.isRequired,
};

export default HomeList;