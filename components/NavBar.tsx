import Link from 'next/link';

const Navbar = () => (
  <nav>
        <ul>
          <li>
            <a href="/">Ana Sayfa</a>
          </li>
          <li>
            <a href="/random">Rastgele</a>
          </li>
          <li>
            <a href="/hafta">Haftanın Kitabı</a>
          </li>
        </ul>
     
  </nav>
);

export default Navbar;