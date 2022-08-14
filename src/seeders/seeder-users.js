module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            password: "khoa1905",
            email: 'nguyenanhkhoa19051999@gmail.com',
            first_name: 'Nguyen',
            last_name: 'Anh Khoa',
            address: "Ho Chi Minh",
            gender: 1,
            role_type: "ROLE",
            role_key: "R1",
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};