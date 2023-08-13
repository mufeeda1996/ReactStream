import Main from './Main'
import Footer from './Footer'
import Header from './Header'

function Layout({children}) {
  return (
    <div>
        <Header/>
        <Main>
         {children}
        </Main>
        <Footer/>
    </div>
  )
}

export default Layout