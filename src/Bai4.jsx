import { useState } from "react";

function Post({ text }) {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    return (
        <div style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px"
        }}>
            <p style={{ margin: 0, fontWeight: "bold" }}>{text}</p>
            <div style={{ marginTop: 8 }}>
                <button onClick={() => setLike(like + 1)}>👍 {like}</button>
                <button onClick={() => setDislike(dislike + 1)} style={{ marginLeft: 5 }}>
                    👎 {dislike}
                </button>
            </div>
        </div>
    );
}
function Bai4() {
    return (
        <div>
            <h2>Bài 4: Like/Dislike Post</h2>
            <Post text="Học ReactJS có khó không?" />
            <Post text="Props và State là gì?" />
            <Post text="Lập trình web có vui không?" />
        </div>
    );
}

export default Bai4;
