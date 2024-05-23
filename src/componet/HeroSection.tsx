import Container from "./Container"
import profilePic from '../assets/profilePicRemoveBg.png'

const HeroSection = () => {
  return (
    <Container className="relative overflow-hidden  h-full ">
      <div className=" col-span-12 my-20 relative flex flex-col-reverse md:grid md:grid-cols-12 gap-8 h-[100vh] md:h-[70%]">
        <div className="col-span-12 md:col-span-5 h-[50%]">
          <div>Helo World</div>
          <div>skills tags</div>
        </div>
        <div className="col-span-12 md:col-span-7 h-[50%] ">
          <div className="z-10 h-[210px] w-[210px] md:h-[410px] md:w-[410px] rounded-full overflow-hidden  translate-y-32 md:translate-y-[3.6rem] md:translate-x-[6rem] relative  bg-highlight">
            <img className="w-full h-full object-cover z-20 relative" src={`${profilePic}`} alt=" profile" />
          </div>
          <div className="absolute z-5 -top-[6rem] -left-20 md:left-[50%] w-[810px] md:[900px] h-[210px] md:h-[410px] bg-highlight rounded-full -rotate-45 "></div>
        </div>
      </div>
      {/* <div className="absolute top-0 md:left-[70%] w-[710px] h-[210px] md:h-[410px] bg-highlight rounded-full -rotate-45 "></div> */}

    </Container>
  )
}

export default HeroSection
