import NavBar from './componet/NavBar'
import Home from './pages/Home'


function App() {

  return (
    <>
    {/* <Box w={'100%'} h={'100vh'} className='bg-base' > */}
    <div className='bg-base w-screen min-h-screen z-50'>
      <div className='w-full mt-3 block col-span-12 fixed left-0 top-0 z-50'>
      <NavBar />
      </div>
      <div className='w-full block col-span-12'>
      <Home />

      </div>
    </div>
    {/* </Box> */}
    </>
  )
}

export default App
