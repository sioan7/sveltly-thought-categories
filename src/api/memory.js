
export async function rememberChapter(name) {
    const contents = await fetch(encodeURI(`/chapters/${name}.json`));
    return contents.json();
}

export function rememberQuotes() {
    return new Promise((resolve) => {
        resolve([
            {
                author: 'The Ant King',
                text: 'Your unconcious bias against certain patterns gives me insight into the otherwise unlimited options you have.',
            },
        ]);
    });
}

export function rememberImages() {
    return new Promise((resolve) => {
        resolve([
            {
                src: '/img/DSCF1110.jpg',
                alt: 'Purple rain over Amsterdam.',
            },
            {
                src: '/img/DSCF1286.jpg',
                alt: 'Overreaching sun during sunset.',
            },
        ]);
    });
}

export function rememberMusic() {
    return new Promise((resolve) => {
        resolve([
            {

            },
        ]);
    });
}

export function rememberVideo() {
    return new Promise((resolve) => {
        resolve([
            {
                
            },
        ]);
    });
}
