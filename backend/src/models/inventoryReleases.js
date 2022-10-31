import mongoose from 'mongoose';

const releaseStocksSchema = new mongoose.Schema(
    {
        stockId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        departmentName: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        date: {
            type: Date
        },
        requestedEmployee: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Staff',
            required: true
        },
        requestStatus: {
            type: String,
            enum: ['APPROVED', 'REJECTED', 'HOLD'],
            default: 'HOLD'
        }
    },
    { timestamps: true }
);

const releaseStocksModel = mongoose.model('StockReleases', releaseStocksSchema);
export default releaseStocksModel;
