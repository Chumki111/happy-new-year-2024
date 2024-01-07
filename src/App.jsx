import Banner from "./components/Banner"
import Category from "./components/Category"


function App() { 

  return (
    <>
     <div className="md:max-w-screen-xl lg:max-w-screen-2xl mx-auto mt-6">
      <div className="mx-10">
      <Banner/>
      <Category/>
      </div>
     </div>
       
    </>
  )
}

export default App
