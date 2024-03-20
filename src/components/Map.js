import React from 'react'

const Map = () => {
    const data = [
        { name: 'John Doe', age: 30, gender: 'Male', jobRole: 'Software Engineer' },
        { name: 'Jane Smith', age: 25, gender: 'Female', jobRole: 'Data Scientist' },
        { name: 'Michael Johnson', age: 40, gender: 'Male', jobRole: 'Project Manager' },
        { name: 'Emily Brown', age: 35, gender: 'Female', jobRole: 'UX Designer' },
        { name: 'David Wilson', age: 45, gender: 'Male', jobRole: 'Marketing Manager' },
        { name: 'Emma Martinez', age: 28, gender: 'Female', jobRole: 'Frontend Developer' },
        { name: 'William Taylor', age: 33, gender: 'Male', jobRole: 'Data Analyst' },
        { name: 'Olivia Garcia', age: 31, gender: 'Female', jobRole: 'Product Manager' },
        { name: 'James Hernandez', age: 37, gender: 'Male', jobRole: 'Software Developer' },
        { name: 'Sophia Lopez', age: 29, gender: 'Female', jobRole: 'UI Designer' },
        { name: 'Daniel Rodriguez', age: 34, gender: 'Male', jobRole: 'Database Administrator' },
        { name: 'Ava Martinez', age: 27, gender: 'Female', jobRole: 'Full Stack Developer' },
        { name: 'Alexander Lee', age: 38, gender: 'Male', jobRole: 'Business Analyst' },
        { name: 'Mia Perez', age: 32, gender: 'Female', jobRole: 'Scrum Master' },
        { name: 'Ethan Gonzalez', age: 36, gender: 'Male', jobRole: 'Network Engineer' },
        { name: 'Isabella Lewis', age: 26, gender: 'Female', jobRole: 'Systems Analyst' },
        { name: 'Matthew Hall', age: 39, gender: 'Male', jobRole: 'DevOps Engineer' },
        { name: 'Amelia Clark', age: 24, gender: 'Female', jobRole: 'Quality Assurance Engineer' },
        { name: 'Jacob Allen', age: 41, gender: 'Male', jobRole: 'Technical Writer' },
        { name: 'Sofia Hernandez', age: 23, gender: 'Female', jobRole: 'Cybersecurity Analyst' },
        { name: 'Michael Turner', age: 42, gender: 'Male', jobRole: 'Cloud Architect' }
      ]
      
  return (
    <div>
        <h1>below 25</h1>
        {data.filter((value) =>{
            console.log(value.age>25)
        }).map((val)=>{
            console.log(val)
        })}
        <h1>above 25</h1>
        {data.filter((value) =>{
            console.log(value.age<25)
        }).map((val)=>{
            console.log(val)
        })}
    </div>
  
)};

export default Map