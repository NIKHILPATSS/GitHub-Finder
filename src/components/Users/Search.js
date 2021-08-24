import React, { useContext, useState } from 'react';
import alertContext from '../../context/alert/alertContext';
import githubContext from '../../context/github/githubContext';

const Search = () => {
	const GithubContext = useContext(githubContext);
	const AlertContext = useContext(alertContext);

	const [text, setText] = useState('');

	const onChangeHandler = (e) => setText(e.target.value);

	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (text === '') {
			AlertContext.setAlert('Please enter something', 'light');
		} else {
			GithubContext.searchUsers(text);
			setText('');
		}
	};

	return (
		<div>
			<form className='form' onSubmit={onSubmitHandler}>
				<input
					type='text'
					name='text'
					placeholder='Search Users..'
					value={text}
					onChange={onChangeHandler}
				/>
				<input
					type='submit'
					value='Search'
					className='btn btn-dark btn-block'
				/>
			</form>
			{GithubContext.users.length > 0 && (
				<button
					className='btn btn-light btn-block'
					onClick={GithubContext.clearUsers}
				>
					Clear
				</button>
			)}
		</div>
	);
};

export default Search;
