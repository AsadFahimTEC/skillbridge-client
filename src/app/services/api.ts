export const API_BASE = "http://localhost:5000/api";

export const fetcher = async (url: string, options: RequestInit = {}
) => {
    const res = await fetch(`${API_BASE}${url}`, {
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-store",
        ...options,
    });

    const data = await res.json();

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Something went wrong");
    }

    return data;
}

