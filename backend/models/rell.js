const Funcionario = require("./Funcionario");
const Material = require("./Material");
const Movimento = require("./Movimento");
const Obra = require("./obra");

Obra.hasMany(Material,{
    foreignKey: 'idobra',
    as: 'obramaterial',
    onDelete: 'CASCADE'
})
Material.belongsTo(Obra, {
    foreignKey: 'idobra',
    as: 'materialobra'
})

Material.hasMany(Movimento,{
    foreignKey: 'idmaterial',
    as: 'materialmovimento',
    onDelete: 'CASCADE'
})
Movimento.belongsTo(Material, {
    foreignKey: 'idmaterial',
    as: 'movimentomaterial'
})

module.exports = {Funcionario, Material, Movimento, Obra}