import React from "react";
import "../../pages/Blog/Blog.css";
// React components can be simple, pure functions
function Writing(props) {
    console.log(props.MyImageURL);
    return (
        <li className="list-group-item">
            
            
            <h4>{props.MyTitle}</h4>
            <img src= {props.MyImageURL} alt= {Date.now().toString()} />
            <p>{props.MyText}</p>
            
        </li>
    );
}
function WritingList(props) {
    return (
        <ul className="list-group">
            {props.writings.map(Writing)}
        </ul>
    );
}
class Blog extends React.Component {
    constructor() {
        super();
        this.state = {
            writings: [],
            blogAccepted: false,
            MyTitle: "",
            MyText: "",
            MyImageURL: "",
            submitFlag: false
        };
    }
    componentWillMount() {
        fetch('/writings')
            .then(res => res.json())
            .then(data => {
                this.setState({ writings: data });
            })
    }
    submit = () => {
        
        let addWritingData = {
            MyTitle: this.state.MyTitle,
            MyText: this.state.MyText,
            MyImageURL: this.state.MyImageURL
        };
        
        //setting submit flag for validation
        this.setState({
            submitFlag: true
          });
        console.log("in submit")
        let validationFlag = this.inputFieldValidation()
        if(validationFlag) {
            this.handleAddWriting(addWritingData);
    
        }
    }
    // validation functions
    inputFieldValidation() {
        if (!this.state.MyTitle||!this.state.MyImageURL||!this.state.MyText)
        {
            return(false);
        }
        else {
            return(true);
        }
    }

    ValidationCheck(fieldType,submitFlag){
        if (!fieldType && submitFlag){
          return ("form-control error-focus"); 
        }
        else {
            return ("form-control");
        }
     }

    /*
     * Add newWriting to store (`this.state`) and re-render
     */
    handleAddWriting(newWriting) {
        fetch('/writings', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newWriting)
        })
            .then(res => res.json())
            .then(writing => {
                this.setState({
                    writings: this.state.writings.concat(writing),
                    blogAccepted: true,
                    MyText: "",
                    MyTitle: "",
                    MyImageURL: "",
                    submitFlag: false
                });
            });
    }
    handleFormInput = e => {
        let {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div>
                <div >
                    <input id="MyTitle" name="MyTitle" className={this.ValidationCheck(this.state.MyTitle,this.state.submitFlag)}
                        placeholder="Title" onChange={this.handleFormInput} value={this.state.MyTitle}/>
                         {(!this.state.MyTitle && this.state.submitFlag) ? <div className="error-text">Title is Required</div> : " "}
                    <br />                    
                    <input id="MyImageURL" name="MyImageURL" className={this.ValidationCheck(this.state.MyImageURL,this.state.submitFlag)}
                        placeholder="Image URL" onChange={this.handleFormInput} value={this.state.MyImageURL}/>
                          {(!this.state.MyImageURL && this.state.submitFlag) ? <div className="error-text">Image is Required</div> : " "}
                    <br />
                    <textarea id="MyText" name="MyText" className={this.ValidationCheck(this.state.MyText,this.state.submitFlag)}
                        placeholder="Text" rows="10" onChange={this.handleFormInput} value={this.state.MyText}/>
                          {(!this.state.MyText && this.state.submitFlag) ? <div className="error-text">Text is Required</div> : " "}
                    <br />
                    {this.state.blogAccepted ? <div className="error-text text-center">Your post has been accepted. Check the Blog tab to marvel at your work!</div> : " "}
                
                    <button className="btn btn-info" type="button" onClick={this.submit}>
                        Add Blog Post
                    </button>
                </div>
            </div>
        );
    }
}
export default Blog;
