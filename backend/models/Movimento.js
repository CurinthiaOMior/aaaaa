const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Movimento = db.define('movimento',{
    idMovimento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idmaterial: {
        type: DataTypes.INTEGER,
        references: {
            model: 'materiais',
            key: 'idMaterial'
        }
    },
    tipo: {
        type: DataTypes.ENUM('entrada', 'saida'),
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'movimentos'
})
module.exports = Movimento