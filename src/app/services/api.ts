export const API_BASE = "http://localhost:5000/api";

export const fetcher = async(url: string, options?: RequestInit) => {
    const res = await fetch(`${API_BASE}${url}`, {
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        ...options,
    });

    if(!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Something went wrong");
}

return res.json();
}

