import React, { useState } from 'react';

export default function MemoEditor({memo, onEdit, onDelete }) {
  const [editedText, setEditedText] = useState(memo ? memo.text : '');
  const [error, setError] = useState('')

  function handleChange(event) {
    setEditedText(event.target.value);
  }

  function handleEdit() {
    if (editedText.trim() !== '') {
      onEdit(editedText);
      setError('')
    } else {
      setError('内容が空です');
    }
  }

  return (
    <div>
      <h2>メモ内容</h2>
      <div>
        <textarea type="text" value={editedText} onChange={handleChange} />
        <button onClick={handleEdit}>編集</button>
        <button onClick={() => onDelete(memo.id)}>削除</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};

