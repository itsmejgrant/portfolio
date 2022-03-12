import Header from '../components/header'
import Gradient from '../components/gradient'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Gradient />

      <main>{children}</main>
    </>
  )
}

export default Layout