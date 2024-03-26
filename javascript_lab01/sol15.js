function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

try {
    const result = divideNumbers(10, 0);
    console.log("Result of division:", result);
} catch (error) {
    if (error instanceof Error) {
        console.log("An error occurred:", error.message);
    } else {
        console.log("An unexpected error occurred:", error);
    }
}
