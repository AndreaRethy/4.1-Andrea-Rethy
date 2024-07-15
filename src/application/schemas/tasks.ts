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

export function validateTodo (task) {
    return taskSchema.safeParse(task)
}

export function validatePartialTodo (input) {
    return taskSchemaPartial.partial().safeParse(input)
}

// export default { validateTodo, validatePartialTodo }
// module.exports = { validateTodo, validatePartialTodo };