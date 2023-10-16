Bun.serve({
    port: 3001,
    fetch(request) {
        return new Response("Hello from Bun!");
    },
});
