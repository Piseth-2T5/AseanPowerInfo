import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import nano from '../assets/nano.png';

const Home = () =>{
    const navigate = useNavigate();
    const openProducts = () =>{
        navigate('/products')
    }
    return(
    <div className='container-fluid home-container'>
        <div className="container w-100">
            <div className="home">
                <div className="row home-2">
                    <div className="col-lg-6">
                        <img src={nano} alt="" className='img-home'/>
                    </div>
                    <div className="col-12 col-lg-6 ">
                        <div className="box-home">
                            <h1 className="heading-home">Make your DREAM<span className='span-heading'> come TRUE</span></h1>
                            <p className='para-home'>សូមអោយអ្នកទទួលបាននូវអ្វីដែលអ្នកស្រមៃចង់បាន</p>
                            <div className="box-btn-home">
                                <button className="btn-home" onClick={openProducts}>Products</button>
                                <button className="btn-home btn-home-2" onClick={openProducts}>Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
        <div className="container">
            <div className="about-us-container">
                <div className="about-us">
                    <div className="row about-us-2 ">
                        <div className="col-sm-12 col-lg-7">
                            <div className="content-about">
                                <h3 className='heading-about'>About Us</h3>
                                <p className='para-about'>Asean Power គឺជាក្រុមហ៊ុនដែលកំពុងរីកចម្រើនជាបន្តបន្ទាប់ដោយមានសមាជិក និងមនុស្សចាប់អារម្មណ៍ជាច្រើនចូលមកក្នុងអាជីវកម្មរបស់យើង ហើយក៏ជាក្រុមហ៊ុនដែលបានចុះបញ្ជីត្រឹមត្រូវផងដែរ។ ទទួលស្គាល់ដោយការិយាល័យក្រុមប្រឹក្សាការពារអ្នកប្រើប្រាស់។ យើងប្តេជ្ញានាំមកនូវសុភមង្គល។ និងជោគជ័យ ដល់អ្នកដឹកនាំអាជីវកម្មរបស់យើង។</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-5 ">
                            <img src={nano} className="img-about" alt=" "/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
     </div>
    )
}

export default Home;