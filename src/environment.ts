export const API_URL = "localhost:4000/api";

export const getReqNamespace = (path?: string): string => {
    if (!path) return API_URL;

    if (path.charAt(0) !== "/") path = `/${path}`;

    return `${API_URL}${path}`;
};

export const buildReqUrl = <T>(path: string, params?: T) => {
    let url = getReqNamespace(path);

    if (params) {
        url += "?";

        for (const [key, value] of Object.entries(params)) {
            url += `${key}=${value}&`;
        }

        url = url.substring(0, url.length - 1);
    }

    return url;
};
