import Navigation from './Navigation';
import { Fragment } from 'react'
import Head from 'next/head'

const Header = (props) => {
    return (
        <Fragment>
            <Head>
                <title>{props.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navigation />
        </Fragment>
    );
}
export default Header;