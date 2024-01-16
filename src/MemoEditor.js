import React from 'react';

export default function MemoEditor({memo}) {

  return (
    <div>
      <h2>メモ内容</h2>
      <div>
        <h3>{memo.text}</h3>
      </div>
    </div>
  );
};

