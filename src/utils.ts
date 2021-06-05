import { validate } from 'class-validator';

export async function validateClass(object: any) {
  const errors = await validate(object);
  if (errors.length)
    return errors.reduce((prev, curr) => {
      return {
        ...prev,
        [curr.property]: Object.values(curr.constraints || {}),
      };
    }, {});
}
