const { getAllSalesYearController } = require("../../Controllers/get/getAllSalesYearController");


const getAllSalesYear = async (req, res) => {
    try {
        const response = await getAllSalesYearController();
        console.log("esta es el response", response)
        return res.status(200).json(response)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {getAllSalesYear}