import React from "react";
import { useAuth } from "./AuthOperation";
import "./MemoList.css";

export default function MemoList({ memos, onSelect, onAdd, selectedMemo }) {
  const { LoggedIn } = useAuth();

  return (
    <div className="index-box">
      <h1>メモ一覧</h1>
      <ul>
        {memos.map((memo) => (
          <li
            key={memo.id}
            className={`memo-title ${memo === selectedMemo ? "selected" : ""}`}
            onClick={() => onSelect(memo)}
          >
            {memo.text.split("\n")[0]}
          </li>
        ))}
      </ul>
      {LoggedIn && (
        <button className="new-botton" onClick={onAdd}>
          +
        </button>
      )}
    </div>
  );
}
