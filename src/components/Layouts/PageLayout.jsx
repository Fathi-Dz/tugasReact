import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"

 const PageLayout = (props) => {
    return (
        <>
            <Navbar />  
            {props.children}
            <Footer />    
        </>
    )
}

export default PageLayout