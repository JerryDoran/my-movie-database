import { useState, useEffect, useRef } from 'react';
import { Wrapper, Content } from './SearchBarStyles';
import searchIcon from '../../images/search-icon.svg';

function SearchBar({ setSearchTerm }) {
	const [searchValue, setSearchValue] = useState('');
	const initial = useRef(true);

	useEffect(() => {
		if (initial.current) {
			initial.current = false;
			return;
		}
		const timer = setTimeout(() => {
			setSearchTerm(searchValue);
		}, 300);
		// this function always runs first after a re-render of the component
		return () => clearTimeout(timer);
	}, [setSearchTerm, searchValue]);

	return (
		<Wrapper>
			<Content>
				<img src={searchIcon} alt="search-icon" />
				<input
					type="text"
					placeholder="Search Movie"
					onChange={(e) => setSearchValue(e.currentTarget.value)}
					value={searchValue}
				/>
			</Content>
		</Wrapper>
	);
}

export default SearchBar;
