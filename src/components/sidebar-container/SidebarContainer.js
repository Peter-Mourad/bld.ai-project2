import React, {useContext} from "react";
import { CoursesContext } from "../../contexts/coursesContext";

import "./sidebarStyle.css";

function SidebarContainer() {
    const data = useContext(CoursesContext);
    console.log(data);
    
    return (
        <div className="sidebar-container">
            <img src="https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg" alt=""></img>
            <h2>E£679.99</h2>
            <button className="inverted-button">Add to Cart</button>
            <button>Buy now</button>
            <p className="description">30-Day Money-Back Guarantee</p>
            <div className="course-info">
                <h5>This course includes:</h5>
                {/* todo: add list icons */}
                <li>14 hours on-demand video</li>
                <li>1 article</li>
                <li>3 downloadable resources</li>
                <li>Full lifetime access</li>
                <li>Access on mobile and TV</li>
                <li>Certificate of completion</li>
                <div className="options">
                    <button href="/">Share</button>
                    <button href="/">Gift this course</button>
                    <button href="/">Apply Coupon</button>
                </div>
            </div>
            <hr></hr>
            <div className="content-group">
                <h4>Training 5 or more people?</h4>
                <p>Get your team access to 17,000+ top Udemy courses anytime, anywhere.</p>
                <button>Try Udemy Business</button>
            </div>
        </div>
    );
}

export default SidebarContainer;