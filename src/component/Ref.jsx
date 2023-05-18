import React, { useRef } from 'react';

const Ref = () => {
    const  studentName = useRef("lagbaja");
    console.log(studentName.current);

    const idanBaba = useRef();
    // console.log(idanBaba.current.innerText);


    // let idanStyle = {
    //     color: "Red",
    //     fontSize: "50px",
    //     transition: "2s" 
    // }

    const change = () => {
        idanBaba.current.style.fontSize = "80px"
        idanBaba.current.style.color = "red"
        idanBaba.current.style.transition = "5s"
    }

    
    const allIdan = () => {
        myIdans.innerHTML = `
        `
    }

    const changetwo = () => {
        idanBaba.current.style.fontSize = "20px"
        idanBaba.current.style.color = "black"
        idanBaba.current.style.transition = "-5s"
    }

  return (
    <>
      <div>Hello {studentName.current}</div>
      <div ref={idanBaba}>I am the real Idan.
      
      </div>


      <div onClick={allIdan} id="myIdans">
        <button onClick={change}>Show me Idan</button><br/><br/>
        <button onClick={changetwo}>Hide me Idan</button>
      </div>
    </>
  );
}

export default Ref;
