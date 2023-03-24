/* eslint-disable no-unused-vars */
function MainHeader () {
  const pororo = "뽀로로"
  const friend = "친구들"
  const arr = [1,2,3,4,5];
  const cas = false;

  return (
    //컴포넌트는 파스칼케이스로 만들어야 읽어들임
    <h1>Hello, {cas ? "캬햐" : "노맛"} Component world!</h1>
  );
};

export default MainHeader;