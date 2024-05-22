import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddBlogForm from '../Pages/AddBlogForm'
import '../../public/Css/blog.css'


   
function Blog() {
    

   
  return (
    <div> 
       <section className="sec1">
        <ul><li>Inspiring Educators</li></ul>
        <ul><li>News</li></ul>
        <ul><li>School Stories</li></ul>
        <ul><li>Teaching Trends</li></ul>
        </section>

        <div class="grid-container">
            <div class="grid-item">
                <img src="./Images/im1.jpg"></img>
                <div class="card">
                    <h2>INSPIRING EDUCATORS</h2>
                    <h3>How to Master the “I Do, We Do, You Do” Model Approach to Teaching</h3>
                    <p>February 15th, 2024 by Angélique Toque</p>
                    <p>The “I Do, We Do, You Do” model is a particularly useful type of modeling that teachers can use to reinforce lessons through practice, without the pressure of formal testing.</p>
                    <p>Below, we explain exactly what the model is and how you can integrate it into your teaching.</p>
                </div>

            </div>
            <div class="grid-item">
                <img src="./Images/im2.png"></img>
                <div class="card">
                    <h2>INSPIRING EDUCATORS</h2>
                    <h3>10 Social-Emotional Learning Activities to Engage Students</h3>
                    <p>February 15th, 2024 by Angélique Toque</p>
                    <p>Today, the benefits of social-emotional learning (SEL) cannot be overstated, with manystrategies being applied to children of all grades and years. In this article we discuss some of the top 10 best social-emotional learning activities.</p>
                </div>

            </div>
            <div class="grid-item">
                <img src="./Images/im3.png"></img>
                <div class="card">
                    <h2>INSPIRING EDUCATORS</h2>
                    <h3>How to Master the “I Do, We Do, You Do” Model Approach to Teaching</h3>
                    <p>February 1st, 2024 by Angélique Toque</p>
                    <p>Read on and learn what are the 15 tips that’ll help you ease into your first year as a professional teacher.</p>
                </div>

            </div>
            <div class="grid-item">
                <img src="./Images/im4.png"></img>
                <div class="card">
                    <h2>INSPIRING EDUCATORS</h2>
                    <h3>15 Tips for First Year Teachers</h3>
                    <p>January 29th, 2024 by Angélique Toque</p>
                    <p>The “I Do, We Do, You Do” model is a particularly useful type of modeling that teachers can use to reinforce lessons through practice, without the pressure of formal testing.</p>
                </div>

            </div>
            <div class="grid-item">
                <img src="./Images/im5.png"></img>
                <div class="card">
                    <h2>SCHOOL STORIES</h2>
                    <h3>The future of teaching and learning. Case study with Logitech</h3>
                    <p>November 27th, 2023 by Anastasia Procner</p>
                    <p>What does the untethered teaching of the future look like? Come on a little trip to the city of Bielsko-Biała, Poland, with us, and we'll show you!</p>
                </div>

            </div>
            <div class="grid-item">
                <img src="./Images/im6.png"></img>
                <div class="card">
                    <h2>INSPIRING EDUCATORS</h2>
                    <h3>How to Master the “I Do, We Do, You Do” Model Approach to Teaching</h3>
                    <p>February 15th, 2024 by Angélique Toque</p>
                    <p>The “I Do, We Do, You Do” model is a particularly useful type of modeling that teachers can use to reinforce lessons through practice, without the pressure of formal testing.</p>
                    <p>Below, we explain exactly what the model is and how you can integrate it into your teaching.</p>
                </div>

            </div>
            
        </div>
        <Link to="/addblog" ><button className="add-blog-button" >Add Blog</button></Link>

        {/* <div className="grid-container">
        {blogs.map((blog, index) => (
          <div className="grid-item" key={index}>
            <div className="card">
              <h2>{blog.heading}</h2>
              <h3>{blog.about}</h3>
            </div>

          </div>
        ))} */}
    {/* </div> */}
    </div>
    )
    }


export default Blog;
