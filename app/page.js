'use client';
import Image from 'next/image';
import { useState } from 'react';
import logo from '../public/reviews-logo.png';
import {
  BsEmojiAngry,
  BsEmojiFrown,
  BsEmojiGrin,
  BsEmojiNeutral,
  BsEmojiSmile,
} from 'react-icons/bs';

export default function Home() {
  const [foodRating, setFoodRating] = useState(0);
  const [serviceRating, setServiceRating] = useState(0);
  const [ambienceRating, setAmbienceRating] = useState(0);
  const [overallRating, setOverallRating] = useState(0);
  const [comment, setComment] = useState('');
  const [hover, setHover] = useState(0);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send the data to a backend server
    console.log({
      foodRating,
      serviceRating,
      ambienceRating,
      overallRating,
      comment,
    });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-cream text-dark-red">
      {/* Restaurant information */}
      <div className="flex gap-x-4 items-center">
        <Image src={logo} alt="Restaurant Image" width={70} height={70} />
        <h1 className="text-3xl font-bold">Restaurant Reviews</h1>
      </div>

      {/* Rating feature */}
      <div className="grid grid-cols-2 md:gap-4 gap-2 md:w-[45%] w-full lg:px-10 sm:px-4 px-2 justify-center items-center">
        {/* Food rating */}
        <span className="text-2xl font-semibold col-span-1">
          Quality of Food:
        </span>
        <div className="flex items-center md:gap-x-2 gap-x-1 col-span-1">
          <BsEmojiAngry
            className={`${
              foodRating == 1
                ? 'text-[#141414] bg-red-600'
                : 'text-rose hover:text-[#141414] bg-[#EFEFEF] hover:bg-red-600'
            } w-8 h-8 rounded-full cursor-pointer`}
            onClick={() => setFoodRating(1)}
          />
          <BsEmojiFrown
            className={`${
              foodRating == 2
                ? 'text-[#141414] bg-orange-500'
                : 'text-rose hover:text-[#141414] bg-[#EFEFEF] hover:bg-orange-500'
            } w-8 h-8 rounded-full cursor-pointer`}
            onClick={() => setFoodRating(2)}
          />
          <BsEmojiNeutral
            className={`${
              foodRating == 3
                ? 'text-[#141414] bg-amber-500'
                : 'text-rose hover:text-[#141414] bg-[#EFEFEF] hover:bg-amber-500'
            } w-8 h-8 rounded-full cursor-pointer`}
            onClick={() => setFoodRating(3)}
          />
          <BsEmojiSmile
            className={`${
              foodRating == 4
                ? 'text-[#141414] bg-lime-500'
                : 'text-rose hover:text-[#141414] bg-[#EFEFEF] hover:bg-lime-500'
            } w-8 h-8 rounded-full cursor-pointer`}
            onClick={() => setFoodRating(4)}
          />
          <BsEmojiGrin
            className={`${
              foodRating == 5
                ? 'text-[#141414] bg-green-500'
                : 'text-rose hover:text-[#141414] bg-[#EFEFEF] hover:bg-green-500'
            } w-8 h-8 rounded-full cursor-pointer`}
            onClick={() => setFoodRating(5)}
          />
        </div>
        {/* Service rating */}
        <span className="text-2xl font-semibold col-span-1">
          Quality of Service:
        </span>
        <div className="flex items-center md:gap-x-2 gap-x-1 col-span-1">
          <BsEmojiAngry
            className={`${
              serviceRating == 1
                ? 'text-[#141414] bg-red-600'
                : 'text-rose hover:text-[#141414] bg-[#EFEFEF] hover:bg-red-600'
            } w-8 h-8 rounded-full cursor-pointer`}
            onClick={() => setServiceRating(1)}
          />
          <BsEmojiFrown
            className={`${
              serviceRating == 2
                ? 'text-[#141414] bg-orange-500'
                : 'text-rose hover:text-[#141414] bg-[#EFEFEF] hover:bg-orange-500'
            } w-8 h-8 rounded-full cursor-pointer`}
            onClick={() => setServiceRating(2)}
          />
          <BsEmojiNeutral
            className={`${
              serviceRating == 3
                ? 'text-[#141414] bg-amber-500'
                : 'text-rose hover:text-[#141414] bg-[#EFEFEF] hover:bg-amber-500'
            } w-8 h-8 rounded-full cursor-pointer`}
            onClick={() => setServiceRating(3)}
          />
          <BsEmojiSmile
            className={`${
              serviceRating == 4
                ? 'text-[#141414] bg-lime-500'
                : 'text-rose hover:text-[#141414] bg-[#EFEFEF] hover:bg-lime-500'
            } w-8 h-8 rounded-full cursor-pointer`}
            onClick={() => setServiceRating(4)}
          />
          <BsEmojiGrin
            className={`${
              serviceRating == 5
                ? 'text-[#141414] bg-green-500'
                : 'text-rose hover:text-[#141414] bg-[#EFEFEF] hover:bg-green-500'
            } w-8 h-8 rounded-full cursor-pointer`}
            onClick={() => setServiceRating(5)}
          />
        </div>
        {/* Ambience rating */}
        <span className="text-2xl font-semibold col-span-1">Ambience:</span>
        <div className="flex items-center md:gap-x-2 gap-x-1 col-span-1">
          <BsEmojiAngry
            className={`${
              ambienceRating == 1
                ? 'text-[#141414] bg-red-600'
                : 'text-rose hover:text-[#141414] bg-[#EFEFEF] hover:bg-red-600'
            } w-8 h-8 rounded-full cursor-pointer`}
            onClick={() => setAmbienceRating(1)}
          />
          <BsEmojiFrown
            className={`${
              ambienceRating == 2
                ? 'text-[#141414] bg-orange-500'
                : 'text-rose hover:text-[#141414] bg-[#EFEFEF] hover:bg-orange-500'
            } w-8 h-8 rounded-full cursor-pointer`}
            onClick={() => setAmbienceRating(2)}
          />
          <BsEmojiNeutral
            className={`${
              ambienceRating == 3
                ? 'text-[#141414] bg-amber-500'
                : 'text-rose hover:text-[#141414] bg-[#EFEFEF] hover:bg-amber-500'
            } w-8 h-8 rounded-full cursor-pointer`}
            onClick={() => setAmbienceRating(3)}
          />
          <BsEmojiSmile
            className={`${
              ambienceRating == 4
                ? 'text-[#141414] bg-lime-500'
                : 'text-rose hover:text-[#141414] bg-[#EFEFEF] hover:bg-lime-500'
            } w-8 h-8 rounded-full cursor-pointer`}
            onClick={() => setAmbienceRating(4)}
          />
          <BsEmojiGrin
            className={`${
              ambienceRating == 5
                ? 'text-[#141414] bg-green-500'
                : 'text-rose hover:text-[#141414] bg-[#EFEFEF] hover:bg-green-500'
            } w-8 h-8 rounded-full cursor-pointer`}
            onClick={() => setAmbienceRating(5)}
          />
        </div>
        {/* Overall Rating Stars */}
        <span className="text-2xl font-semibold col-span-1">
          Overall Experience:
        </span>
        <div className="flex items-center w-full gap-x-3 col-span-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                overallRating != 0 && star < overallRating
                  ? `transition ease-in-out fill-golden`
                  : 'fill-none'
              } h-7 w-7 bg-cream text-dark-red hover:fill-golden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer`}
              onMouseEnter={() => setOverallRating(star)}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2l3.09 6.31L22 9.5l-5 4.87 1.18 6.83L12 18.01l-6.18 3.19L7 14.37 2 9.5l6.91-1.19L12 2z"
              />
            </svg>
          ))}
        </div>
      </div>

      {/* Comment box */}
      <div className="flex flex-col items-center gap-y-6 md:w-[75%] w-full lg:px-10 sm:px-4 px-2">
        <textarea
          className="w-full h-32 border border-gray-300 rounded p-2"
          placeholder="Leave a comment..."
        />
        <button className="w-fit px-6 py-1.5 rounded-xl border border-dark-red bg-transparent text-lg font-medium hover:bg-dark-red hover:text-[#EFEFEF]">
          Submit
        </button>
      </div>
    </main>
  );
}
