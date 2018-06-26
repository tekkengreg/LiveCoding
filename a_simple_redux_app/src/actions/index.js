export const incrementCounter = (step, isIncrement) => (
    {
        type: isIncrement ? "INCREMENT" : "DECREMENT",
        step
    }
)
