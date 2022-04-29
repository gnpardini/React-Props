import UserData from "./components/UserData";
function App() {
  return (
    <div className="App">
      <UserData
        firstName={"Gisela"}
        lastName={"Pardini"}
        email={"gpardini@gmail.com"}
      />
      <UserData
        firstName={"Jerry"}
        lastName={"Smith"}
        email={"jsmith@gmail.com"} />
      <UserData
        firstName={"Carlos"}
        lastName={"Bautes"}
        email={"cbautes@gmail.com"} />
      <UserData
        firstName={"Miley"}
        lastName={"Cyrus"}
        email={"mcyrus@gmail.com"} />
    </div>
  );
}

export default App;
