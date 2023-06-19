# Run a model from Node.js

This is a simple example on how to run a model on Replicate within Node.js.

## Setup

1. Install [Node.js](https://nodejs.org/en/download/)
2. Create a project directory and `cd` into it
3. install the `replicate` package from npm:
4. authenticate with Replicate:

  ```bash
    npm install replicate
    export REPLICATE_API_TOKEN=<your token>
  ```

5. Run predictions: update the `index.js` file with your model configuration and run:

  ```bash
    node index.js
  ```
