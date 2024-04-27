import { Request } from 'express';

export interface IRequestToken extends Request {
  uid: string;
  name: string;
}
