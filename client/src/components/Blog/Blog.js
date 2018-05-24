import React from "react";
import '../../pages/Blog/Blog.css';

// React components can be simple, pure functions
function Writing(props) {
	console.log(props.MyImageURL);
	return (
		<li className="list-group-item">
			<h4>{props.MyTitle}</h4>
			<img src={props.MyImageURL} alt={Date.now().toString()} />
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
		};

	}


	componentWillMount() {
		fetch('/writings')
			.then(res => res.json())
			.then(data => {
				this.setState({ writings: data });
			})
	}


	submit = (e) => {
			e.preventDefault();
			let addWritingData = {
				MyTitle: this.state.MyTitle,
				MyText: this.state.MyText,
				MyImageURL: this.state.MyImageURL
			};

			this.handleAddWriting(addWritingData);
	}

	/*
	 * Add newWriting to store (`this.state`) and re-render
	 */
	handleAddWriting(newWriting) {
		this.setState({
			blogAccepted: true
		});

		if (this.state.MyTitle && this.state.MyText && this.state.MyImageURL) {

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
						MyImageURL: ""
					});
				});

		} else {
			console.log("Blog Post page failed.");
		}

	}

	handleFormInput = e => {
		let { name, value } = e.target;
		this.setState({
			[name]: value
		});
	}

	checkTextError() {
		if (!this.state.MyText && this.state.blogAccepted) {
			return ("form-control error-focus");
		}
		else {
			return ("form-control");
		}
	}

	checkTitleError() {
		if (!this.state.MyTitle && this.state.blogAccepted) {
			return ("form-control error-focus");
		}
		else {
			return ("form-control");
		}
	}

	checkImageError() {
		if (!this.state.MyImageURL && this.state.blogAccepted) {
			return ("form-control error-focus");
		}
		else {
			return ("form-control");
		}
	}

	render() {
		return (
			<div>
				<div >

					<form onSubmit={this.handleAddWriting.bind(this)} method="GET">

						<div className="form-group">
							<label htmlFor="MyTitle"></label>
							<input className={this.checkTitleError()}
								placeholder="Title"
								name="MyTitle"
								type="text"
								id="MyTitle"
								onChange={this.handleFormInput} />
							{(!this.state.MyTitle && this.state.blogAccepted) ? <div className="error-text">Title Required</div> : " "}
						</div>

						<div className="form-group">
							<label htmlFor="MyImageURL"></label>
							<input className={this.checkImageError()}
								placeholder="Image URL"
								name="MyImageURL"
								type="text"
								id="MyImageURL"
								onChange={this.handleFormInput} />
							{(!this.state.MyImageURL && this.state.blogAccepted) ? <div className="error-text">Image Link Required</div> : " "}
						</div>

						<div className="form-group">
							<label htmlFor="MyText"></label>
							<textarea className={this.checkTextError()}
								placeholder="Text"
								name="MyText"
								type="text"
								id="MyText"
								onChange={this.handleFormInput} />
							{(!this.state.MyText && this.state.blogAccepted) ? <div className="error-text">Text Required</div> : " "}
						</div>

						{/* {this.state.blogAccepted ? <div className="error-text text-center">Your post has been accepted. Check the Blog tab to marvel at your work!</div> : " "} */}
						<button type="submit" className="btn btn-info" onClick={this.submit}>Submit</button>
					</form>

					{/* <input id="MyTitle" name="MyTitle" className="form-control"
						placeholder="Title" onChange={this.handleFormInput} value={this.state.MyTitle}/>
					<br />					
					<input id="MyImageURL" name="MyImageURL" className="form-control"
						placeholder="Image URL" onChange={this.handleFormInput} value={this.state.MyImageURL}/>
					<br />
					<textarea id="MyText" name="MyText" className="form-control"
						placeholder="Text" rows="10" onChange={this.handleFormInput} value={this.state.MyText}/>
					<br />
					{this.state.blogAccepted ? <div className="error-text text-center">Your post has been accepted. Check the Blog tab to marvel at your work!</div> : " "}
				
					<button className="btn btn-info" type="button" onClick={this.submit}>
						Add Blog Post
					</button> */}
				</div>
			</div>
		);
	}
}



export default Blog;
