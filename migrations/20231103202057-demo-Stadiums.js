module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Stadiums', [{
        name: "Heroes",
          phone: "6704864",
          email: "Heroes@gmail.com",
          length: 100,
          width: 20,
          latitude:21.54150277289287,
          longitude:39.20919787990302,
          workHours: 9-8,
          neighborhood:"Alrehab",
          street:"Alaliah",
          GoogleMapLink:"https://www.google.com/maps/place/%D9%86%D9%8A%D8%B3%D8%A7%D9%86+-+%D8%A8%D8%AA%D8%B1%D9%88%D9%85%D9%8A%D9%86%E2%80%AD/@21.5513562,39.1768531,17z/data=!3m1!4b1!4m6!3m5!1s0x15c3d017c7f0d05f:0x5fc17d0c7f29e546!8m2!3d21.5513512!4d39.1742835!16s%2Fg%2F11c6t6kylc?authuser=1&entry=ttu",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Braves",
          phone: "6704864",
          email: "Brave@gmail.com",
          length: 100,
          width: 20,
          latitude:21.55040036601888, 
          longitude:39.21848154348364,
          workHours: 9-8,
          neighborhood:"Alnaseem",
          street:"sultan",
          GoogleMapLink:"https://www.google.com/maps/place/%D9%85%D8%B7%D8%B9%D9%85+%D9%88%D9%83%D8%A7%D9%81%D9%8A+%D8%A2%D8%BA%D8%A7%D9%81%D9%8A%E2%80%AD/@21.5547892,39.1458355,17z/data=!3m1!4b1!4m6!3m5!1s0x15c3dab1f096668b:0x23fe72adfd83514c!8m2!3d21.5547842!4d39.1432659!16s%2Fg%2F11b6b5k500?authuser=1&entry=ttu",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    
    
    ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Stadiums', null, {});
    }
  };