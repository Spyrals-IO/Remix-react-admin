// in app/routes/admin.$.tsx
import { Admin, Resource, ListGuesser, fetchUtils } from "react-admin";
import postgrestRestProvider, { defaultPrimaryKeys, defaultSchema } from '@raphiniert/ra-data-postgrest';
import styles from "~/styles/admin.css";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

// in app/routes/admin.$.tsx
const dataProvider = postgrestRestProvider({
    apiUrl: 'http://localhost:3001',
    httpClient: fetchUtils.fetchJson,
    defaultListOp: 'eq',
    primaryKeys: defaultPrimaryKeys,
    schema: defaultSchema
});


export default function App() {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="posts" list={ListGuesser} />
            <Resource name="comments" list={ListGuesser} />
            <Resource name="users" list={ListGuesser} />
        </Admin>
    );
}