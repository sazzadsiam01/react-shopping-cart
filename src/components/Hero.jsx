import heroImg from '../assets/hero.png'

const Hero = () => {
    return (
        <section className='flex justify-center md:justify-between items-center h-[60vh] md:h-[80vh] mt-[72px]'>
            <div className='text-center sm:text-left'>
                <h1 className='text-primary text-5xl font-extralight sm:text-6xl md:text-7xl'>Elevate Your Wrist</h1>
                <p className='pl-1 text-lg font-extralight sm:text-2xl'>Shop Our Curated Watch Collection</p>
            </div>
            <div className='w-1/2 h-full hidden md:flex justify-end min-[900px]:p-8'>
                <img className='object-scale-down' src={heroImg} alt="" />
            </div>
        </section>
    )
}
export default Hero;