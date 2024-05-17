const reviewSchema = require('./../models/reviewModel');
const ApiFeatures = require('./../utils/ApiFeatures');


exports.getAllReviews = async (req, res) => {
    try{
        const features = new ApiFeatures(reviewSchema.find(), req.query);
        let reviews = await features.query;

        res.status(200).json({
            status: 'success',
            length: reviews.length,
            data: {
                reviews
            }
        });
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }
    
}

exports.getReview = async (req, res) => {
    try{
        const review = await reviewSchema.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                review
            }
        });
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }
}

exports.createReview = async (req, res) => {
    try{
        updatedBody = {...req.body, dateTime: new Date()};
        const review = await reviewSchema.create(req.body).sort();

        res.status(201).json({
            status: 'success',
            data: {
                review
            }
        })
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
}

exports.updateReview = async (req, res) => {
    try{
        const updatedReview = await reviewSchema.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

        res.status(200).json({
            status: "success",
            data: {
                review: updatedReview
            }
        });
    }catch(err){
        res.status(404).json({
            status:"fail",
            message: err.message
        });
    }
}

exports.deleteReview = async (req, res) => {
    try{
        await reviewSchema.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            data: null
        });
    }catch(err){
        res.status(404).json({
            status:"fail",
            message: err.message
        });
    }
}

