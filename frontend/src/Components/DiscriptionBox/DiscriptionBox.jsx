import React from 'react'
import "./DiscriptionBox.css"

const DiscriptionBox = () => {
  return (
    <div className="container mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-2 col-sm-4 col-4  border border-2 pt-3 pb-2 text-center">
          <h6>Description</h6>
        </div>
        <div className="col-md-3 col-lg-2 col-sm-4 col-4 border border-2 pt-3 pb-2 text-center">
          <h6>Reviews(122)</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-12 border p-4">
          <p className='discriptionPara' >  Our online learning app offers a flexible, user-friendly platform where learners can access a wide range of courses across different subjects. With interactive lessons, quizzes, and multimedia resources, users can engage in self-paced learning anytime, anywhere. The app is designed for learners of all levels, featuring beginner to advanced courses, along with personalized recommendations and progress tracking.</p>
          <p className='discriptionPara'> Whether you're aiming to gain new skills, enhance your knowledge, or achieve certifications, our app provides tools and support to guide your learning journey. Enjoy expert-led content, peer interaction, and valuable resources to help you reach your educational goals.</p>
        </div>
      </div>
    </div>
  )
}

export default DiscriptionBox