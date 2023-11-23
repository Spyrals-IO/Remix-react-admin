// in /app/routes/admin.api.$.tsx
import { type ActionFunctionArgs, type LoaderFunctionArgs } from "@remix-run/node";

// handle read requests (getOne, getList, getMany, getManyReference)
export const loader = ({ request }: LoaderFunctionArgs) => {
    const apiUrl = getPostgrestUrlFromRequestUrl(request.url);

    return fetch(apiUrl, {
        headers: {
            prefer: request.headers.get("prefer") ?? "",
            accept: request.headers.get("accept") ?? "application/json",
            "Accept-Encoding": "",
            apikey: `${process.env.API_KEY}`,
            // Authorization: `Bearer ${process.env.API_KEY}`,
        },
    });
};

// handle write requests (create, update, delete, updateMany, deleteMany)
export const action = ({ request }: ActionFunctionArgs) => {
    const apiUrl = getPostgrestUrlFromRequestUrl(request.url);

    return fetch(apiUrl, {
        method: request.method,
        body: request.body,
        headers: {
            prefer: request.headers.get("prefer") ?? "",
            accept: request.headers.get("accept") ?? "application/json",
            "Accept-Encoding": "",
            apikey: `${process.env.API_KEY}`,
            //    Authorization: `Bearer ${process.env.API_KEY}`,
        },
    });
};

const ADMIN_PREFIX = "/admin/api";
const API_BASE_URL = 'http://localhost:3001';
const getPostgrestUrlFromRequestUrl = (url: string) => {
    const startOfRequest = url.indexOf(ADMIN_PREFIX);
    const query = url.substring(startOfRequest + ADMIN_PREFIX.length);
    return `${API_BASE_URL}/rest/v1${query}`;
};
