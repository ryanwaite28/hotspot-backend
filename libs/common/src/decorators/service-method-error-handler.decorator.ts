import { HttpStatusCode, ServiceMethodResults } from "@common/common";



export function CatchServiceError(options?: {
  throwError?: boolean,
  errorMessage?: string,
}) {
  return function (
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const childFunction = descriptor.value;
    
    descriptor.value = (...args: any[]) => {
      // console.log({ target, key, descriptor, childFunction, args });
      try {
        // @ts-ignore
        return childFunction.apply(this, args);
      } catch (error) {
        console.error(options?.errorMessage || `CatchServiceError:`, error);

        if (options?.throwError) {
          throw error;
        }

        const serviceMethodResults: ServiceMethodResults = {
          status: HttpStatusCode.INTERNAL_SERVER_ERROR,
          error: true,
          info: {
            message: `Error in service method; something went wrong...`,
            error,
            data: {
              errorMessage: options?.errorMessage,
              target,
              key
            }
          }
        };
        return serviceMethodResults; 
      }
    };

    return descriptor;
  }
}

export function CatchAsyncServiceError(options?: {
  throwError?: boolean,
  errorMessage?: string,
}) {
  return function (
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const childFunction = descriptor.value;
    
    descriptor.value = async (...args: any[]) => {
      // console.log({ target, key, descriptor, childFunction, args });
      try {
        // @ts-ignore
        const value = await childFunction.apply(this, args);
        return value;
      } catch (error) {
        console.error(options?.errorMessage || `CatchAsyncServiceError:`, error);

        if (options?.throwError) {
          throw error;
        }

        const serviceMethodResults: ServiceMethodResults = {
          status: HttpStatusCode.INTERNAL_SERVER_ERROR,
          error: true,
          info: {
            message: `Error in service method; something went wrong...`,
            error,
            data: {
              errorMessage: options?.errorMessage,
              target,
              key
            }
          }
        };
        return serviceMethodResults; 
      }
    };

    return descriptor;
  }
}