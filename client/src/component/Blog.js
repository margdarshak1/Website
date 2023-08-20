import React from 'react'
import "./Style/Style.css";
import pic4 from "./Assits/pic-4.png"
import caption from "./Assits/caption.jpg"
import colonel from "./Assits/colonel.jpg"
import subedar from "./Assits/subedar.jpg"
import major from "./Assits/major.jpg"
const Blog = () => {
  return (
    <div>
       <section className="blog" id="blog">
            <h2 className="heading">Our <span>Blog</span></h2>
            <p>Replenish man have thing Lorem ipsum dolor sit. Lorem, ipsum dolor</p>
            <div className="blog-container">
                <div className="box">
                    <img src={caption} alt=""/>
                    <h3>Caption  Ashutosh Kumar</h3>
                    <p>A resident of village Parmanpur in Bihar’s Madhepura, Captain Ashutosh Kumar laid down his life in the line of duty in November 2020.
                    He has two sisters while his father works in a veterinary hospital and mother is a housewife,
                    He had completed his schooling from Sainik School in Odisha’s Bhubaneswar.
                    After finishing school, Kumar joined the 132nd course at the National Defence Academy in Pune. From there, he went on to complete his military training at the Indian Military Academy (IMA) in Dehradun.
                    <span>The 24-year-old officer was martyr during a counter-terror operation in Jammu and Kashmir’s Kupwara,</span>
                    near the Line of Control (LoC), on the intervening night of 8 November, 2020.
                    At the time, he was deployed with the 18th battalion of the Army’s Madras Regiment.
                    </p>
                </div>
                 <div className="box">
                    <img src={colonel} alt=""/>
                    <h3>Colonel B Santosh Babu</h3>
                    <p>
                    Colonel Bikkumalla Santosh Babu MVC (13 February 1983 – 15 June 2020) was an Indian Army officer and the commanding officer of 16 Bihar Regiment. 
                    A native of Suryapet in Telangana in India, Babu was the only son of Bikkumalla Upender, a retired manager with the State Bank of India, and his wife Manjula
                    On 27 November 2000, Babu joined the 105 course of the National Defence Academy and subsequently went to the Indian Military Academy in 2004.
                     <span> He was martyr in action (KIA) during the 2020 China–India skirmishes,</span> the first Indian Armed Forces commissioned officer since 1967 and among the first Indian soldiers to have been KIA against the Chinese People's Liberation Army
                     He was posthumously decorated with India's second-highest wartime gallantry award, the Maha Vir Chakra.
                    </p>
                </div>
                 <div className="box">
                    <img src={subedar} alt=""/>
                    <h3>Subedar Sukhdev Singh</h3>
                    <p>
                    Subedar Sukhdev Singh, SM was a Junior Commissioned Officer (JCO) in the Indian Army. He served in the 16 Grenadiers battalion
                    Sukhdev was born in Subedar Sukhdev Singh was born in Peoni village in Udhampur district, Jammu and Kashmir. He joined the Army after finishing his schooling
                    He joined the indian army as a Non Commissioned Officer (NCO). He was recruited in the Grenadiers’ 16th Battalion. Being deployed in the Kargil Sector, he also took part in the 1999 Kargil war. Later, following the promotions, he was became JCO.
                    <span> he was martyr in action during a cross-border firing at Nowshera Sector in Rajouri district, Jammu and Kashmir</span>
                    He was given the Sena Medal on 15th August 2021 (75th Independence Day) for his bravery and leaders
                    </p>
                </div>
                 <div className="box">
                    <img src={major} alt=""/>
                    <h3>Major Anuj Sood</h3>
                    <p>
                    Major Anuj Sood (17 Dec 1989 – 2 May 2020) was an Indian Army Officer who received the Shaurya Chakra posthumously. He was a member of the 19th Battalion, Brigade of Guards and 21st Rashtriya Rifles Battalion
                    Major Sood was born in the Kangra district of Himachal Pradesh. Later relocated to Chandigarh. He was born on 17 December 1989, in Air Force Command Hospital Bengaluru, to Brigadier Chandrakant Sood (retd.) and Smt Ragini Sood
                    Major Sood was commissioned from the Indian Military Academy, Dehradun on 9 June 2012. After completing his training as a young Lieutenant, he handled regimental duties such as Adjutant and Platoon Commander
                    <span> He was martyred in action while serving with the latter in Handwara, Jammu and Kashmir.</span>
                    </p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Blog
