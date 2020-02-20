module.exports = (sequelize, Sequelize) => {
    const Info = sequelize.define("info", {
      
      oname: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      }
    });
  
    return Info;
  };