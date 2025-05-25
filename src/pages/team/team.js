import { React, useState } from "react";
import Card from "../card/card";
import Navbar from "../Navbar";
import "./team.css";
import Footer from "../footer";

export default function Team() {
  const users = [
    { name: "Alice", about: "Manages The IC", post:"President", linkedin:"#" , image:"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"},
    { name: "Alice", about: "Manages The IC", post:"President", linkedin:"#" , image:"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"},
    { name: "Alice", about: "Manages The IC", post:"President", linkedin:"#" , image:"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"},
    { name: "Alice", about: "Manages The IC", post:"President", linkedin:"#" , image:"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"},
    { name: "Alice", about: "Manages The IC", post:"President", linkedin:"#" , image:"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"},
    { name: "Alice", about: "Manages The IC", post:"President", linkedin:"#" , image:"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"},
    { name: "Alice", about: "Manages The IC", post:"President", linkedin:"#" , image:"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"},
  ];
  return (
    <div className="team">
      <Navbar />
      <div class="container_header1">
        <div>
          <h1>Team</h1>
        </div>
      </div>

      <div className="main">
        {users.map((info)=>(
            <Card name={info.name} post={info.post} role={info.about} image={info.image} linkedin={info.linkedin}/>
        ))}
        
        
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>

      <Footer />
    </div>
  );
}
