import React from 'react';
import Image from 'next/image';

export default function Movie({ title, grade, onDelete }) {
  // Skapar en array med stjärnor baserat på betyg
  const stars = Array(grade).fill(0);

  return (
    <li className="movie-item">
      <div className="movie-title">{title}</div>
      <div className="movie-grade">
        {stars.map((_, index) => (
          <Image 
            key={index}
            src="/images/star.png" 
            alt="Star"
            width={20}
            height={20}
            className="star-icon"
          />
        ))}
      </div>
      <button onClick={onDelete} className="delete-button">
        <Image 
          src="/images/delete.png" 
          alt="Delete"
          width={20}
          height={20}
        />
      </button>
    </li>
  );
}