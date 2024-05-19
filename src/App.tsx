import NavBar from './componet/NavBar'
import Home from './pages/Home'


function App() {

  return (
    <>
    {/* <Box w={'100%'} h={'100vh'} className='bg-base' > */}
    <div className='bg-base flex  flex-wrap content-between'>
      <div className='w-full block'>
      <NavBar />
      </div>
      <div className='w-full block'>
      <Home />

      </div>
    </div>
    {/* </Box> */}
    </>
  )
}

export default App
