'use client';
import Image from 'next/image';
import { useState } from 'react';
import logo from '@/public/reviews-logo.png';
import dhol from '@/public/punjab/dhol.png';
import truck from '@/public/punjab/truck.png';
import {
  BsEmojiAngry,
  BsEmojiFrown,
  BsEmojiGrin,
  BsEmojiNeutral,
  BsEmojiSmile,
} from 'react-icons/bs';
import { useRouter } from 'next/navigation';

export default function Reviews() {
  const headers = [
    'Catergory',
    'Food(5)',
    'Service(5)',
    'Ambience(5)',
    'Overall(5)',
    'Comments',
  ];
  const tableKeys = [
    'cat',
    'food',
    'service',
    'ambience',
    'overall',
    'comment',
  ];
  const dummy = {
    cat: 'punjab',
    food: 5,
    service: 4,
    ambience: 3,
    overall: 4,
    comment: 'Good food and service',
  };
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
    <main className="min-h-screen w-full flex flex-col items-center gap-4 p-4 sm:p-8 bg-cream text-navy">
      {/* Restaurant information */}
      <div className="flex gap-x-4 items-center">
        {/* <Image src={logo} alt="Restaurant Image" width={70} height={70} /> */}
        <h1 className="md:text-3xl text-2xl font-bold text-center">
          Breakfast Realia Review
        </h1>
      </div>
      <div className="flex flex-col w-full border-2 rounded-lg bg-navy border-navy">
        {/* Table Heading */}
        <div className="grid grid-cols-6 w-full">
          {headers.map((item, index) => (
            <div
              key={index}
              className="first:rounded-tl-lg last:rounded-tr-lg text-[#EFEFEF] font-semibold px-4 py-1.5 text-center md:text-base sm:text-xs text-[10px] col-span-1"
            >
              {item}
            </div>
          ))}
          {/* Comments */}
        </div>
        {/* Table reviews */}
        <div className="flex flex-col w-full divide-y-2 divide-navy">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="bg-ice-blue last:rounded-b-lg text-navy grid grid-cols-6 md:text-base sm:text-xs text-[10px] divide-x-2 divide-navy"
            >
              {tableKeys.map((key, index) => (
                <div
                  key={index}
                  className="px-4 py-1.5 flex items-center justify-center text-center w-full h-full"
                >
                  {dummy[key]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
