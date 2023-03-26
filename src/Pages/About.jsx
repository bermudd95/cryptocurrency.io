import React from 'react'

const About = () => {
  return (
		<div className='bg-black text-white p-5 h-full'>
			<div className='flex flex-col'>
				<h2 className='text-center text-3xl'>About</h2>
				<div className='mx-10 py-5'>
					<div className='flex flex-col'>
                        <h2 className='text-2xl text-start pb-4'>
                            History:
                        </h2>
						<h3 className='text-xl indent-5'>
							When It Comes To Trading, Cryptocurrency Is One Of Many Trending
							Habits In 2023. Here At CryptoCurrency.io, We Strive To Providing
							The Most Accurate And The Most Updated Crypto Information To Our
							Customers. Created In 2019, This Site Provides A Ranked List Of
							All Cryptocurrencies To Date. It Also Provides The Market Price As
							Well As The Changes In Price, Total Volume, And The Market Cap.
							You Are Able to Gain More Information Related To A Specific
							Currency By Clicking On It From The Home Page. You Would Then Be
							Taken To A Page That Displays The Currency Name, Price, Change
							Percentage Through Different Time Periods, And A Brief Description
							About The Currency.
						</h3>
					</div>
                    <div className='flex flex-col py-5'>
                        <h2 className='text-2xl text-start pb-4'>
                            Core Values:
                        </h2>
                        <h3 className='text-xl indent-5'>
                            Here At Cryptocurrency.io, We Stand By Our Core Value To Deliver The Best Experience Possible To Our Customers. Maintaining A Clear And Accurate Site As Well As Insuring That All Personal Information Is Encrypted And Safe From All People That May Cause Harm To Others. Honesty, Is One Of Our Priorities Here. We Ensure That There Are No Hidden Or Confusing Functions As Well As Making Sure Our IT Department Is Readily Available To Ensure Our Customers Have Their Questions Answered. 
                        </h3>
                    </div>
				</div>
			</div>
		</div>
	);
}

export default About