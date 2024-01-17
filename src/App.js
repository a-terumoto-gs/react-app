import React, { useState } from 'react';
import MemoList from './MemoList';
import MemoEditor from './MemoEditor';

export default function App() {
  const [memos, setMemos] = useState([
    { id: 1, text: 'Memo 1' },
    { id: 2, text: 'Memo 2' },
  ]);
  //サンプルデータ

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
    setMemos(memos.filter(memo => memo.id !== memoId)); //消すメモ以外をセットする
    setSelectedMemo(null);
  }

  function handleAdd() {
    if (selectedMemo && selectedMemo.text.trim() !== '') {
    const newMemo = { id: Date.now(), text: '' };
    setMemos([...memos, newMemo]);
    setSelectedMemo(newMemo);
    }
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
