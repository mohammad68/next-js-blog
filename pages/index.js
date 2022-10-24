import Head from "next/head";
import Link from "next/link";
import { getSlugs } from "../lib/posts";


export async function getStaticProps(){
    const slugs = await getSlugs();
    return {
        props: {
           slugs
        }
    }
}

function HomePage(props){
    const {slugs} = props
    console.log('[HomePage] render');
    return(
        <>
        <Head>
            <title>Home</title>
            <meta name="description" value="This is my blog"/>
        </Head>
        <main>
            <h1>My blog</h1>
            <ul>
                {slugs.map(slug => 
                    <li key={slug.title}>
                        <Link key={slug.title} href={`/posts/${slug}`}>
                            <a>{slug}</a>
                        </Link>
                    </li>
                    )
                } 
            </ul>
        </main>
        </>
    );
}

export default HomePage;