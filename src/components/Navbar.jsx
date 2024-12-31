// import logo from "../assets/logo/ChaosWeb.svg";
import logo from '../assets/logo/logo.png'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='h-24 w-24'>
          <img src={logo} alt='ChaosWeb Logo' id='chaos-logo' />
        </div>
        <h1 id='chaos-header'>ChaosWeb - The Disorderly UI Experiment</h1>
      </nav>
    </>
  )
}

export default Navbar
