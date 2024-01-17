import React from 'react';

export default function MemoList({ memos, onSelect, onAdd}) {
  return (
    <div>
      <h2>メモ一覧</h2>
      <ul>
        {memos.map((memo) => (
          <li key={memo.id} onClick={() => onSelect(memo)}>
            {memo.text}
          </li>
        ))}
      </ul>
      <button onClick={onAdd}>+</button>
    </div>
  );
};

