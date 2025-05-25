import React, { useState } from "react";
import "./card.css";

export default function Card({ name, post, role, image, linkedin }) {
  return (
    <>
      <style>{`
        .card-container {
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1200px;
          animation: fadeSlideIn 1.2s ease both;
        }

        @keyframes fadeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .modern-card {
          width: 360px;
          padding: 2.5rem 2rem;
          border-radius: 24px;
          background: rgba(30, 30, 50, 0.85);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
          color: #fff;
          position: relative;
          overflow: hidden;
          transition: transform 0.5s ease, box-shadow 0.4s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.05);
        }

        .modern-card:hover {
          transform: rotateX(6deg) rotateY(-6deg) scale(1.04);
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.65);
        }

        .modern-card::before {
          content: "";
          position: absolute;
          top: -60%;
          left: -60%;
          width: 220%;
          height: 220%;
          background: linear-gradient(130deg, rgba(255,255,255,0.12), transparent 70%);
          transform: rotate(35deg);
          animation: shine 5s infinite linear;
          z-index: 0;
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) rotate(35deg);
          }
          100% {
            transform: translateX(100%) rotate(35deg);
          }
        }

        .profile-img {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #444;
          margin-bottom: 1.2rem;
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
          z-index: 1;
          transition: transform 0.3s ease;
        }

        .modern-card:hover .profile-img {
          transform: scale(1.1) rotate(8deg);
        }

        .name {
          font-size: 1.8rem;
          font-weight: 800;
          margin: 0.5rem 0;
          z-index: 1;
          background: linear-gradient(90deg, #00ffe0, #8a2be2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .post {
          font-size: 1.1rem;
          font-style: italic;
          opacity: 0.85;
          margin-bottom: 0.5rem;
          z-index: 1;
        }

        .role {
          font-size: 0.95rem;
          font-weight: 600;
          padding: 6px 18px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
          z-index: 1;
          margin-bottom: 1rem;
        }

        .linkedin-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #0e76a8;
          color: white;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 30px;
          padding: 10px 20px;
          text-decoration: none;
          margin-top: 0.5rem;
          box-shadow: 0 5px 15px rgba(14, 118, 168, 0.4);
          transition: background 0.3s ease, transform 0.3s ease;
          z-index: 1;
        }

        .linkedin-button:hover {
          background: #0891b2;
          transform: translateY(-2px) scale(1.05);
        }

        .linkedin-button svg {
          margin-right: 8px;
        }
      `}</style>

      <div className="card-container">
        <div className="modern-card">
          <img src={image} alt={`${name}`} className="profile-img" />
          <h2 className="name">{name}</h2>
          <p className="post">{post}</p>
          <span className="role">{role}</span>
          <a
            href={linkedin}
            className="linkedin-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708C16 15.488 15.474 16 14.825 16H1.175C.526 16 0 15.487 0 14.854V1.146zM4.943 13.569V6.169H2.542v7.4h2.401zM3.743 5.099c.837 0 1.356-.553 1.356-1.245-.015-.707-.52-1.244-1.341-1.244-.822 0-1.356.537-1.356 1.244 0 .692.519 1.245 1.327 1.245h.014zM13.458 13.569v-4.172c0-2.228-1.188-3.262-2.773-3.262-1.277 0-1.845.707-2.165 1.204v-1.034H6.12c.03.682 0 7.4 0 7.4h2.401V9.465c0-.218.016-.437.08-.593.174-.437.571-.891 1.237-.891.872 0 1.22.672 1.22 1.658v3.93h2.4z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}
