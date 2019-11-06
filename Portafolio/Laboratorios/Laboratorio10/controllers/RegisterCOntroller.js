const Register = require("../models/Register");

const insert = (req, res) => {
  let register = new Register(req.body);
  register.save(err => {
    if (err)
      return res.status(500).json({
        message: "Algo salio mal al tratar de insertar un register"
      });
    res.status(200).json({
      message: "Incersion de Register exitosa"
    });
  });
};

const update = (req, res) => {
  let register = req.body;

  if (!register._id) {
    return res.status(400).json({
      message: "El campo id es obligatorio"
    });
  }
  Register.update({ id: register._id }, register)
    .then(value => {
      res.status(200).json({
        message: "Operacion de modificar exitosa"
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "Algo salio mal en la operacion de modificar"
      });
    });
};

const deleteById = (req, res) => {
  let register = req.body;
  if (!register._id) {
    return res.status(400).json({
      message: "El campo id es obligatorio"
    });
  }
  Register.update({ id: register._id })
  .then(value => {
    res.status(200).json({
      message: "Operacion de eliminar exitosa"
    });
  })
  .catch(err => {
    res.status(500).json({
      message: "Algo salio mal en la operacion de eliminar"
    });
  });
};
  

const getAll = (req, res)=>{
    Register.find((err,registers)=>{
        if(err) return res.status(500).json({
            message: 'ALgo salio mal al seleccionar todos'
        })
        if(registers){
            res.status(200).json(registers)
        }
        else{
            res.status(404).json({
                message: 'NO hay registro'
            })
        }
    })
}

const getOneById = (req,res)=>{
    let id = req.params._id
    Register.findById(id,(err,registers)=>{
        if(err) return res.status(500).json({
            message: 'ALgo salio mal al seleccionar uno'
        })
        if(register){
            res.status(200).json(register)
        }else{
            res.status(404).json({
                message: 'No se encontro el registro solicitado '
            })
        }
    })

}
