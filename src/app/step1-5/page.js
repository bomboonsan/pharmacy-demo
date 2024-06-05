'use client'

import Image from "next/image";
import Step from "@/components/Step";
import { useState } from "react";
import Swal from 'sweetalert2'

// import router
import { useRouter } from 'next/navigation'

export default function Step1() {
    const router = useRouter()

    const Swal = require('sweetalert2')


    const handleConfirm = () => {
        router.push("/step2")
    }

    return (
        <div className="p-5">
            <div className="text-center mb-10">
                <ul className="steps steps-horizontal w-full text-white">
                    <li className="step step-primary cursor-pointer" onClick={() => {router.push("/step1")}}>ตำแหน่ง</li>
                    <li className="step">ระดับความปวด</li>
                    <li className="step">คำแนะนำ</li>
                    <li className="step">ยาที่ได้รับ</li>
                    <li className="step">สรุป</li>
                </ul>
            </div>
            <h1 className="page-title mb-10">
                ตำแหน่งอาการ
            </h1>
            <div className="text-center mb-10">
                <Image className="block w-[120px] h-auto mx-auto" src="/images/result/demo1.png" alt="step1" width={500} height={500} />
            </div>
            <div className="w-[95%] md:w-[70%] mx-auto mb-5 text-app">
                <label className="form-control w-full mb-10">
                    <div className="label">
                        <span className="label-text text-app">ลักษณะอาการ</span>
                        {/* <span className="label-text-alt">Alt label</span> */}
                    </div>
                    <select className="select select-primary select-bordered text-app">
                        <option disabled selected>เลือก</option>
                        <option>ปวดตื้อๆ</option>
                        <option>ปวดแสบปวดร้อน</option>
                        <option>ปวดหน่วงๆ</option>
                        <option>ปวดแปลบๆ</option>
                        <option>ปวดเมื่อย</option>
                        <option>ปวดชา</option>
                        <option>ปวดเสียว</option>
                        <option>ปวดบวม</option>
                        <option>ปวดจี้ดๆ</option>
                    </select>
                </label>

                <p>
                    ปวดเมื่อไหร่
                </p>
                <div className="flex flex-wrap">
                    <div className="basis-1/3 w-1/3">                        
                    <select className="w-full">
                            <option disabled selected>วันที่</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                            <option>31</option>
                        </select>
                    </div>
                    <div className="basis-1/3 w-1/3">
                        <select className="w-full">
                            <option disabled selected>เดือน</option>
                            <option>มกราคม</option>
                            <option>กุมภาพันธ์</option>
                            <option>มีนาคม</option>
                            <option>เมษายน</option>
                            <option>พฤษภาคม</option>
                            <option>มิถุนายน</option>
                            <option>กรกฎาคม</option>
                            <option>สิงหาคม</option>
                            <option>กันยายน</option>
                            <option>ตุลาคม</option>
                            <option>พฤศจิกายน</option>
                            <option>ธันวาคม</option>
                        </select>
                    </div>
                    <div className="basis-1/3 w-1/3">
                        <select className="w-full">
                            <option disabled selected>ปี</option>
                            <option>2564</option>
                            <option>2565</option>
                            <option>2566</option>
                            <option>2567</option>
                        </select>
                    </div>
                </div>

            </div>

            <div className="text-center mt-20">
                <button className="btn btn-wide btn-primary text-white text-2xl" onClick={handleConfirm}>ถัดไป</button>
            </div>
        </div>
    );
}
