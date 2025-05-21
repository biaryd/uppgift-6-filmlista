import React, { useState } from 'react';

export default function MovieForm({ onAddMovie }) {
  const [title, setTitle] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validerar att titel och betyg är ifyllda
    if (!title) {
      alert('Du måste ange en titel!');
      return;
    }
    
    if (!grade) {
      alert('Du måste ange ett betyg!');
      return;
    }
    
    // Lägger till film
    onAddMovie({
      title,
      grade: parseInt(grade)
    });
    
    // Återställer formuläret
    setTitle('');
    setGrade('');
  };

  return (
    <div className="movie-form-container">
      <h2>Lägg till en film</h2>
      <form className="movie-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Titel:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titel här..."
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="grade">Betyg:</label>
          <select
            id="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          >
            <option value="">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        
        <button type="submit" className="add-button">
          Spara film
        </button>
      </form>
    </div>
  );
}