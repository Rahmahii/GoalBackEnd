module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cuntries', [{
      name:"Saudi Arabia",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cuntries', null, {});
  }
};