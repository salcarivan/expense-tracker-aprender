const Expense =require ('../models/Expense');

// GET /api/expenses - Obtener todos
const getAllExpenses =async (req, res, next) => {
  try{
    const expenses = await Expense.find().sort({date: -1}); //Más recientes primero
    
  } catch(error){

  } 
};