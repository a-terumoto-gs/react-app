import React from 'react';
import './MemoList.css';

export default function MemoList({ memos, onSelect, onAdd}) {
  return (
    <div>
      <h1>メモ一覧</h1>
      <ul>
        {memos.map((memo) => (
          <li key={memo.id} className="memo-title" onClick={() => onSelect(memo)}>
            {memo.text.split('\n')[0]}
          </li>
        ))}
      </ul>
      <button className = "new-botton" onClick={onAdd}>+</button>
    </div>
  );
};

