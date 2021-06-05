import Jwt from 'jsonwebtoken';

export const JwtService = {
  decodeToken: async <T>(token: string) => {
    try {
      return (Jwt.verify(token, 'secret') as unknown) as T;
    } catch (error) {
      return null;
    }
  },
  generateToken: async (payload: any) => {
    try {
      return Jwt.sign(payload, 'secret');
    } catch (error) {
      return null;
    }
  },
};
