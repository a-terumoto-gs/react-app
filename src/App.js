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

  function handleEdit (memo) {
    setSelectedMemo(memo);
  };

  function handleDelete (memoId) {
    setMemos(memos.filter(memo => memo.id !== memoId)); //消すメモ以外をセットする
    setSelectedMemo(null);
  }

  return (
    <div>
      <MemoList memos={memos} onEdit={handleEdit} />
      {selectedMemo &&
      <MemoEditor memo={selectedMemo}
        onEdit = {()=> handleEdit(selectedMemo)}
        on onDelete={ () => handleDelete(selectedMemo.id)}
        />} 
    </div>
  );
};
