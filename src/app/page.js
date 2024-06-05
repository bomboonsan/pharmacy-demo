'use client'

import Image from "next/image";
import Box from "@/components/Box";

import { setCookie , getCookies  } from 'cookies-next';


// import lottie
import Lottie from 'react-lottie';
import animationData from '../../lotties/loading';

// import router
import { useRouter } from 'next/navigation'

export default function Home() {
    const router = useRouter()

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    const handleStart = () => {
        router.push("/step1")
    }

    const { textCookie } = getCookies();
    console.log('textCookie : ',textCookie)

    const handleSetCookie = (name, value, options) => {
        setCookie('textCookie', 'ทดสอบ');
    }
    
    return (
        <>
            <div className="min-h-screen flex flex-row justify-center items-center">
                <div className="basis-full w-full">
                    <div className="text-center">
                            <Image className="mx-auto w-[330px] h-auto" src="/images/logo-painguide.png" alt="logo" width={500} height={500} />
                    </div>  
                    <div className="flex flex-col items-center gap-5 flex-wrap justify-center mt-20">
                        <div className="w-[250px] backdrop-blur-sm bg-white rounded-md shadow shadow-neutral-400/30 px-3 py-2 text-black font-medium h-auto inline-flex justify-center items-center hover:bg-white/60 cursor-pointer" onClick={handleStart}>
                            <p className="text-btn font-bold">
                                เริ่มใหม่
                            </p>
                        </div>

                        <div className="w-[250px] box h-auto inline-flex justify-center items-center hover:bg-white/60 cursor-pointer" onClick={() => {router.push("/submit")}}>
                            <p className="text-btn font-bold">
                                บันทึกการทานยา    
                            </p>
                        </div>

                        <div className="w-[250px] box h-auto inline-flex justify-center items-center hover:bg-white/60 cursor-pointer" onClick={() => {router.push("/history")}}>
                            <p className="text-btn font-bold">
                                ประวัติการทานยา
                            </p>
                        </div>
                        {/* <Lottie 
                            options={defaultOptions}
                            height={350}
                            width={300}
                        /> */}
                    </div>
                </div>
            </div>
        </>
    );
}
