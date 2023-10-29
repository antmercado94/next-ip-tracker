export class UserInputError extends Error {
  constructor(message = "IP Address or Domain Not Found") {
    super(message);
    this.name = "UserInputError";
  }
}

export class NetworkError extends Error {
  constructor(message = "Something Went Wrong, Please Try Again") {
    super(message);
    this.name = "NetworkError";
  }
}

export class DefaultError extends Error {
  constructor(message = "Could Not Get Your Location Data") {
    super(message);
    this.name = "DefaultError";
  }
}
