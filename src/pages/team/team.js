import { React, useState } from 'react';
import Card from '../card/card';
import Navbar from '../Navbar';
import "./team.css"
import Footer from '../footer' 

export default function Team() {
    return (
        <div className="team">
        <Navbar/>
        <div class="container_header1">
        <div>
        <h1>Team</h1>
        </div>
        </div>  

            <div className="main">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            
  <Footer/>
        </div>
    )
}