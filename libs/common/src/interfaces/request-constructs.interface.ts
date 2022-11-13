// interfaces for http request related things like request headers and etc, domain logic and etc.

export interface IUploadFile {
  error: boolean;
  filename?: string;
  image_path?: string;
  message?: string;
}

export interface IStoreImage {
  error: boolean;
  message?: string;
  filedata: IUploadFile;
  result?: {
    public_id: string;
    secure_url: string;
  };
}