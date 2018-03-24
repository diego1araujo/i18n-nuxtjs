module.exports = {
    head: {
        title: "",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "Nuxt.js project" }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
        ]
    },
    loading: { color: "cyan" },
    router: {
        middleware: "i18n"
    },
    plugins: ["~/plugins/i18n.js"],
    generate: {
        routes: [
            "/",
            "/about",
            "/products",
            "/pt",
            "/pt/about",
            "/pt/products",
        ]
    }
};
