
import Head from 'next/head';
import Navbar from './NavBar';

const Layout = (props) => (
  <div>
    
    
    <div className="container">
      {props.children}
    </div>
  </div>
);

export default Layout;