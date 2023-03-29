/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-else-return */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
/* eslint-disable import/extensions */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
function EventHandler() {
  function alertFunc() {
    alert('클릭 됨');
  }

  return (
    <>
      <span style={{ cursor: 'pointer' }} onClick={alertFunc}>
        클릭!
      </span>
      <br></br>
      <span
        style={{ cursor: 'pointer' }}
        onClick={() => {
          alert('클림됨2');
        }}
      >
        클릭2!
      </span>
      <br></br>
      <span
        style={{ cursor: 'pointer' }}
        onClick={() => {
          let num = 10;
          num += 5;
          console.log(num);
        }}
      >
        숫자 계산
      </span>
    </>
  );
}

export default EventHandler;
