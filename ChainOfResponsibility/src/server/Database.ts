import PermissionType from "./PermissionType";

interface DatabaseItem {
    email: String;
    password: String;
    permission: PermissionType;
}

const Database : DatabaseItem[] = [
    {
        email: "sandrovolski@gmail.com",
        password: "123",
        permission: PermissionType.ADMIN
    },
    {
        email: "sandroeduvolski@gmail.com",
        password: "123123",
        permission: PermissionType.ADMIN
    },
    {
        email: "aluno@unicentro.br",
        password: "123123",
        permission: PermissionType.USER
    }
];

export default Database;