const handlerPromise = import('../server/src/index.js');

export default async function handler(req: any, res: any) {
  const { handler } = await handlerPromise;
  return handler(req, res);
}
