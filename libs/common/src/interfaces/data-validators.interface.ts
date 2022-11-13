export interface IDataValidator {
  field: string,
  name: string,
  optional?: boolean,
  defaultValue?: any,
  validator: (arg: any) => boolean,
  errorMessage?: string,
}