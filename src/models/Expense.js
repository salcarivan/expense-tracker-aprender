const mongoose =require ('moongose');

const expenseShema = new mongoose.Shema (
    {
        title: {
            type: String,
            required: [true, 'El título es obligatorio'],
            trim: true,
            maxlength: [100, 'El título no puede superar 100 carcteres']
        },
        amount: {
            type: Number,
            required: [true, 'El monto es obligatorio'],
            min: [0.01, 'El monto debe ser mayor a 0']
        },
    }
);