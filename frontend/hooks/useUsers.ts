import { useEffect, useState } from "react";

interface User {
    email: string;
    password: string;
    name: string;
}

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
        try {
            const response = await fetch("/mocks/users.json");
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Erro ao carregar os usuários:", error);
        } finally {
            setLoading(false);
        }
        };

        fetchUsers();
    }, []);

    return { users, loading };
};
