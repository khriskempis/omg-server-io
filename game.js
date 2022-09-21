function game(io) {
  // io.use(authHandler);
  io.on('connection', (socket) => {
    // new Connection(io, socket);
    console.log('game connected')

    socket.on('startGame', () => {
      console.log('game started');
    });
    socket.emit('gameState', (value) => {
      console.log(value);
    });

  });
}

module.exports = game;