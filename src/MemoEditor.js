import React, { useState } from 'react';

export default function MemoEditor({memo, onEdit, onDelete }) {
  const [editedText, setEditedText] = useState(memo.text);

  function handleChange(event) {
    setEditedText(event.target.value);
  }

  function handleEdit() {
    onEdit(editedText);
  }

  return (
    <div>
      <h2>メモ内容</h2>
      <div>
        < input type="text" value={editedText} onChange={handleChange} />
        <button onClick={handleEdit}>編集</button>
        <button onClick={() => onDelete(memo.id)}>削除</button>
      </div>
    </div>
  );
};

