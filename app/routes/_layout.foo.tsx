import { json } from '@remix-run/node';
import { ClientLoaderFunctionArgs } from '@remix-run/react';

export function loader() {
  throw json(
    { message: 'Error thrown in routes/_layout.foo' },
    { status: 500 }
  );
}

export async function clientLoader({ serverLoader }: ClientLoaderFunctionArgs) {
  await serverLoader();
  console.log('/foo client loader - **WHY IS THIS POSSIBLE**');
  return null;
}

clientLoader.hydrate = true;

export default function Index() {
  return <>Hello, Remix!</>;
}
