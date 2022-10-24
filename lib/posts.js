import {readdir, readFile} from 'fs/promises'

async function getProps(slug) {
    const data = await readFile(`content/posts/${slug}.json`,'utf8');
    return JSON.parse(data);
};

async function getSlugs(){
    const suffix = '.json'
    const files = await readdir('content/posts')
    return files.filter(file => file.endsWith('.json')).map(file => file.slice(0,-suffix.length));
}

export {
    getProps,
    getSlugs
}