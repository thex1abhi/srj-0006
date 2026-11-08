import React, { useEffect, useRef, useState } from "react";
import { chatMessage } from "../features/chat";
import { FaRobot } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
const QUICK_QUESTIONS = [
    "Which courses are available?",
    "What is the admission process?",
];

const WELCOME = {
    role: "bot",
    text: "Welcome , How can I help you today ??",
};

function ChatBot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([WELCOME]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    // keep the latest message in view
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading, open]);

    // focus the input when the window opens
    useEffect(() => {
        if (open) inputRef.current?.focus();
    }, [open]);

    async function send(text) {
        const question = text.trim();
        if (!question || loading) return;

        setMessages((prev) => [...prev, { role: "user", text: question }]);
        setInput("");
        setLoading(true);

        try {
            const data = await chatMessage(question);
            setMessages((prev) => [...prev, { role: "bot", text: data.message }]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    role: "bot",
                    text: "Something went wrong. Please try again in a moment.",
                    error: true,
                },
            ]);
        } finally {
            setLoading(false);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        send(input);
    }

    const showQuickQuestions = messages.length === 1;

    return (
        <div className="fixed  bottom-3 right-3 z-50 flex flex-col items-end gap-3 sm:bottom-5 sm:right-5">
            {open && (
                <section
                    className="flex h-[min(440px,calc(100dvh_-_6.5rem))] w-[calc(100vw_-_1.5rem)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:w-96"
                >
                    {/* Header */}
                    <header className="flex items-center justify-between bg-blue-900 px-4 py-3 text-white">
                        <div className="min-w-0">
                            <p className="truncate text-base font-semibold">St. John's College assistant</p>
                            <p className="truncate text-xs text-blue-100">
                                Ask any Question
                            </p>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            className="ml-3 rounded-md px-2 text-2xl leading-none hover:bg-white/10 focus:outline-none  cursor-pointer focus-visible:ring-2 focus-visible:ring-white"
                        >
                            ×
                        </button>
                    </header>

                    {/* Messages */}
                    <div
                        className="flex flex-1 flex-col gap-2.5 overflow-y-auto bg-white p-4"
                    >
                        {messages.map((m, i) => (
                            <div
                                key={i}
                                className={[
                                    "max-w-[85%] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-2 text-sm leading-relaxed",
                                    m.role === "user"
                                        ? "self-end rounded-br-sm bg-blue-900 text-white"
                                        : m.error
                                            ? "self-start rounded-bl-sm bg-red-50 text-red-800"
                                            : "self-start rounded-bl-sm bg-slate-100 text-slate-800",
                                ].join(" ")}
                            >
                                {m.text}
                            </div>
                        ))}

                        {showQuickQuestions && (
                            <div className="flex flex-col items-start gap-1.5">
                                {QUICK_QUESTIONS.map((q) => (
                                    <button
                                        key={q}
                                        type="button"
                                        onClick={() => send(q)}
                                        className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-left text-sm text-blue-900 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900"
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        )}

                        {loading && (
                            <div
                                className="flex w-fit items-center gap-1 self-start rounded-2xl rounded-bl-sm bg-slate-100 px-3.5 py-3"
                            >
                                {[0, 150, 300].map((delay) => (
                                    <span
                                        key={delay}
                                        style={{ animationDelay: `${delay}ms` }}
                                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 motion-reduce:animate-none"
                                    />
                                ))}
                            </div>
                        )}
                        <div ref={bottomRef} />
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="flex gap-2 border-t border-slate-200 bg-white p-3"
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your question"
                            maxLength={500}
                            disabled={loading}
                            className="min-w-0 flex-1 rounded-xl border border-slate-300 px-3 py-2.5 text-base text-slate-800 placeholder:text-slate-400 focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900 disabled:bg-slate-50 sm:text-sm"
                        />
                        <button
                            type="submit"
                            disabled={loading || !input.trim()}
                            className="rounded-xl bg-blue-900 px-4 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer "
                        >
                            Send
                        </button>
                    </form>
                </section>
            )}


            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-900 text-3xl leading-none text-white shadow-lg transition-transform cursor-pointer "
            >
                {open ? (
                    <IoClose className="cursor-pointer" />
                ) : (
                    <FaRobot className="cursor-pointer" />
                )}
            </button>
        </div>
    );
}

export default ChatBot;