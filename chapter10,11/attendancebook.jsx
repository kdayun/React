import React from "react";

const students = [
    {id: 1, name: "D.O.",},
    {id: 2, name: "Baekhyun",},
    {id: 3, name: "Hoshi",},
    {id: 4, name: "Suho",}, 
];

function AttendanceBook(props){
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;

//key ={`student-id${student.id}`}
//key ={index}
