const db = require("../models");
const Info = db.info;
const Op= db.sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.oname || !req.body.phone) {
        res.status(400).send({
            message: "content cannot be empty"
        })
    }

    const info = {
        oname: req.body.oname,
        phone: req.body.phone
    };

    Info.create(info).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred"
        });
    })
};

exports.findAll = (req, res) => {
    
    Info.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred."
        });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Info.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };