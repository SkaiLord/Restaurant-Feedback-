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
import Link from 'next/link';

export default function Home() {
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
    <main className="min-h-screen w-full flex flex-col items-center justify-center gap-4 p-4 sm:p-8 bg-cream text-navy">
      {/* Restaurant information */}
      <div className="flex gap-x-4 items-center">
        {/* <Image src={logo} alt="Restaurant Image" width={70} height={70} /> */}
        <h1 className="md:text-3xl text-2xl font-bold text-center">
          Breakfast Realia Review
        </h1>
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-center gap-x-4 h-full">
        <Link
          href="/punjab"
          className="w-fit px-6 py-1.5 rounded-xl border border-dark-red bg-rose text-[#141414] text-lg font-medium hover:bg-dark-red hover:text-[#EFEFEF]"
        >
          Punjab
        </Link>
        OR
        <Link
          href="/kerala"
          className="w-fit px-6 py-1.5 rounded-xl border border-dark-olive bg-pastel-green text-[#141414] text-lg font-medium hover:bg-dark-olive hover:text-[#EFEFEF]"
        >
          Kerala
        </Link>
      </div>
    </main>
  );
}
