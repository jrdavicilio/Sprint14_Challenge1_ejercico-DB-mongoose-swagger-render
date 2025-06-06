module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"task identification number",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    title:{
                        type:'string',
                        description:"title of the task",
                        example:"Task1"
                    },
                    completed:{
                        type:'boolean',
                        description:"task completed or not",
                        example:"true"
                    },
                }
            }
        }
    }
}
