import React, { Component } from 'react';
import cat from '../../../assets/static/play.png';

class create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cat_name: "",
            cat_image: null,
            cat_name_err: "",
            cat_image_err: "",
            previewURL: null
        }
    }


    onChangeCatName = (event) => {
        this.setState({
            cat_name: event.target.value
        })
    }

    onChangeFileHandeller = (event) => {
        var file = event.target.files[0];
        this.setState({
            cat_image: file,
            previewURL: URL.createObjectURL(event.target.files[0])
        })
        console.log(file.naturalHeight)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }


    render() {
        const previewFile = this.state.previewURL;
        return (
            <div className="admin-category-create">
                <div className="container">
                    <div className="row">
                        <div className="col-12 py-2">
                            <h5 className="mb-0">Create new category</h5>
                        </div>
                        <div className="col-12 pt-3 pb-2">
                            <form onSubmit={this.handleSubmit}>

                                {/* Category Name */}
                                <div className="form-group mb-3">
                                    <label>Category Name</label>
                                    <input type="text" onChange={this.onChangeCatName} className="form-control rounded-0 shadow-none" placeholder="Enter category name" />
                                </div>

                                {/* Category Poster */}
                                <div className="form-group mb-3">
                                    <label>Category poster</label>
                                    <br />
                                    <input type="file" id="file" name="file" className="inputfile" onChange={this.onChangeFileHandeller} />
                                </div>

                                <div className="form-group mb-3">
                                    {
                                        previewFile ? (
                                            <img src={this.state.previewURL} className="img-fluid" alt="Preview" />
                                        ) : (
                                                <img src={cat} className="img-fluid" alt="category" />
                                            )
                                    }
                                </div>

                                <button type="submit" className="btn btn-block btn-dark rounded-0 shadow-none text-white">Create Now</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default create;