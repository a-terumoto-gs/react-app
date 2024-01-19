import React, { useState, useEffect } from "react";
import { useAuth } from './AuthOperation';
import "./MemoEditor.css";

export default function MemoEditor({ memo, onEdit, onDelete }) {
  const [editedText, setEditedText] = useState(memo ? memo.text : "");
  const [error, setError] = useState("");
  const { LoggedIn } = useAuth();

  useEffect(() => {
    setEditedText(memo ? memo.text : "");
    setError("");
  }, [memo]);

  function handleChange(event) {
    setEditedText(event.target.value);
  }

  function handleEdit() {
    if (editedText.trim() !== "") {
      onEdit(editedText);
      setError("");
    } else {
      setError("内容が空です");
    }
  }

  return (
    <div>
      {LoggedIn ? (
        <>
          <h2 className="heading">メモ内容</h2>
          <div>
            <textarea
              className="memo-content"
              type="text"
              value={editedText}
              onChange={handleChange}
            />
            <div className="memo-buttons">
              <button onClick={handleEdit}>編集</button>
              <button onClick={() => onDelete(memo.id)}>削除</button>
            </div>
            {error && <p className="error-message">{error}</p>}
          </div>
        </>
      ) : (
        <>
          <h2 className="heading">メモ内容</h2>
          <div>
            <textarea
              className="memo-content"
              type="text"
              value={editedText}
              onChange={handleChange}
              readOnly={!LoggedIn} 
            />
          </div>
        </>
      )}
    </div>
  );
  
}
