const Expense =require ('../models/Expense');

// GET /api/expenses - Obtener todos
const getAllExpenses =async (req, res, next) => {
  try{
    const expenses = await Expense.find().sort({date: -1}); //Más recientes primero
    res.status(200).json({
        success: true,
        count: expenses.length,
        data: expenses
    });
  } catch(error){
    next(error); // Pasa el error al middleware de manejo de errores
  } 
};

// GET /api/expenses/:id - Obtener uno por ID
const getExpenseById = async (req, res, next) => {
    try {
        const expense = await Expense.findById(req.params.id);

        if (!expense){
            return res.status(404).json ({
                success:false,
                message: 'gasto no encontrado'
            });
        }

        res.status(200).json({
            success: true,
            data: expense
        });
    } catch (error) {
        next(error);
    }
};
// POST /api/expenses - Crear uno nuevo
const createExpense = async (req, res, next) => {
  try {
    const expense = await Expense.create(req.body);
    res.status(201).json({
        success: true,
        data: expense
    });
  } catch (error) {
    next(error);
  }  
};


// PUT /api/expenses/:id — Actualizar
const updateExpense = async (req,res, next) => {
    try {
        const expense = await Expense.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true, // Devuelve el documento actualizado
                runValidators: true, // Ejecuta las validaciones del esquema
            }
        );

        if(!expense) {
            return res.status(404).json({
                success: false,
                message: 'Gasto no encontrado'
            });
        }

        res.status(200).json({
            success: true,
            data: expense
        });
    } catch (error) {
        next(error)
    }
};

// DELETE /api/expenses/:id - Eliminar
const deleteExpense = async (req, res, next) => {
    try {
        const expense = await Expense.findById(req.params.id);

        if(!expense) {
            return res.status(404).json({
                success: false,
                message: 'Gasto no encontrado'
            });
        }

        await expense.remove();

        res.status(200).json({
            success: true,
            message: 'Gasto eliminado correctamente'
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllExpenses,
    getExpenseById,
    createExpense,
    updateExpense,
    deleteExpense
};