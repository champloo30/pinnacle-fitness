import React from 'react'
import './plans.scss';
import fitness from '../../assets/fitness-svgrepo-com.svg';
import lifting from '../../assets/lifting-svgrepo-com.svg';
import crown from '../../assets/crown-svgrepo-com.svg';
import checkPlans from '../../assets/check-mark-svgrepo-comBox.svg';
import arrowRight from '../../assets/right-arrow-svgrepo-com.svg';

export default function Plans() {

  return (
    <div id='plans' className='plans'>
        <div className="plans-container">
            <h1>ready to <span>climb to the top</span> with us</h1>
            <div className="plan">
                <div className="box">
                    <div className="box-container">
                        <img src={fitness} alt="" />
                        <h2>basic plan</h2>
                        <span>$ 24<span className='per-month'> /month</span></span>
                        <div className="perks">
                            <img src={checkPlans} alt="" />
                            <p>1 guest pass</p>
                        </div>
                        <div className="perks">
                            <img src={checkPlans} alt="" />
                            <p>2 personal trainings /week</p>
                        </div>
                        <div className="perks">
                            <img src={checkPlans} alt="" />
                            <p>Access to The Community</p>
                        </div>
                        <div className="benefits">
                            <h3>See more benefits</h3>
                            <img src={arrowRight} alt="" />
                        </div>
                        <button className="btn">
                            <span>Join Now</span>
                        </button>
                    </div>
                </div>
                <div className="box selected">
                    <div className="box-container">
                        <img src={lifting} alt="" />
                        <h2>pro plan</h2>
                        <span>$ 32<span className='per-month'> /month</span></span>
                        <div className="perks">
                            <img src={checkPlans} alt="" />
                            <p>2 guest pass</p>
                        </div>
                        <div className="perks">
                            <img src={checkPlans} alt="" />
                            <p>3 personal trainings /week</p>
                        </div>
                        <div className="perks">
                            <img src={checkPlans} alt="" />
                            <p>Access to Minibar</p>
                        </div>
                        <div className="benefits">
                            <h3>See more benefits</h3>
                            <img src={arrowRight} alt="" />
                        </div>
                        <button className="btn">
                            <span>Join Now</span>
                        </button>
                    </div>
                </div>
                <div className="box">
                    <div className="box-container">
                        <img src={crown} alt="" />
                        <h2>premium plan</h2>
                        <span>$ 40<span className='per-month'> /month</span></span>
                        <div className="perks">
                            <img src={checkPlans} alt="" />
                            <p>Unlimited guest passes</p>
                        </div>
                        <div className="perks">
                            <img src={checkPlans} alt="" />
                            <p>4 personal trainings /week</p>
                        </div>
                        <div className="perks">
                            <img src={checkPlans} alt="" />
                            <p>Free Monthly Fitness Box</p>
                        </div>
                        <div className="benefits">
                            <h3>See more benefits</h3>
                            <img src={arrowRight} alt="" />
                        </div>
                        <button className="btn">
                            <span>Join Now</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
