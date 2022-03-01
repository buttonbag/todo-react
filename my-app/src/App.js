import React from 'react';

import './App.css';

function App() {
	const listArray = [];
	const [list, setList] = React.useState(listArray);

	function addNew() {
		setList((prevList) => {
			return [...prevList, `item ${prevList.length + 1}`];
		});
	}
	const listItems = list.map((items) => <li key={items}>{items}</li>);
	console.log(list);

	return (
		<div className="main">
			<h1>List Header</h1>
			<ul>{listItems}</ul>
			<button className="add-new" onClick={addNew}>
				add new
			</button>
		</div>
	);
}

export default App;
