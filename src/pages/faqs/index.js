import React from 'react';
import "./style.css";

const Faqs = () => {
  return (
    <div className='faqs'>
      <div className="centerplease">
        FAQS
      </div>
      <br />

      <div className="content">
        <div className='contentDiv'>
          <input type="checkbox" id="question1" name="q" className="questions" />
          <div className='outer'>
            <div className="plus">+</div>
            <label htmlFor="question1" className="question">
              This is the question that will be asked?
            </label>
          </div>
          <div className="answers">
            This is the answer of the question.. keep it short.</div>
        </div>

        <div className='contentDiv'>
          <input type="checkbox" id="question2" name="q" className="questions" />
          <div className='outer'>
            <div className="plus">+</div>
            <label htmlFor="question2" className="question">
              Short?
            </label>
          </div>
          <div className="answers">
            short!
          </div>
        </div>

        <div className='contentDiv'>
          <input type="checkbox" id="question3" name="q" className="questions" />
          <div className='outer'>
            <div className="plus">+</div>
            <label htmlFor="question3" className="question">
              Keep answers short. But in case of...If the question is long, the text wraps.
            </label>
          </div>
          <div className="answers">
            This is the answer!
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faqs