import React, { useState, useEffect } from "react";
import MemoList from "./MemoList";
import MemoEditor from "./MemoEditor";
import LoginProvider from "./LoginOperation";
import LoginButton from "./LoginButton";
import "./App.css";

export default function App() {
  const storedMemos = JSON.parse(localStorage.getItem("memos")) || [];
  const [memos, setMemos] = useState(storedMemos);
  const [selectedMemo, setSelectedMemo] = useState({});

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  function handleSelect(memo) {
    setSelectedMemo(memo);
  }

  function handleEdit(newText) {
    setMemos(
      memos.map((memo) =>
        memo.id === selectedMemo.id ? { ...memo, text: newText } : memo,
      ),
    );
    setSelectedMemo({});
  }

  function handleDelete(memoId) {
    setMemos(memos.filter((memo) => memo.id !== memoId));
    setSelectedMemo({});
  }

  function handleAdd() {
    const newMemo = { id: Date.now(), text: "新規メモ" };
    setMemos([...memos, newMemo]);
    setSelectedMemo(newMemo);
  }

  return (
    <LoginProvider>
      <div className="display-box">
        <MemoList
          memos={memos}
          onSelect={handleSelect}
          onAdd={handleAdd}
          selectedMemo={selectedMemo}
        />
        <div className="right-box">
          <LoginButton />
          {selectedMemo && (
            <MemoEditor
              memo={selectedMemo}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </div>
      </div>
    </LoginProvider>
  );
}
