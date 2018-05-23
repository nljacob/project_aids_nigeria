import React from "react";

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



class ViewBlog extends React.Component {
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
				
			</div>
		);
	}
}



export default ViewBlog;
