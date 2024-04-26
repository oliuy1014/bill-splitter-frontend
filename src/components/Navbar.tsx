const Navbar = () => {

  const avoidRedundantReload = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string) => {
    if (window.location.pathname === link) { e.preventDefault() }
  }
  
  return (
    <nav className="navbar solid-bg">
      <a href='/' className="plain-link" onClick={(e) => avoidRedundantReload(e, '/')}>
        <h3>View Receipts</h3>
      </a>
      <button className="plain-link" onClick={(e) => console.log('open search popup')}>
        <h3>Search Receipts</h3>
      </button>
      <a href='/newBill/' className="plain-link" onClick={(e) => avoidRedundantReload(e, '/newBill/')}>
        <h3>Add New Receipt</h3>
      </a>
      <a href='/howTo/' className="plain-link" onClick={(e) => avoidRedundantReload(e, '/howTo/')}>
        <h3>How To Use Bill-Splitter</h3>
      </a>
      <button className="plain-link" onClick={(e) => console.log('open sort selector')}>
        <h3>Sort By: oldest to newest</h3>
      </button>
    </nav>
  )
};

export default Navbar;