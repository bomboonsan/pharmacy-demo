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
                <div className="flex justify-center items-center gap-5 my-5">

                    <h1 className="page-title">
                        History
                    </h1>
                </div>

                <div className="chartUI">
                    {/* <Chart type="doughnut" data={data} /> */}
                    <canvas id='myChart'></canvas>
                </div>

                <div className="max-w-[80%] w-full mx-auto">
                    <div className="mb-3">
                        <div className="card card-side bg-base-100 shadow relative cursor-pointer hover:bg-white hover:shadow-xl transition-all"  onClick={() => {router.push("/report")}}>
                            <figure className="w-1/3 bg-primary"><img src="./images/result/demo1.png" alt="Movie"/></figure>
                            <div className="card-body">
                                <h2 className="card-title">อาการที่ปวด</h2>
                                <time>
                                    วันที่ 17-22 มิถุนายน
                                </time>
                                <div className="flex justify-between">
                                    <p>
                                        ยาที่ทาน xxx
                                    </p>
                                    

                                </div>
                            </div>
                            <p className="text-right absolute right-2 top-5">
                                6 วัน
                            </p>
                        </div>
                    </div>

                    
                    <div className="mb-3">
                        <div className="card card-side bg-base-100 shadow relative cursor-pointer hover:bg-white hover:shadow-xl transition-all"  onClick={() => {router.push("/report")}}>
                            <figure className="w-1/3 bg-primary"><img src="./images/result/demo1.png" alt="Movie"/></figure>
                            <div className="card-body">
                                <h2 className="card-title">อาการที่ปวด</h2>
                                <time>
                                    วันที่ 17-22 มิถุนายน
                                </time>
                                <div className="flex justify-between">
                                    <p>
                                        ยาที่ทาน xxx
                                    </p>
                                    

                                </div>
                            </div>
                            <p className="text-right absolute right-2 top-5">
                                6 วัน
                            </p>
                        </div>
                    </div>
                    
                </div>

            </div>
        </>
    );
}
