import React from "react";
import "./Dashboard.css"
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
function Dashboard() {
    function scrollToNext(pageId) {
        document.getElementById(pageId).scrollIntoView({ behavior: 'smooth' });
    }

    const navigate = useNavigate();

    return (
        <>
            <Navbar  />
            <div className="card" id="page1">
                <div className="firstpage">
                    <div className="innercontainer">
                        <h1 className="heading">PRAKRUTI PARIKSHAN</h1>
                        <p className="desc1">
                            Explore Your Ayurvedic Blueprint. Every individual is born with a unique balance of energies.
                        </p>
                        <p className="desc2">
                            Vata. Pitta. Kapha. Together, they define your natural state — your Prakruti.
                            <br />
                            Begin your journey to better health, balance, and self-awareness.
                        </p>
                        <button className="btncontent"onClick={() => scrollToNext('page2')}>Begin Parikshan</button>
                    </div>
                </div>
            </div>

            <div className="card2" id="page2">
                <div className="secondpage">
                    <div className="innercard">
                        <div className="innercontent">
                            <p className="cardheading">Ayurvedic constitution</p>
                            <img src="https://png.pngtree.com/png-vector/20240205/ourmid/pngtree-yoga-symbol-color-png-image_11615382.png" className="image" alt="constitution" />
                            <p className="description">🌱 Discover your natural Ayurvedic constitution</p>
                        </div>
                        <div className="innercontent">
                            <p className="cardheading">Personalized Diet</p>
                            <img src="https://wordpresscmsprodstor.blob.core.windows.net/wp-cms/2021/07/11b.png" className="image" alt="diet" />
                            <p>🍽️Tailored recommendations to support your body and mind.</p>
                        </div>
                        <div className="innercontent">
                            <p className="cardheading">Live in Harmony</p>
                            <img src="https://png.pngtree.com/png-vector/20240318/ourmid/pngtree-family-gathering-in-living-room-png-image_12005833.png" className="image" alt="harmony" />
                            <p>🧘‍♂️Align daily habits with your doshic balance for inner peace</p>
                        </div>
                    </div>

                    <div className="innercard">
                        <div className="innercontent">
                            <p className="cardheading">Holistic Wellness</p>
                            <img src="https://png.pngtree.com/png-vector/20221024/ourmid/pngtree-person-practicing-yoga-holistic-mental-png-image_6346477.png" className="image" alt="wellness" />
                            <p>💫Address imbalances before they manifest into illness.</p>
                        </div>
                        <div className="innercontent">
                            <p className="cardheading">Emotional Wellbeing</p>
                            <img src="https://static.vecteezy.com/system/resources/previews/027/049/357/original/flower-peace-of-mind-mental-health-2d-color-illustrations-png.png" className="image" alt="emotions" />
                            <p>🌼Unlock vitality through self-awareness and natural guidance.</p>
                        </div>
                        <div className="innercontent">
                            <p className="cardheading">Self-Discovery and Healing</p>
                            <img src="https://static.vecteezy.com/system/resources/previews/011/835/878/non_2x/cute-young-girl-in-love-self-love-and-care-concept-png.png" className="image" alt="healing" />
                            <p>🌸Ayurveda empowers you to take charge of your health—naturally.</p>
                        </div>
                    </div>

                <button className="btncontent" onClick={() => scrollToNext('page3')}>KNOW ABOUT DOSHAS</button>
                </div>
            </div>

            <div className="card3" id="page3">
                <div className="dosha left-center" onClick={() => window.location.href = 'vata.html'}>
                    <h1 className="page3headings">VATHAM</h1>
                </div>
                <div className="dosha top-center" onClick={() => window.location.href = 'pitha.html'}>
                    <h1 className="page3headings">PITHAM</h1>
                </div>
                <div className="dosha right-center" onClick={() => window.location.href = 'kapha.html'}>
                    <h1 className="page3headings">KAPHAM</h1>
                </div>

                <button className="btncontent" onClick={() => {navigate('/Start')}}>TEST YOUR PRAKRUTI</button>
            </div>
        </>
    );
}

export default Dashboard;
