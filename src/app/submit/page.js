'use client'

import Image from "next/image";
import Step from "@/components/Step";
import { useState } from "react";

// import router
import { useRouter , useEffect } from 'next/navigation'

export default function Step2() {
    const router = useRouter()

    const [position, setPosition] = useState(null);
    const [level, setLevel] = useState(0);
    const [levelTitle, setLevelTitle] = useState(null);
    const [emojiLevel, setEmojiLevel] = useState(1);

    // const currentDay = currentDate.getDate();
    // const currentMonth = currentDate.getMonth() + 1;
    // const currentYear = currentDate.getFullYear();
    // const [currentDay, setCurrentDay] = useState(3);
    // const [currentMonth, setCurrentMonth] = useState(null);
    // const [currentYear, setCurrentYear] = useState(null);

    const handleLevel = (e) => {
        setLevel(e.target.value);
        if(e.target.value == 25) {
            setLevelTitle("ปวดน้อย");
        }
        if(e.target.value == 50) {
            setLevelTitle("ปวดปานกลาง");
        }
        if(e.target.value == 75) {
            setLevelTitle("ปวดมาก");
        }
        if(e.target.value == 100) {
            setLevelTitle("ปวดมากที่สุด");
        }

        if(levelTitle !== null) {
            if( e.target.value == 100 ) {
                setEmojiLevel(5);
            } else {
                setEmojiLevel(Math.floor(((e.target.value) / 20)+1));
            }
        }

    }

    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    
    


    return (
        <div className="p-5">

            <div className="relative w-[80%] mx-auto mb-5">
                {/* <h1 className="page-title mb-10">
                บันทึกการทานยา
                </h1> */}
                <p className="font-bold text-3xl text-center mt-7">
                วันนี้ปวดเท่าไหร่
                </p>
                <div className="flex justify-between">
                    <p>ปวดน้อย</p>
                    <p>ปวดมาก</p>
                </div>
                <input type="range" min={0} max="100" value={level} className="range range-primary" step="10" onChange={handleLevel} />
                <div className="w-full flex justify-between text-xs px-2">
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                </div>
                <div className="grid grid-cols-10 gap-0 h-4 mb-3 -mt-1">
                    <div className="bg-[#74b551]"></div>
                    <div className="bg-[#7fba53]"></div>
                    <div className="bg-[#98c34d]"></div>
                    <div className="bg-[#c0ca43]"></div>
                    <div className="bg-[#f2cb2e]"></div>
                    <div className="bg-[#ebb231]"></div>
                    <div className="bg-[#e19831]"></div>
                    <div className="bg-[#dc802d]"></div>
                    <div className="bg-[#d6682d]"></div>
                    <div className="bg-[#d14c2b]"></div>
                </div>

                {/*  */}
                <div className="flex justify-center mt-10">
                    <div className="stats">    
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                {/* <img src="/images/emoji/"{emojiLevel}".png" /> */}
                                <img src={`/images/emoji/${emojiLevel}.png`} />
                                {/* <Image className="block absolute w-full top-0 left-0 z-0" src={`/images/emoji/${emojiLevel}.png`} alt="step1" width={500} height={500} /> */}
                                </div>
                            </div>
                            </div>
                            <div className="stat-value">{level}%</div>
                            <div className="stat-title">
                                <span className={level > 50 ? 'text-red-600' : level == 50 ? 'text-yellow-500' : 'text-green-600'}>
                                {levelTitle}
                                </span>
                            </div>
                            <div className="stat-desc text-secondary">
                                lorem ipsum dolor sit amet
                            </div>
                        </div>                    
                    </div>
                </div>
                {/*  */}


                <p className="mt-10 font-bold text-3xl text-center">
                    ยาที่ทาน
                </p>

                <div className="form-control max-w-[250px] mx-auto">
                    <label className="label cursor-pointer">
                        <input type="checkbox" className="checkbox checkbox-primary" />
                        <span className="label-text flex-1 ml-5">ARCOXIA</span> 
                    </label>
                    <label className="label cursor-pointer">
                        <input type="checkbox" className="checkbox checkbox-primary" />
                        <span className="label-text flex-1 ml-5">Test</span> 
                    </label>
                    <label className="label cursor-pointer">
                        <input type="checkbox" className="checkbox checkbox-primary" />
                        <span className="label-text flex-1 ml-3">
                            <input type="text" className="w-full px-2 py-0.5 text-primary bg-inherit border-b border-b-primary rounded-md placeholder:text-primary" placeholder="อื่นๆ" />
                        </span> 
                    </label>
                </div>

                <p className="mt-10 font-bold text-3xl text-center">
                    ทานยาเมื่อไหร่
                </p>
                <div className="flex flex-wrap">
                    <div className="basis-1/3 w-1/3">                        
                    <select className="w-full text-center">
                            <option disabled>วันที่</option>
                            <option selected={currentDay == 1 ? true : false}>1</option>
                            <option selected={currentDay == 2 ? true : false}>2</option>
                            <option selected={currentDay == 3 ? true : false}>3</option>
                            <option selected={currentDay == 4 ? true : false}>4</option>
                            <option selected={currentDay == 5 ? true : false}>5</option>
                            <option selected={currentDay == 6 ? true : false}>6</option>
                            <option selected={currentDay == 7 ? true : false}>7</option>
                            <option selected={currentDay == 8 ? true : false}>8</option>
                            <option selected={currentDay == 9 ? true : false}>9</option>
                            <option selected={currentDay == 10 ? true : false}>10</option>
                            <option selected={currentDay == 11 ? true : false}>11</option>
                            <option selected={currentDay == 12 ? true : false}>12</option>
                            <option selected={currentDay == 13 ? true : false}>13</option>
                            <option selected={currentDay == 14 ? true : false}>14</option>
                            <option selected={currentDay == 15 ? true : false}>15</option>
                            <option selected={currentDay == 16 ? true : false}>16</option>
                            <option selected={currentDay == 17 ? true : false}>17</option>
                            <option selected={currentDay == 18 ? true : false}>18</option>
                            <option selected={currentDay == 19 ? true : false}>19</option>
                            <option selected={currentDay == 20 ? true : false}>20</option>
                            <option selected={currentDay == 21 ? true : false}>21</option>
                            <option selected={currentDay == 22 ? true : false}>22</option>
                            <option selected={currentDay == 23 ? true : false}>23</option>
                            <option selected={currentDay == 24 ? true : false}>24</option>
                            <option selected={currentDay == 25 ? true : false}>25</option>
                            <option selected={currentDay == 26 ? true : false}>26</option>
                            <option selected={currentDay == 27 ? true : false}>27</option>
                            <option selected={currentDay == 28 ? true : false}>28</option>
                            <option selected={currentDay == 29 ? true : false}>29</option>
                            <option selected={currentDay == 30 ? true : false}>30</option>
                            <option selected={currentDay == 31 ? true : false}>31</option>

                        </select>
                    </div>
                    <div className="basis-1/3 w-1/3">
                        <select className="w-full text-center">
                            <option disabled>เดือน</option>
                            <option selected={currentMonth == 1 ? true : false}>มกราคม</option>
                            <option selected={currentMonth == 2 ? true : false}>กุมภาพันธ์</option>
                            <option selected={currentMonth == 3 ? true : false}>มีนาคม</option>
                            <option selected={currentMonth == 4 ? true : false}>เมษายน</option>
                            <option selected={currentMonth == 5 ? true : false}>พฤษภาคม</option>
                            <option selected={currentMonth == 6 ? true : false}>มิถุนายน</option>
                            <option selected={currentMonth == 7 ? true : false}>กรกฎาคม</option>
                            <option selected={currentMonth == 8 ? true : false}>สิงหาคม</option>
                            <option selected={currentMonth == 9 ? true : false}>กันยายน</option>
                            <option selected={currentMonth == 10 ? true : false}>ตุลาคม</option>
                            <option selected={currentMonth == 11 ? true : false}>พฤศจิกายน</option>
                            <option selected={currentMonth == 12 ? true : false}>ธันวาคม</option>
                        </select>
                    </div>
                    <div className="basis-1/3 w-1/3">
                        <select className="w-full text-center">
                            <option disabled>ปี</option>
                            <option selected={currentYear == 2024 ? true : false}>2567</option>
                            <option selected={currentYear == 2023 ? true : false}>2566</option>
                            <option selected={currentYear == 2022 ? true : false}>2565</option>
                            <option selected={currentYear == 2021 ? true : false}>2564</option>
                            <option selected={currentYear == 2020 ? true : false}>2563</option>
                            <option selected={currentYear == 2019 ? true : false}>2562</option>
                            <option selected={currentYear == 2018 ? true : false}>2561</option>
                            <option selected={currentYear == 2017 ? true : false}>2560</option>
                            <option selected={currentYear == 2016 ? true : false}>2559</option>
                            <option selected={currentYear == 2015 ? true : false}>2558</option>
                            <option selected={currentYear == 2014 ? true : false}>2557</option>
                            <option selected={currentYear == 2013 ? true : false}>2556</option>
                            <option selected={currentYear == 2012 ? true : false}>2555</option>
                            <option selected={currentYear == 2011 ? true : false}>2554</option>
                            <option selected={currentYear == 2010 ? true : false}>2553</option>
                            <option selected={currentYear == 2009 ? true : false}>2552</option>
                            <option selected={currentYear == 2008 ? true : false}>2551</option>
                            <option selected={currentYear == 2007 ? true : false}>2550</option>
                            <option selected={currentYear == 2006 ? true : false}>2549</option>
                            <option selected={currentYear == 2005 ? true : false}>2548</option>
                            <option selected={currentYear == 2004 ? true : false}>2547</option>
                            <option selected={currentYear == 2003 ? true : false}>2546</option>
                            <option selected={currentYear == 2002 ? true : false}>2545</option>                            
                        </select>
                    </div>
                </div>
            </div>


            



            <div className="flex justify-center gap-10 mt-20">
                <button className="btn btn-primary text-white text-2xl" onClick={() => {router.push("/")}}>หายแล้ว</button>
                <button className="btn btn-wide btn-primary btn-submit text-white text-2xl" onClick={() => {router.push("/")}}>บันทึก</button>
            </div>
        </div>
    );
}
