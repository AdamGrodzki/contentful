import Link from 'next/link'
import ArrowNavigation from './ArrowNavigation'

export default function Layout({ children }) {
    return (
        <div className="layout">
            <header>
                <Link href="/" legacyBehavior>
                    <a>
                        <h1>
                            <span>Just Add</span>
                            <span>Espresso</span>
                        </h1>
                        <h2>Spread The Joy</h2>
                    </a>
                </Link>
            </header>

            <div className="page-content">
                {children}
            </div>

            <ArrowNavigation />
            <footer>
                <p>Copyright 2024 Just Add Espresso ☕</p>
            </footer>
        </div>
    )
}