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

function CreateWriting(props) { // become Frankenstein
	/*
	 * - Grabs text values from `MyTitle` and `MyText` inputs;
	 * - send values to parent component (<App />)
	 * - reset inputs
	 */
	const submit = () => {
		const MyTitleInput = document.querySelector('#MyTitle');
		const MyTextInput = document.querySelector('#MyText');

		props.onAddWriting({
			MyTitle: MyTitleInput.value,
			MyText: MyTextInput.value
		});

		MyTitleInput.value = "";
		MyTextInput.value = "";
	}

	return (
		<div >
                <br />
                <br />
                <br />
			<input id="MyTitle" className="form-control"
				placeholder="My Title" />
				<br/>
			<textarea id="MyText" className="form-control"
				placeholder="My Text" rows = "10" />
				<br/>
			<button className="btn btn-primary" type="button" onClick={submit}>
				Add Blog Post
			</button>
		</div>
	);
}

class Blog extends React.Component {
	constructor() {
		super();

		this.state = {
			writings: []
		};
	}

	componentWillMount() {
		fetch('/writings')
			.then(res => res.json())
			.then(data => {
				this.setState({  writings: data });
			})
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
				writings: this.state.writings.concat(writing)
			});
		});
	}

	render() {
		return (
			
            <div>
                <br style= {{lineHeight: 8}}></br>
				<WritingList writings={this.state.writings} />
				<CreateWriting onAddWriting={this.handleAddWriting.bind(this)}/>
			</div>
		);
	}
}



export default Blog;
