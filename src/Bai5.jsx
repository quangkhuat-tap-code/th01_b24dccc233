import { useState } from "react";

function Bai5() {
    const questions = [
        {
            q: "ReactJS dùng để làm gì?",
            answers: ["Mobile App", "Web UI", "Hệ điều hành", "Cơ sở dữ liệu"],
            correct: 1,
        },
        {
            q: "Props trong React là gì?",
            answers: ["Trạng thái", "Thuộc tính truyền vào", "API", "CSS"],
            correct: 1,
        },
        {
            q: "State dùng để?",
            answers: [
                "Quản lý dữ liệu thay đổi",
                "Định nghĩa component",
                "Kết nối backend",
                "Trang trí giao diện",
            ],
            correct: 0,
        },
    ];

    const [step, setStep] = useState(0);
    const [score, setScore] = useState(0);

    const handleAnswer = (i) => {
        if (i === questions[step].correct) {
            setScore(score + 1);
        }
        setStep(step + 1);
    };

    if (step >= questions.length) {
        return (
            <div>
                <h2>Bài 5: Quiz App</h2>
                <p>Bạn trả lời đúng {score}/{questions.length} câu!</p>
            </div>
        );
    }

    return (
        <div>
            <h2>Bài 5: Quiz App</h2>
            <p><b>Câu {step + 1}: {questions[step].q}</b></p>
            <div>
                {questions[step].answers.map((ans, i) => (
                    <button
                        key={i}
                        onClick={() => handleAnswer(i)}
                        style={{ display: "inline-block", }}>
                        {ans}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Bai5;
