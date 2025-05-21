import React from 'react';

export default function OrderByGrade({ onClick }) {
  return (
    <button 
      className="sort-button grade-sort" 
      onClick={onClick}
    >
      Betygsordning
    </button>
  );
}