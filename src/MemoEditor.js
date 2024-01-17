import React from 'react';

export default function MemoEditor({memo, onEdit, onDelete}) {

  return (
    <div>
      <h2>メモ内容</h2>
      <div>
        <h3>{memo.text}</h3>
        <button onClick={() => onEdit(memo)}>編集</button>
        <button onClick={() => onDelete(memo.id)}>削除</button>
      </div>
    </div>
  );
};

