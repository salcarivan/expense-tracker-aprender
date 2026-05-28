const mongoose =require ('moongose');

const expenseShema = new mongoose.Shema (
    {
      title:{
        type:String,
        required: [true, 'El título es obligatorio'],
        trim: true,
        maxlength: [100, 'El titulo no puede tener más de 100 caracteres']
      },
      amount:{
        type: Number,
        required: [true, 'El monto es obligatorio'],
        min: [0.01, 'El monto debe ser superior a 0'],
        max:[999999, 'El monto debe de ser inferior a 999999']
      },
      type:{
        type: String,
        required: [true, 'Debes inidicar en que moneda se guarda'],
        maxlength: [20, 'La moneda no puede tener más de 20 caracteres'],
        default: 'dolar'
      },
      category:{
        type: [String],
        required: [true, 'La categoría es obligatoria'],
        enum:{
            values: ['comida', 'transporte', 'ocio' , 'otros'],
            default: 'otros',
            message: 'Categoría inválida',
        }
      },
      date:{
        type: Date,
        required: [true, 'La fecha es obligatoria'],
        default: Date.now
      },
      notes:{
        type: String,
        trim: true,
        maxlength: [500, 'Las notas no pueden superar los 500 caracteres'],
      }
    },
    {
        timestamps: true
    }
);
const Expense = mongoose.model('Expense', expenseShema);

module.exprorts = Expense;