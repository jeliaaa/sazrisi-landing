import React from 'react';
import DailyStreak from '../components/DailyStreak';
import DailyQuiz from '../components/DailyQuiz';

const DailyPage = () => {
    return (
        <div className="p-4 space-y-4 flex flex-col items-end">
            <div className='w-full flex gap-2 flex-col-reverse md:flex-row'>
                <DailyQuiz />
                <DailyStreak />
            </div>
        </div>
    );
};

export default DailyPage;

{/* 
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Example Information Card 
<div className="bg-white shadow-md rounded-lg p-4">
    <h2 className="text-lg font-semibold">Today's Highlight</h2>
    <p className="text-gray-600">An overview of the most important news or topic of the day.</p>
</div>
{/* Add more cards as needed 
            </div >

    {/* Daily Quiz Button 
    < div className = "text-center" >
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600">
            Take the Daily Quiz
        </button>
            </ >
        </div > */}