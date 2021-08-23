module.exports = (sequelize, DataTypes) => {
    const TaxiDriver = sequelize.define('TaxiDriver', {
        FirstName: DataTypes.STRING,
        LastName: DataTypes.STRING,
        birth_date: DataTypes.DATE,
        driving_licence_number: DataTypes.INTEGER,
        expiry_date: DataTypes.DATE
    })

    TaxiDriver.prototype.comparePassword = function (password) {
        if (password == this.password) {
            return true
        }
        return false
    }

    TaxiDriver.associate = function (models) { }
    
    return TaxiDriver;
}