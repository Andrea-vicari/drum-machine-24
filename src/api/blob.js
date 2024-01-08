import { list } from '@vercel/blob';

export const config = {
  runtime: 'edge',
};

export default async function blobs(request) {
  const { blobs } = await list();
  console.log(blobs)
  return Response.json(blobs);
}
