import React from 'react';

const IconButton = ({ name, onClick }) => {
  return (
    <button
      aria-label={name}
      className="btn-submit btn-lookingglass"
      data-testid="btn-submit"
      onClick={(event) => {
        onClick(event);
      }}
    >
      <span className="icon-lookingglass-white">{name}</span>
    </button>
  );
};

export default IconButton;
