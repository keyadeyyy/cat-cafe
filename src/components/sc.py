import numpy as np

def step_function(x):  # Unipolar
    return 1 if x >= 0 else 0

def bipolar_sign(x):  # Bipolar
    return 1 if x >= 0 else -1

def train_perceptron(X, d, activation_function, learning_rate=0.1, epochs=100):
    num_samples, num_features = X.shape
    weights = np.random.rand(num_features)  # Includes bias
    errors = []
    
    for epoch in range(epochs):
        total_error = 0
        epoch_details = {"epoch": epoch+1, "weights": weights.copy(), "errors": [], "sample_errors": []}
        
        for i in range(num_samples):
            net_input = np.dot(weights, X[i])
            output = activation_function(net_input)
            error = d[i] - output
            weights += learning_rate * error * X[i]
            total_error += error ** 2
            epoch_details["sample_errors"].append({
                "index": i, 
                "net_input": net_input, 
                "output": output, 
                "error": error
            })
        
        epoch_details["errors"].append(total_error)
        errors.append(total_error)
        
        # Print detailed information for each epoch
        print(f"\nEpoch {epoch+1}:")
        print(f" Weights: {weights}")
        print(f" Total Error: {total_error}")
        print(f" Sample-wise Errors:")
        for sample_error in epoch_details["sample_errors"]:
            print(f"  Sample {sample_error['index']}: Net Input = {sample_error['net_input']}, Output = {sample_error['output']}, Error = {sample_error['error']}")
        
        if total_error == 0:
            break
            
    return weights, errors

# Training data definition
# AND gate training data
X_and = np.array([[0, 0, 1], [0, 1, 1], [1, 0, 1], [1, 1, 1]])
d_and_unipolar = np.array([0, 0, 0, 1])
d_and_bipolar = np.array([-1, -1, -1, 1])

# OR gate training data
X_or = np.array([[0, 0, 1], [0, 1, 1], [1, 0, 1], [1, 1, 1]])
d_or_unipolar = np.array([0, 1, 1, 1])
d_or_bipolar = np.array([-1, 1, 1, 1])

# NOT gate training data
X_not = np.array([[0, 1], [1, 1]])  # For binary input and bias
d_not_unipolar = np.array([1, 0])
d_not_bipolar = np.array([1, -1])

# Training
print("Training AND Gate (Unipolar):")
weights_and_unipolar, errors_and_unipolar = train_perceptron(X_and, d_and_unipolar, step_function)

print("Training AND Gate (Bipolar):")
weights_and_bipolar, errors_and_bipolar = train_perceptron(X_and, d_and_bipolar, bipolar_sign)

print("\nTraining OR Gate (Unipolar):")
weights_or_unipolar, errors_or_unipolar = train_perceptron(X_or, d_or_unipolar, step_function)

print("Training OR Gate (Bipolar):")
weights_or_bipolar, errors_or_bipolar = train_perceptron(X_or, d_or_bipolar, bipolar_sign)

print("\nTraining NOT Gate (Unipolar):")
weights_not_unipolar, errors_not_unipolar = train_perceptron(X_not, d_not_unipolar, step_function)

print("Training NOT Gate (Bipolar):")
weights_not_bipolar, errors_not_bipolar = train_perceptron(X_not, d_not_bipolar, bipolar_sign)
