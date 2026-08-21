/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', "sans-serif"],
                serif: ['"Be Vietnam Pro"', "sans-serif"],
            },
            colors: {
                brand: {
                    bg: "#f1f5f9",
                    primary: "#ff4f18",
                    secondary: "#10b981",
                    accent: "#f59e0b",
                    dark: "#0f172a",
                    muted: "#64748b",
                },
            },
            backgroundImage: {
                "foodie-gradient": "linear-gradient(135deg, #ff4f18 0%, #f59e0b 100%)",
            },
            boxShadow: {
                warm: "0 12px 24px -10px rgba(255, 79, 24, 0.32)",
            },
        },
    },
    plugins: [],
};
