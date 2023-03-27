function Practice () {

  let helloStr = "Hello, first exercise";

  return(
    <>
     <div style={{marginTop: "32px", backgroundColor: "skyblue"}}>실습</div>
     <br />
     <div onClick={()=> {
      alert("클릭 됨")
     }}>{helloStr}</div>
    </>
    
  )
}

export default Practice;