import React from 'react';

const NoResults = () => {
    return (
        <div className="alert alert-warning" role="alert">
            No hay usuarios que cumplan con el criterio de busqueda.
        </div>
    );
};

export default NoResults;