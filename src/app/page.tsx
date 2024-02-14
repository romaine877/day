'use client'
import Image from "next/image";
import { useState } from "react";
import ReactPlayer from 'react-player'
import animation from "../assets/lottie.json";
import heart from "../assets/heart.json";
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

   
         <HTMLFlipBook style={{}}
        // children={{}}
        width={550}
        height={733}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={() => { } }
        onChangeOrientation={() => { } }
        onChangeState={() => { } }
        className="demo-book" startPage={0} drawShadow={false} flippingTime={100} usePortrait={false} startZIndex={0} autoSize={false} clickEventForward={false} useMouseEvents={false} swipeDistance={0} showPageCorners={false} disableFlipByClick={false}>
       <div className="demoPage">Page 1</div>
      <div className="demoPage">Page 2</div>
      <div className="demoPage">Page 3</div>
      <div className="demoPage">Page 4</div>
      <div className="demoPage">Page 4</div>
      <div className="demoPage">Page 4</div>
      <div className="demoPage">Page 4</div>
      </HTMLFlipBook>   </div>)
    :(
      <main className="flex min-h-screen flex-col items-center justify-center ">

        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded flex flex-col p-20 mx-auto">
          <ToastContainer position="top-center"
            autoClose={7000} />
          <h1 className="text-4xl  text-purple-700 text-center">
            Will you be my Valentine?
          </h1>
          <div className="mx-auto ">
            <Lottie animationData={animation} loop={true} />

          </div>
          <div className=" mx-auto">
            <Lottie animationData={heart} loop={true} />
          </div>

          <button
            onClick={() => setShowBook(true)}
            className="px-6 py-3 text-white bg-green-600 rounded-md"
          >
            Yes
          </button>
          <div className="h-24"></div>
          <button
            onClick={notify}
            className="px-6 py-3 text-white bg-red-600 rounded-md"
          >
            No
          </button>



          <ReactPlayer url={'damage.mp3'} loop playing={playing} onReady={() => console.log('ready')} />
        </div>



      </main>)
    ) : (
      <div className="flex min-h-screen items-center justify-center">
        <button
          onClick={() => {
            setLoading(true);
            setPlaying(true);

          }

          }
          className="px-6 py-3 text-white bg-blue-600 rounded-md"
        >
          Load Content
        </button>
      </div>
    )
  );
}
