import Container from "./Container"

const HeroSection = () => {
  return (
    <Container className="relative">
    <div className="mt-5 relative flex flex-col-reverse md:grid md:grid-cols-2">
        <div>
            <div>Helo World</div>
            <div>skills tags</div>
        </div>
        <div>
            <div>image</div>
        </div>
    </div>
    
    {/* image background decoration  */}
    {/* <div className="absolute bg-highlight w-[510px] h-[210px] md:w-[800px] md:h-[410px] rounded-full top-0 -right-24 z-0 -rotate-45"></div> */}
        {/* <div className="absolute w-[310px] h-[310px] bg-black rounded-full right-0 -z-50"></div> */}
        {/* <div className="absolute w-[510px] h-[310px] bg-highlight -rotate-45 top-0 -right-40 "></div> */}
    </Container>
  )
}

export default HeroSection
