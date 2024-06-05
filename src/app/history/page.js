'use client'

import Image from "next/image";
import Box from "@/components/Box";

// import lottie
import Lottie from 'react-lottie';
import animationData from '../../../lotties/loading';

// import router
import { useRouter , useEffect } from 'next/navigation'

// import chartjs
import { Chart } from "chart.js";

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
                <h6 className="text-black text-xl font-semibold mb-5 inline-flex items-center gap-3 cursor-pointer" onClick={() => {router.push("/")}}>                  
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z"/></svg>
                    หน้าหลัก
                </h6>
                <div className="flex justify-center items-center gap-5 my-5">

                    <h1 className="page-title">
                        History
                    </h1>
                </div>

                

                <div className="max-w-[80%] w-full mx-auto">
                    <div className="mb-3">
                        <div className="card card-side bg-base-100 shadow relative cursor-pointer hover:bg-white hover:shadow-xl transition-all"  onClick={() => {router.push("/report")}}>
                            <figure className="w-1/3 bg-primary"><img src="./images/result/demo2.png" alt="Movie"/></figure>
                            <div className="card-body">
                                <h2 className="card-title">อาการที่ปวด</h2>
                                <time>
                                    วันที่ 25-30 มิถุนายน
                                </time>
                                <div className="flex justify-between">
                                    <p>
                                        ยาที่ทาน arcoxia
                                    </p>
                                    

                                </div>
                            </div>
                            <p className="text-right absolute right-2 top-5">
                                6 วัน
                            </p>
                        </div>
                    </div>

                    
                    {/* <div className="mb-3">
                        <div className="card card-side bg-base-100 shadow relative cursor-pointer hover:bg-white hover:shadow-xl transition-all"  onClick={() => {router.push("/report")}}>
                            <figure className="w-1/3 bg-primary"><img src="./images/result/demo1.png" alt="Movie"/></figure>
                            <div className="card-body">
                                <h2 className="card-title">อาการที่ปวด</h2>
                                <time>
                                    วันที่ 17-22 มิถุนายน
                                </time>
                                <div className="flex justify-between">
                                    <p>
                                        ยาที่ทาน arcoxia , lorem
                                    </p>
                                    

                                </div>
                            </div>
                            <p className="text-right absolute right-2 top-5">
                                6 วัน
                            </p>
                        </div>
                    </div> */}
                    
                </div>

            </div>
        </>
    );
}
