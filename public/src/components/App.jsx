import Info from './Info'
import About from './About'
import Interest from './Interests'
import Footer from './Footer'

export default function App(){
    return (
        <>
            <Info />
            <main>
                <About />
                <Interest />
            </main>
            <Footer />
        </>
    )
}