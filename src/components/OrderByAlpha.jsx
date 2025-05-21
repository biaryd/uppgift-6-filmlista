import React from 'react';

export default function OrderByAlpha({ onClick }) {
  return (
    <button 
      className="sort-button alpha-sort" 
      onClick={onClick}
    >
      Alfabetisk ordning
    </button>
  );
}
