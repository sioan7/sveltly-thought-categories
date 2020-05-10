
export async function rememberChapter(name) {
    const contents = await fetch(encodeURI(`/chapters/${name}.json`));
    return contents.json();
}
