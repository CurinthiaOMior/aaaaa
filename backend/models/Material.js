const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Material = db.define('material',{
    idMaterial: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idobra: {
    type: DataTypes.INTEGER,
        references:{
            model: 'obras',
            key: 'idObra'
        }
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    codlote: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'materiais'
})
module.exports = Material