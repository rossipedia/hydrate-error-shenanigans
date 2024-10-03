import { ClientLoaderFunction, Outlet, useRouteError } from '@remix-run/react';

export const loader = () => null;

export const clientLoader: ClientLoaderFunction = () => {
  console.log('Layout client loader');
  return null;
};

clientLoader.hydrate = true;

export default function Component() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold text-xl">ErrorBoundary in routes/_layout:</h2>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  );
}
