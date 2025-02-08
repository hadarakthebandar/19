'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { div } from 'motion/react-client';

const questions = [
    {
        "questionNumber": 1,
        "hint": "DECODE the code on your face in your room into a sentence of 4 words",
        "answer": "angel is the best"
    },
    {
        "questionNumber": 2,
        "hint": "Open the door of the place where you sit and admire yourself while 💩",
        "answer": "nigga"
    },
    {
        "questionNumber": 3,
        "hint": "a place related to a McLaren car and a place which serves beer. whats the real name of the main actor in this show(only first name)",
        "answer": "josh"
    },
    {
        "questionNumber": 4,
        "hint": "what is the name of the person, the capital of odisha is named after (single word and write answer in reverse)",
        "answer": "avihs"
    },
    {
        "questionNumber": 5,
        "hint": "what is the ascii value of the letter which is also the first programming language u learnt in college.(sum the digits up into another two digit number)",
        "answer": "13"
    },
    {
        "questionNumber": 6,
        "hint": "divide the last answer with the ascii value of the infeed charecter. thats how many protons i have! i am?",
        "answer": "lithium"
    },
    {
        "questionNumber": 7,
        "hint": "go meow thrice to your sister(from the same mother)? which singer is she acting like?(only first name)",
        "answer": "billie"
    },
    {
        "questionNumber": 8,
        "hint": "go (behind) this artist's 19th most streamed song of all time and enter the last 7 letters",
        "answer": "hxmu901"
    },
    {
        "questionNumber": 9,
        "hint": "you love playing me so much but you like the bigger and better version of me more :( (what is the bigger and better version)",
        "answer": "piano"
    },
    {
        "questionNumber": 10,
        "hint": "whats the output of the code?",
        "answer": "ka"
    }
];

export default function TreasureHunt() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [wrongAnswer, setWrongAnswer] = useState(false);
    const [spin, setSpin] = useState(false);
    const router = useRouter();

    const checkAnswer = () => {
        if (userAnswer.toLowerCase().trim() === questions[currentQuestion].answer.toLowerCase()) {
            if (currentQuestion === questions.length - 1) {
                router.push('/hdbangel');
            } else {
                setCurrentQuestion(currentQuestion + 1);
                setUserAnswer('');
                setWrongAnswer(false);
            }
        } else {
            setWrongAnswer(true);
        }
        setSpin(true);
        setTimeout(() => setSpin(false), 1000);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <div className="bg-gray-900 p-8 rounded-2xl shadow-lg flex items-center space-x-6 w-[80%] max-w-4xl">                
                <p className="text-lg text-gray-300">{questions[currentQuestion].hint}</p>
                <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    className="p-2 border border-gray-700 rounded-md text-white bg-black text-lg"
                    placeholder="Enter your answer"
                />
                {wrongAnswer && <p className="text-red-500 font-bold">Wrong answer!</p>}
                <motion.button
                    onClick={checkAnswer}
                    className="p-2 bg-green-500 text-black rounded-md hover:bg-green-600 text-lg font-bold"
                    animate={spin ? { rotate: 360 } : {}}
                    transition={{ duration: 1 }}
                >
                    Submit
                </motion.button>
            </div>
        </div>
    );
}
