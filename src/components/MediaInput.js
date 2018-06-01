import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import "./ComponentStyles/mediaInput.scss";



class MediaInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: ''
        };
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img className="imagePreview" src={imagePreviewUrl} />);
        }

        return (
            <div>
                <form className="inputForm" onSubmit={this._handleSubmit}>
                    <div className="imagePreview" >{$imagePreview}</div>
                    <div className="buttonContainer">
                        <label className="custom-file-upload" >
                            <input type="file" onChange={this._handleImageChange} />
                            Custom Upload
                        </label>
                        <span></span>
                        <button className="custom-file-upload" type="submit" onClick={this._handleSubmit}>Upload Image</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default MediaInput;