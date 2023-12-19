module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Natinalities', [{
      name:"Saudi",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Natinalities', null, {});
  }
};