import React, { useState } from 'react';

import './SearchInput.css';

interface SearchInputProps {
	onSearch: (searchTerm: string) => void;
}

const SearchInput = ({onSearch}: SearchInputProps) => {
const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
		onSearch(e.target.value);
  };

    return (
        <>
            <div className="search-panel" role="search" aria-label="Search">
                <input
                    className="search-input"
                    type="text"
                    name="search-panel"
                    id="search-panel"
                    placeholder="Search by title"
                    aria-label="Search by title"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
        </>
    );
}

export default SearchInput;