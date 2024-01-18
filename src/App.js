import React, { useState } from 'react';
import MemoList from './MemoList';
import MemoEditor from './MemoEditor';
import './App.css';

export default function App() {
  const [memos, setMemos] = useState([]);

  const [selectedMemo, setSelectedMemo] = useState(null);

  function handleSlect (memo) {
    setSelectedMemo(memo);
  }

  function handleEdit(newText) {
    setMemos(memos.map(memo =>
      memo.id === selectedMemo.id ? { ...memo, text: newText } : memo
    ));
    setSelectedMemo(null);
  }

  function handleDelete (memoId) {
    setMemos(memos.filter(memo => memo.id !== memoId));
    setSelectedMemo(null);
  }

  function handleAdd() {
    const newMemo = { id: Date.now(), text: '新規メモ' };
    setMemos([...memos, newMemo]);
    setSelectedMemo(newMemo);
  }

  return (
    <div>
      <MemoList memos={memos} onSelect={handleSlect} onAdd={handleAdd} />
      {selectedMemo &&
      <MemoEditor memo={selectedMemo}
        onEdit={handleEdit}
        on onDelete={handleDelete}
        />} 
    </div>
  );
}
