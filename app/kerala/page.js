'use client';
import Image from 'next/image';
import { useState } from 'react';
import logo from '@/public/reviews-logo.png';
import palmTrees from '@/public/kerala/palm-trees.png';
import greenMan from '@/public/kerala/green-man.png';
import {
  BsEmojiAngry,
  BsEmojiFrown,
  BsEmojiGrin,
  BsEmojiNeutral,
  BsEmojiSmile,
} from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import { supabaseClient } from '@/utils/supabaseClient';

export default function Kerala() {
  const [foodRating, setFoodRating] = useState(0);
  const [serviceRating, setServiceRating] = useState(0);
  const [ambienceRating, setAmbienceRating] = useState(0);
  const [overallRating, setOverallRating] = useState(0);
  const [comment, setComment] = useState('');
  const [hover, setHover] = useState(0);
  const router = useRouter();

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send the data to a backend server
    // or use a Supabase client to save the data to a database
    const insertData = {
      cat: 'kerala',
      ...(foodRating !== 0 && { food: foodRating }),
      ...(serviceRating !== 0 && { service: serviceRating }),
      ...(overallRating !== 0 && { overall: overallRating }),
      ...(ambienceRating !== 0 && { ambience: ambienceRating }),
      ...(comment.length !== 0 && { comment: comment }),
    };
    // console.log(insertData);
    const { error } = await supabaseClient
      .from('reviews')
      .insert(insertData)
      .single();
    if (error) console.log(object);
    router.push('/submit');
  };
  return (
    <main className="flex min-h-screen w-full md:grid md:grid-cols-10 flex-col items-center gap-4 p-4 sm:p-8 bg-pastel-green text-dark-olive">
      <div className="md:col-span-3 md:flex hidden">
        <Image
          src={palmTrees}
          alt="dhol"
          width={400}
          height={500}
          className=""
        />
      </div>
      <div className="col-span-4 flex flex-col items-center w-full gap-y-8">
        {/* Restaurant information */}
        <div className="flex gap-x-4 items-center">
          {/* <Image src={logo} alt="Restaurant Image" width={70} height={70} /> */}
          <h1 className="md:text-3xl text-2xl font-bold text-center">
            Breakfast Realia Review
          </h1>
        </div>

        {/* Rating feature */}
        <div className="grid grid-cols-2 md:gap-4 gap-2 w-full lg:px-10 sm:px-4 px-0 items-center justify-items-stretch">
          {/* Food rating */}
          <span className="md:text-2xl sm:text-xl text-lg md:justify-self-start xs:justify-self-end font-semibold col-span-1">
            Quality of Food:
          </span>
          <div className="flex items-center md:gap-x-2 gap-x-1 col-span-1">
            <BsEmojiAngry
              className={`${
                foodRating == 1
                  ? 'text-[#141414] bg-red-600'
                  : 'text-light-olive hover:text-[#141414] bg-[#EFEFEF] hover:bg-red-600'
              } md:w-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 rounded-full cursor-pointer`}
              onClick={() => setFoodRating(1)}
            />
            <BsEmojiFrown
              className={`${
                foodRating == 2
                  ? 'text-[#141414] bg-orange-500'
                  : 'text-light-olive hover:text-[#141414] bg-[#EFEFEF] hover:bg-orange-500'
              } md:w-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 rounded-full cursor-pointer`}
              onClick={() => setFoodRating(2)}
            />
            <BsEmojiNeutral
              className={`${
                foodRating == 3
                  ? 'text-[#141414] bg-amber-500'
                  : 'text-light-olive hover:text-[#141414] bg-[#EFEFEF] hover:bg-amber-500'
              } md:w-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 rounded-full cursor-pointer`}
              onClick={() => setFoodRating(3)}
            />
            <BsEmojiSmile
              className={`${
                foodRating == 4
                  ? 'text-[#141414] bg-lime-500'
                  : 'text-light-olive hover:text-[#141414] bg-[#EFEFEF] hover:bg-lime-500'
              } md:w-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 rounded-full cursor-pointer`}
              onClick={() => setFoodRating(4)}
            />
            <BsEmojiGrin
              className={`${
                foodRating == 5
                  ? 'text-[#141414] bg-green-500'
                  : 'text-light-olive hover:text-[#141414] bg-[#EFEFEF] hover:bg-green-500'
              } md:w-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 rounded-full cursor-pointer`}
              onClick={() => setFoodRating(5)}
            />
          </div>
          {/* Service rating */}
          <span className="md:text-2xl sm:text-xl text-lg md:justify-self-start xs:justify-self-end font-semibold col-span-1">
            Quality of Service:
          </span>
          <div className="flex items-center md:gap-x-2 gap-x-1 col-span-1">
            <BsEmojiAngry
              className={`${
                serviceRating == 1
                  ? 'text-[#141414] bg-red-600'
                  : 'text-light-olive hover:text-[#141414] bg-[#EFEFEF] hover:bg-red-600'
              } md:w-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 rounded-full cursor-pointer`}
              onClick={() => setServiceRating(1)}
            />
            <BsEmojiFrown
              className={`${
                serviceRating == 2
                  ? 'text-[#141414] bg-orange-500'
                  : 'text-light-olive hover:text-[#141414] bg-[#EFEFEF] hover:bg-orange-500'
              } md:w-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 rounded-full cursor-pointer`}
              onClick={() => setServiceRating(2)}
            />
            <BsEmojiNeutral
              className={`${
                serviceRating == 3
                  ? 'text-[#141414] bg-amber-500'
                  : 'text-light-olive hover:text-[#141414] bg-[#EFEFEF] hover:bg-amber-500'
              } md:w-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 rounded-full cursor-pointer`}
              onClick={() => setServiceRating(3)}
            />
            <BsEmojiSmile
              className={`${
                serviceRating == 4
                  ? 'text-[#141414] bg-lime-500'
                  : 'text-light-olive hover:text-[#141414] bg-[#EFEFEF] hover:bg-lime-500'
              } md:w-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 rounded-full cursor-pointer`}
              onClick={() => setServiceRating(4)}
            />
            <BsEmojiGrin
              className={`${
                serviceRating == 5
                  ? 'text-[#141414] bg-green-500'
                  : 'text-light-olive hover:text-[#141414] bg-[#EFEFEF] hover:bg-green-500'
              } md:w-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 rounded-full cursor-pointer`}
              onClick={() => setServiceRating(5)}
            />
          </div>
          {/* Ambience rating */}
          <span className="md:text-2xl sm:text-xl text-lg md:justify-self-start xs:justify-self-end font-semibold col-span-1">
            Ambience:
          </span>
          <div className="flex items-center md:gap-x-2 gap-x-1 col-span-1">
            <BsEmojiAngry
              className={`${
                ambienceRating == 1
                  ? 'text-[#141414] bg-red-600'
                  : 'text-light-olive hover:text-[#141414] bg-[#EFEFEF] hover:bg-red-600'
              } md:w-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 rounded-full cursor-pointer`}
              onClick={() => setAmbienceRating(1)}
            />
            <BsEmojiFrown
              className={`${
                ambienceRating == 2
                  ? 'text-[#141414] bg-orange-500'
                  : 'text-light-olive hover:text-[#141414] bg-[#EFEFEF] hover:bg-orange-500'
              } md:w-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 rounded-full cursor-pointer`}
              onClick={() => setAmbienceRating(2)}
            />
            <BsEmojiNeutral
              className={`${
                ambienceRating == 3
                  ? 'text-[#141414] bg-amber-500'
                  : 'text-light-olive hover:text-[#141414] bg-[#EFEFEF] hover:bg-amber-500'
              } md:w-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 rounded-full cursor-pointer`}
              onClick={() => setAmbienceRating(3)}
            />
            <BsEmojiSmile
              className={`${
                ambienceRating == 4
                  ? 'text-[#141414] bg-lime-500'
                  : 'text-light-olive hover:text-[#141414] bg-[#EFEFEF] hover:bg-lime-500'
              } md:w-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 rounded-full cursor-pointer`}
              onClick={() => setAmbienceRating(4)}
            />
            <BsEmojiGrin
              className={`${
                ambienceRating == 5
                  ? 'text-[#141414] bg-green-500'
                  : 'text-light-olive hover:text-[#141414] bg-[#EFEFEF] hover:bg-green-500'
              } md:w-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 rounded-full cursor-pointer`}
              onClick={() => setAmbienceRating(5)}
            />
          </div>
          {/* Overall Rating Stars */}
          <span className="md:text-2xl sm:text-xl text-lg md:justify-self-start xs:justify-self-end font-semibold col-span-1">
            Overall Experience:
          </span>
          <div className="flex items-center w-full sm:gap-x-3 gap-x-1 col-span-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  overallRating != 0 && star <= overallRating
                    ? `transition ease-in-out fill-golden`
                    : 'fill-none'
                } md:h-7 md:w-7 sm:w-6 sm:h-6 w-5 h-5 bg-pastel-green text-dark-olive hover:fill-golden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer`}
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
          <button
            className="w-fit px-6 py-1.5 rounded-xl border border-dark-olive bg-transparent text-lg font-medium hover:bg-dark-olive hover:text-[#EFEFEF]"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="md:col-span-3 flex items-end md:px-0 px-4">
        <div className="md:h-full h-3/4">
          <Image
            src={greenMan}
            alt="dhol"
            width={400}
            height={700}
            className="md:h-auto h-full w-auto col-span-1"
          />
        </div>
        <div className="md:hidden h-3/5 flex justify-center">
          <Image
            src={palmTrees}
            alt="dhol"
            width={200}
            height={200}
            className="col-span-1 w-auto h-full"
          />
        </div>
      </div>
    </main>
  );
}
