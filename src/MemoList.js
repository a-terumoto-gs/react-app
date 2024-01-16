import React from 'react';

export default function MemoList({ memos, onEdit}) {
  return (
    <div>
      <h2>メモ一覧</h2>
      <ul>
        {memos.map((memo) => (
          <li key={memo.id} onClick={() => onEdit(memo)}>
            {memo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

