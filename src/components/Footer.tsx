/* Purpose: Display footer containing icons for app navigation
 * Params: None
 * Errors: TODO
 */
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SortIcon from '@mui/icons-material/Sort';

const Footer = () => {

  // fontsize determines icon size
  const iconSX = { fontSize: 30 }

  const avoidRedundantReload = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string) => {
    if (window.location.pathname === link) { e.preventDefault() }
  }
  
  return (
    <div className="footer-cls">
      <div className="side-icons">
        <a href='/' className="plain-link icon" onClick={(e) => avoidRedundantReload(e, '/')}>
          <HomeIcon sx={iconSX} />
          <p>Home</p>
        </a>
        <button className="plain-link icon" onClick={(e) => console.log('open search popup')}>
          <SearchIcon sx={iconSX} />
          <p>Search</p>
        </button>
      </div>
      <a href='/newBill/' className="plain-link icon center-icon" onClick={(e) => avoidRedundantReload(e, '/newBill/')}>
        <AddCircleIcon sx={{ fontSize: 50 }} />
      </a>
      <div className="side-icons">
        <a href='/howTo/' className="plain-link icon" onClick={(e) => avoidRedundantReload(e, '/howTo/')}>
          <InfoIcon sx={iconSX} />
          <p>Info</p>
        </a>
        <button className="plain-link icon" onClick={() => console.log('open sort selector')}>
          <SortIcon sx={iconSX} />
          <p>Sort By</p>
        </button>
      </div>
    </div>
  )
};

export default Footer;