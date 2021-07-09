import * as React from 'react'
import { Link } from 'gatsby'


const Layout = ({ pageTitle, children }) => {
    return (
        <main>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <p>filler</p>
                        </li>
                    </ul>
                </nav>
            </header>
            {children}
        </main>
    )
}

export default Layout