export const validationConfig = {
    title: [
      {
        required: true,
        message: "Title is required",
      },
      {
        minLength: 3,
        message: "Title must be at least 3 characters long",
      },
      {
        maxLength: 10,
        message: "Title must be at most 10 characters long",
      },
    ],
    category: [
      {
        required: true,
        message: "Category is required",
      },
      {
        minLength: 3,
        message: "Category must be at least 3 characters long",
      },
      {
        maxLength: 10,
        message: "Category must be at most 10 characters long",
      },
    ],
    amount: [
      {
        required: true,
        message: "Amount is required",
      },
      {
        min: 1,
        message: "Amount must be at least 1",
      },
      {
        max: 10000,
        message: "Amount must be at most 10000",
      },
    ],
  };