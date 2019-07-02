const mongoose = require('mongoose');

const PostAuthorSchema = new mongoose.Schema({
                                            name: {
                                                    type: String,
                                                    required: 'Title Required',
                                                    minlength: 3,
                                                    maxlength: 150
                                            },
                                            address: {
                                                    type: String,
                                                    required: 'Body Required',
                                                    minlength: 3,
                                                    maxlength: 500
                                                }

                                            });

module.exports = mongoose.model('Post', PostAuthorSchema);