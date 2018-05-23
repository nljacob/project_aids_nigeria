import React from "react";

// React components can be simple, pure functions
function Writing(props) {
	return (
		<li className="list-group-item">
			<h4>{props.MyTitle}</h4>
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
			MyText: ""
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
			MyText: this.state.MyText
		};
		
		this.handleAddWriting(addWritingData);

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
					MyTitle: ""
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
					<input id="MyTitle" name="MyTitle" className="form-control"
						placeholder="Title" onChange={this.handleFormInput} value={this.state.MyTitle}/>
					<br />
					<textarea id="MyText" name="MyText" className="form-control"
						placeholder="Text" rows="10" onChange={this.handleFormInput} value={this.state.MyText}/>
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
