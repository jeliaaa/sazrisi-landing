import React from 'react';

const DailyStreak = ({ streak = 10, longestStreak = 143, completedDays = 231 }) => {
    const maxStreak = 43; // Maximum streak for visualization purposes
    return (
        <div className='bg-white shadow-md rounded-2xl p-6 w-full md:w-1/2'>
            <h2 className='text-xl font-semibold mb-4 text-center'>შენი სტატისტიკა</h2>
            {/* Streak Progress Bar */}
            <div className='w-full bg-gray-200 rounded-full h-4 overflow-hidden mb-4'>
                <div
                    className='bg-main-color h-full'
                    style={{ width: `${(streak / maxStreak) * 100}%` }}
                ></div>
            </div>

            {/* Streak Numbers */}
            <div className='flex flex-col text-sm text-gray-700'>
                <span className='text-xl text-dark-color text-center'>ტესტს ზედიზედ აკეთებ:<strong>{streak} დღეა</strong></span>
                <span>საუკეთესო შედეგი:<strong>{longestStreak} დღე</strong></span>
            </div>

            {/* Completed Days */}
            <div className='mt-4 bg-main-color text-dark-color rounded-full flex flex-col items-center py-3'>
                <h3 className='text-md font-medium'>სულ შესრულებული დღეები:</h3>
                <p className='text-2xl font-bold text-main-color bg-dark-color px-3 py-2 rounded-md'>{completedDays}</p>
            </div>
        </div>
    );
};

export default DailyStreak;