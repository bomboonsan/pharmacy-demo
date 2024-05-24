'use client'

import Image from "next/image";
import Box from "@/components/Box";

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
    return (
        <>
            <div className="p-5">
                <div className="flex justify-center items-center gap-5 my-5">

                    <h1 className="page-title">
                        หน้าแรก
                    </h1>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="w-2/5 box h-auto flex justify-center items-center hover:bg-white/60 cursor-pointer" onClick={handleStart}>
                        <p className="text-xl font-bold">
                            เริ่ม
                        </p>
                    </div>
                    {/* <Lottie 
                        options={defaultOptions}
                        height={350}
                        width={300}
                    /> */}
                </div>
            </div>
        </>
    );
}
