export const API_URL = "localhost:4000/api";

export const getReqNamespace = (path?: string): string => {
    if (!path) return API_URL;

    if (path.charAt(0) !== "/") path = `/${path}`;

    return `${API_URL}${path}`;
};
