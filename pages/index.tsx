import Link from 'next/link';

interface HomeProps {

}

const Home = ({} : HomeProps) => {

    return (
        <>
            <p>Hey</p>
            <Link href="/sell">
                <a>Sell</a>
            </Link>
        </>
    )
}

export default Home;