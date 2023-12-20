import mongoose from 'mongoose'

const GenericSchema = new mongoose.Schema({}, { strict: false })
const GenericModel = mongoose.model('Generic', GenericSchema)

export default GenericModel
