const { Link, NavLink } = ReactRouterDOM


export function AppHeader() {

    return <header className="app-header">
        <Link to="/">
            <img className="header-logo" src="assets/img/appsus-logo.png" alt="" />
        </Link>
        <nav>
            {/* home */}
            <NavLink className="fa-solid fa-house" title="Home" to="/"></NavLink>
            {/* About */}
            <NavLink className="fa-solid fa-address-card" title="About" to="/about"></NavLink>
            {/* Mail */}
            <NavLink className="fa-solid fa-envelope" title="Mail" to="/mail"></NavLink>
            {/* Note */}
            <NavLink className="fa-solid fa-clipboard" title="Note" to="/note"></NavLink>
        </nav>
    </header>
}
