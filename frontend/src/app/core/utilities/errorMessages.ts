export type ErrorType = "minlength" | "maxlength" | "required" | "email";

const errorMessages: Record<ErrorType, (criteria: { [key: string]: number | string }) => string> = {
  minlength: (criteria) => `You must provide more than ${criteria["requiredLength"]} characters.`,
  maxlength: (criteria) => `You must provide less than ${criteria["requiredLength"]} characters.`,
  required: () => `This field is required.`,
  email: () => `You must provide valid email.`,
};

export const getErrorMessage = (
  errorType: ErrorType,
  criteriaToMeet: { [key: string]: number | string },
): string => {
  const messageGenerator = errorMessages[errorType];
  return messageGenerator(criteriaToMeet);
};
