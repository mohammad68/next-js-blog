import Head from "next/head";
function AboutPage(){
    console.log('[AboutPage] render');
    return(
    <>
            <Head>
            <title>About</title>
            <meta name="description" value="This is my blog"/>
        </Head>
        <main>
        <div>   
            <h1>AboutPage</h1>
        </div>
        </main>
    </>
        
    )
};

export default AboutPage;