app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error: Network unstable. Please try again.');
});
