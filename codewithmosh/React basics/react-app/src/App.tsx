import Button from "./components/Button";
function App() {  
return (
    <>
      <Button color='danger' onClick={()=>console.log("clicked")}>
      Click me
      </Button>
    </>
  )
}

export default App
 