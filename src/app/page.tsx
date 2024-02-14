'use client'
import Image from "next/image";
import { useState } from "react";
import ReactPlayer from 'react-player'
import animation from "../assets/lottie.json";
import heart from "../assets/heart.json";
import gift from "../assets/gift.json";
import Lottie from "lottie-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HTMLFlipBook from "react-pageflip";


export default function Home() {
  const [loading, setLoading] = useState(false);
  const [showBook, setShowBook] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [toastListIndex, setToastListIndex] = useState(0);

  const toastList = [
    '🎵🎵🎵',
    '🎵🎵🎵',
    'If you got it, it ain\'t a question',
    'Ooh, it ain\'t no room for guessing', 'No more than emotionally invested',
    'Showing you all my imperfections', 'If I let you, you\'ll take me for granted',
    'If I\'m worth more than you could manage', 'Open with me, oh, we could be honest',
    'Closer to me, oh, giving me solace',
    'Promise that you won\'t let me fall',
    'Holding me tight',
    'Loving me right',
    'Giving me life',
    'All night',
    'You could be',
    'Telling me lies',
    'Making me cry',
    'Wasting my time',
    'The whole time',
    'So just be',
    'Careful what you take for granted, yeah',
    'Cause with me, know you could do damage',
    'You, you could do damage',
    'You, you could do damage',
    'Oh, you could do damage',
    '🎵🎵🎵',
    '🎵🎵🎵',
    'Worried /bout it, I\'m putting pressure (you know)',
    'You\'ll only cut me if I let you',
    'No, he ain\'t the one, it\'s just for pleasure',
    'Either learn me or I\'m a lesson gone, oh',
    'If you want me, don\'t take me for granted, yeah, yeah',
    'If I\'m worth more than you could manage, baby',
    'Oh, you\'re falling for me',
    'Oh, baby, I caught it',
    'Ooh, we could be whatever you wanna call it',
    'Promise that you won\'t let me fall, oh',
    'Holding me tight',
    'Loving me right',
    'Giving me life',
    'All night',
    'You could be',
    'Telling me lies',
    'Making me cry',
    'Wasting my time',
    'The whole time',
    'So just be',
    'Careful what you take for granted, yeah, uh',
    'Cause with me, know you could do damage',
    'You, uh, you could do damage',
    'You, you could do damage',
    'Oh, you could do damage',
    'No, you could do damage, yeah',
    'Oh, you could do damage, yeah, yeah, yeah, yeah',
    'Oh, you could do damage on me',
    '🎵🎵🎵',
    '🎵🎵🎵',
  ];







  const notify = () => {
    toast(toastList[toastListIndex],)
    setToastListIndex((toastListIndex + 1) % toastList.length);
  };

  return (
    loading ? (
      showBook ? (  <div className="flex min-h-screen items-center justify-center">

                <ReactPlayer url={'https://youtube.com/shorts/BEMwh-KCPOo?si=TyUqqS0Na8q5vpNE'}  />
   
          </div>)
    :(
      <main className="flex min-h-screen flex-col items-center justify-center ">

        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded flex flex-col p-20 mx-auto">
          <ToastContainer position="top-center"
            autoClose={7000} />
          <h1 className="text-4xl  text-purple-700 text-center">
            Will you be my Valentine?
          </h1>
          <div className="h-10"></div>
          <Image

          quality={100}
          className="rounded-md mx-auto"
      src="/pic.jpg" // Path to your image
      alt="Description of the image"
      width={500} // Desired width
      height={300} // Desired height
    />
          <div className="mx-auto ">
            <Lottie animationData={animation} loop={true} />

          </div>
          <div className=" mx-auto">
            <Lottie animationData={heart} loop={true} />
          </div>
          <div className="mx-auto">

          <button
            onClick={() =>{ 
              setShowBook(true)
              setPlaying(false);
            }}
            className="px-6 py-3 text-white bg-green-600 w-28 rounded-md"
          >
            Yes
          </button>
          <div className="h-24"></div>
          <button
            onClick={notify}
            className="px-6 py-3 text-white bg-red-600 w-28 rounded-md"
          >
            No
          </button>

          </div>



          <ReactPlayer url={'damage.mp3'} loop playing={playing} onReady={() => console.log('ready')} />
        </div>



      </main>)
    ) : (
      <div className="flex min-h-screen items-center justify-center ">
         <Lottie animationData={gift} width={500} height={500} loop={true} onClick={() => {
            setLoading(true);
            setPlaying(true);

          }} />
          

          
       
      </div>
    )
  );
}
