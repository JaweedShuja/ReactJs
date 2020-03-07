import React, { Component } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import ReactHtmlParser from 'react-html-parser'

export default class AddBlog extends Component {
    constructor(props){
        super(props)

        this.state = {
            title:'',
            body:'',
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.publish = this.publish.bind(this)
        this.discart = this.discart.bind(this)
    }
    handleOnChange(e, editor){
        this.setState({
            body:editor.getData()
        })
    }
    handleTitleChange(e){
        this.setState({
            title:e.target.value
        })
    }
    publish(){
        //publishing to database
    }
    discart(){
        //discarting
    }
    render() {
        return(
            <div style={{backgroundColor:'#f8f9fa'}}>
            <div className="container h-100 border-left border-right border-top" style={{backgroundColor:'white'}}>
                <h3>Add New Blog</h3>
                <hr/>
                <div className="form-group">
                        <label>Title</label>
                        <input 
                            type="text"
                            required
                            className="form-control"
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                                />
                    </div>
                    <label>Body</label>
                <CKEditor
                    editor={ClassicEditor}
                    onChange={this.handleOnChange}
                />
                <hr/>
                <div className="text-right">
                    <button className="btn btn-danger" onClick={this.discart} style={{marginRight:5,}}>Discart</button>
                    <button className="btn btn-success" onClick={this.publish}>Publish</button>
                </div>
                <hr/>
                <h4>Demo</h4>
                <div className="container border-left border-right border-top border-bottom" style={{backgroundColor:'whitesmoke', height:300}}>
                {ReactHtmlParser(this.state.body)}

                </div>
                <hr/>
            </div>
                
            </div>
            
        );
    }
}
