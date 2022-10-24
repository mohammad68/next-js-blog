import Head from "next/head";
import { getProps, getSlugs } from "../../lib/posts";


export async function getStaticPaths(){

    const slugs = await getSlugs();
    const allParams = slugs.map(slug => ({params:{slug}}))

    return {
        paths:allParams,
        fallback:false,
    }    
}

export async function getStaticProps(context){
    
    const {slug} = context.params
    const data = await getProps(slug);

    return {
        props:{
            data
        }
    }
};

function PostPage({data}){
    console.log('[FistPostPage] render',data);
    const {title, body} =  data;

    return(
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" value="This is my blog"/>
        </Head>
        <main>
        <div>   
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
        </main>
    </> 
    )
};

export default PostPage;