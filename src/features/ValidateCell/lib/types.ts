export interface ValidationRule {
  validate: (value: unknown) => boolean;
  errorMessage: string;
  successMessage: string;
}
