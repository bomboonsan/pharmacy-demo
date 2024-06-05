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
                <h6 className="text-black text-xl font-semibold mb-5 inline-flex items-center gap-3 cursor-pointer" onClick={() => router.back()}>                  
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z"/></svg>
                    ย้อนกลับ
                </h6>
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
                   
                   {/* <div className="grid grid-cols-2 gap-5">
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
                        
                   </div> */}
                    
                    <div className="overflow-x-auto box">
                        <p className="text-center text-xl">
                            ประวันการทานยา
                        </p>
                        <table className="table">
                            {/* head */}
                            <thead>
                            <tr>
                                <th></th>
                                <th>ยา</th>
                                <th>วันที่รับยา</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>arcoxia</td>
                                <td>8/2</td>
                            </tr>
                            {/* row 2 */}
                            <tr className="hover">
                                <th>2</th>
                                <td>lorem</td>
                                <td>13/5</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>dolor</td>
                                <td>15/7</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>


                </div>

            </div>
        </>
    );
}
