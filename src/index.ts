Bun.serve({
    port: 80,
    fetch(request) {
        return new Response("Hello from Bun!");
    },
});
