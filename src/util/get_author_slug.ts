function getAuthorSlugSingle (name: string) {
    // Convert to lowercase and replace spaces with hyphens
    return name.toLowerCase().replace(/\s+/g, '-');
}

function getAuthorSlugAll (names: string[]) {
    return names.map(name => getAuthorSlugSingle(name));
}

export  {getAuthorSlugSingle, getAuthorSlugAll};