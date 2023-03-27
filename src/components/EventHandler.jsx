function EventHandler () {

  function alertFunc() {
    alert('클릭 됨');
  }

  return(
    <>
      <span style={{cursor: "pointer"}} onClick={alertFunc}>
        클릭!
      </span>
      <br></br>
      <span style={{cursor: "pointer"}} onClick={()=>{ alert("클림됨2") }}>
        클릭2!
      </span>
      <br></br>
      <span style={{cursor: "pointer"}} onClick={()=>{ let num = 10; num +=5; console.log(num) }}>숫자 계산</span>
    </>
  )
}

export default EventHandler;