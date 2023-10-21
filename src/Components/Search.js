import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Search = ({ onSearch }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(username.toLowerCase());
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                    id="search"
                    type="text"
                    placeholder="Ingrese un nombre de usuario de GitHub"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <div>
                        <button type="submit" id="btnSearch">
                            <FontAwesomeIcon icon="search" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
        
    );
};

export default Search;
