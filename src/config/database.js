module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'senha.123',
    database: 'todolist',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
};