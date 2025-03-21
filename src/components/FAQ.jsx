import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        { id: 1, question: "რატომ უნდა ავირჩიო თქვენი პლატფორმა?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia harum quos similique cumque reprehenderit? Doloribus fugiat a molestias possimus inventore?" },
        { id: 2, question: "როგორ მუშაობს თქვენი სერვისი?", answer: "ჩვენი პლატფორმა მუშაობს მარტივად და მომხმარებლის კომფორტზეა გათვლილი." },
        { id: 3, question: "რა უპირატესობები აქვს თქვენს პლატფორმას?", answer: "ჩვენი პლატფორმა გთავაზობთ ინოვაციურ გადაწყვეტებს და უსაფრთხო მომსახურებას." },
        { id: 4, question: "რა სახის მხარდაჭერას სთავაზობთ?", answer: "ჩვენი გუნდი მზად არის დაგეხმაროთ 24/7." },
        { id: 5, question: "როგორ შეიძლება თქვენი სერვისით სარგებლობა?", answer: "რეგისტრაციის შემდეგ, შეგიძლიათ დაუყოვნებლივ დაიწყოთ ჩვენი სერვისების გამოყენება." }
    ];

    const toggleFAQ = (id) => {
        setActiveIndex(activeIndex === id ? null : id);
    };

    return (
        <div className="px-4 w-full flex flex-col gap-y-5 md:gap-y-3">
            {questions.map((q, index) => (
                <div
                    key={q.id}
                    className={`w-full flex flex-col px-4 py-5 rounded-2xl md:p-10 text-dark-color transition-all duration-300 ${activeIndex === q.id ? "bg-main-color" : "bg-gray-200"}`}
                >
                    <div
                        className="flex items-center justify-between cursor-pointer transition-all duration-300"
                        onClick={() => toggleFAQ(q.id)}
                    >
                        <div className="flex items-center max-w-[80%] gap-x-2">
                            <h1 className="text-6xl">{String(index + 1).padStart(2, "0")}</h1>
                            <span className="text-2xl w-full ml-2">{q.question}</span>
                        </div>
                        <button className="w-[50px] text-3xl flex items-center bg-gray-200 justify-center cursor-pointer aspect-square rounded-full border border-dark-color">
                            {activeIndex === q.id ? <FaMinus /> : <FaPlus />}
                        </button>
                    </div>

                    {/* Smooth expanding/collapsing effect */}
                    <div className={`transition-all duration-300 overflow-hidden ${activeIndex === q.id ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                        <hr className="w-full" />
                        <p className="text-dark-color mt-4">{q.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
