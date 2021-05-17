
import Link from 'next/link'

export default function Gamesence() {
    return (
        <>

            <div className="container">
                <Link href="/gamesence/post" >
                    <a className="gamesence_allcource_card">
                        <h2>Learning &rarr;</h2>
                        <p>Manager Setting.</p>
                    </a>
                </Link>
                <Link href="/gamesence/playing" >
                    <a className="gamesence_allcource_card">
                        <h2>Playing &rarr;</h2>
                        <p>Admin Setting.</p>
                    </a>
                </Link>
            </div>

        </>
    )
}

