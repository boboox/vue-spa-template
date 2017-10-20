export function push(url, $router) {
    if (/^javas/.test(url) || !url) return;
    const useRouter = typeof url === 'object' || ($router && typeof url === 'string' && !/http/.test(url));
    if (useRouter) {
        $router.push(url);
    } else {
        window.location.href = url;
    }
}

export function replace(url, $router) {
    if (/^javas/.test(url) || !url) return;
    const useRouter = typeof url === 'object' || ($router && typeof url === 'string' && !/http/.test(url));
    if (useRouter) {
        $router.replace(url);
    } else {
        window.location.replace = url;
    }
}
