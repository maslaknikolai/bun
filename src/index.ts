Bun.serve({
    port: process.env.PORT || 3001,
    fetch(request) {
        return new Response("Hello from Bun!");
    },
});
