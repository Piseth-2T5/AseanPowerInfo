import React from 'react';
import { useNavigate } from 'react-router-dom';
import nano from '../../assets/nano.png';


import './style.css'
import './media.css'
const Home = () =>{
    const navigate = useNavigate();
    const openProducts = () =>{
        navigate('/products')
    }
    return(
        <div className='container'>
            <div className="row g-4 g-lg-5 home">
                <div className="col-lg-6 content-home">
                    <h1 className="heading-home">
                        Make 
                        <span className='span-1-home'>your</span>
                        <span className='span-2-home'>Dream</span>
                        <span className='span-3-home'>come true</span>
                    </h1>
                    <p className="para-home">សូមអោយអ្នកទទួលបាននូវអ្វីដែលអ្នកស្រមៃចង់បាន</p>
                </div>
                <div className="col-lg-6">
                    <img src={nano} alt="Nano image" className='rounded w-100 img-home' />
                </div>
            </div>
            <div className="row g-4 g-lg-5 about-us shadow rounded">
                <div className="col-12 content-about-us">
                    <h1 className="heading-about-us">
                        About us
                    </h1>
                    <p className="para-about-us">
                        Asean Power គឺជាក្រុមហ៊ុនដែលកំពុងរីកចម្រើនជាបន្តបន្ទាប់ដោយមានសមាជិក និងមនុស្សចាប់អារម្មណ៍ជាច្រើនចូលមកក្នុងអាជីវកម្មរបស់យើង ហើយក៏ជាក្រុមហ៊ុនដែលបានចុះបញ្ជីត្រឹមត្រូវផងដែរ។ ទទួលស្គាល់ដោយការិយាល័យក្រុមប្រឹក្សាការពារអ្នកប្រើប្រាស់។ យើងប្តេជ្ញានាំមកនូវសុភមង្គល។ និងជោគជ័យ ដល់អ្នកដឹកនាំអាជីវកម្មរបស់យើង។
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;