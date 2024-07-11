const z = require('zod');

const taskSchema = z.object({
    task: z.string({
        invalid_type_error: 'Task must be a string',
        required_error: 'Task is required'
    })
});

const taskSchemaPartial = z.object({
    task: z.string({
        invalid_type_error: 'Task must be a string',
        required_error: 'Task is required'
    }),
    status: z.string({
        invalid_type_error: 'Task must be a string',
        required_error: 'Task is required'
    })
});

function validateTodo (task) {
    return taskSchema.safeParse(task)
}

function validatePartialTodo (input) {
    return taskSchemaPartial.partial().safeParse(input)
}

module.exports = { validateTodo, validatePartialTodo }