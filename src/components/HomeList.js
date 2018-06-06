import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from 'react-modal';
import ViewHome from './ViewHome';
import "./ComponentStyles/homeList.scss";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class HomeList extends Component {
    constructor() {
        super();
        this.state = {
            homes: [],
            modalIsOpen: false,
            selectedHome: ""
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(data) {
        this.setState({selectedHome: data, modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({selectedHome: "", modalIsOpen: false });
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
                                        {home.address}, {home.city}, {home.state}
                                    </Typography>
                                    <Typography component="p">
                                        bedrooms: {home.bedrooms}, bathrooms {home.bathrooms}
                                    </Typography>
                                    <Typography component="p">
                                        Price: {home.price}
                                    </Typography>
                                </CardContent>
                                <CardActions disableActionSpacing={true}>
                                    <Button size="small" color="primary"
                                        onClick={() => this.openModal(home)}>
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
            <div className="homecontainer">
                {this.state.homes}
                <Modal
                    ariaHideApp={false}
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <h2 ref={subtitle => this.subtitle = subtitle}>Shows Selected</h2>
                    <ViewHome props={this.state.selectedHome}/>
                    <button onClick={this.closeModal}>close</button>
                    
                </Modal>
            </div>


        )
    }
}

HomeList.propTypes = {
    type: PropTypes.string.isRequired,
};

export default HomeList;