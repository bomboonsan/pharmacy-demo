'use client'

import Image from "next/image";
import Box from "@/components/Box";

// import lottie
import Lottie from 'react-lottie';
import animationData from '../../../lotties/loading';

// import router
import { useRouter } from 'next/navigation'

import dynamic from "next/dynamic";

// Import chartjs
const MultiLineChart = dynamic(() => import("@/components/MultiLineChart"), { ssr: false });
const LineChart = dynamic(() => import("@/components/LineChart"), { ssr: false });
const Doughnut = dynamic(() => import("@/components/DoughnutChart"), { ssr: false });

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
                        Report
                    </h1>
                </div>                

                <div className="max-w-[80%] w-full mx-auto">

                    <div className="box p-4 mb-5">
                    <LineChart />
                    </div>

                    <div className="box p-4 mb-5">
                    <MultiLineChart />
                    </div>
                   
                   <div className="grid grid-cols-2 gap-5">
                        <div className="box text-center py-3">
                            <Doughnut />
                            <p className="mt-2">
                                ตัวอย่างกราฟ
                            </p>
                        </div>
                        <div className="box text-center py-3">
                            <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":70}} role="progressbar">70%</div> 
                            <p>
                                อาการปวด
                            </p>
                        </div>
                        <div className="box text-center py-3">
                            <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":70}} role="progressbar">70%</div> 
                            <p>
                                อาการปวด
                            </p>
                        </div>
                        <div className="box text-center py-3">
                            <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":70}} role="progressbar">70%</div> 
                            <p>
                                อาการปวด
                            </p>
                        </div>
                        
                   </div>
                    
                </div>

            </div>
        </>
    );
}
