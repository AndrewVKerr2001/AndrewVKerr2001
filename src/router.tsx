import React, { lazy, LazyExoticComponent, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';

const lazyRoute = <T = any>(
  importFn: () => Promise<T>,
  componentName: keyof T | "default" = "default"
) => async () => {
  const module = await importFn();
  return { 
    default: module[componentName as keyof T] as React.ComponentType<any>,
  };
};

type LazyLoader = () => Promise<{ default: React.ComponentType<any> }>;

type PathType = ({
    label: string,
}) & ({
    path: string,
    index?: never,
} | {
    path: "/",
    index?: true,
} | {
    path?: never,
    index: true,
}) & ({
    lazy: LazyLoader,
});

export const Paths : readonly PathType[] = [
    {
        label: "Home",
        index: true,
        lazy: lazyRoute(()=>import("./router/home"), "default"),
    }
] as const;

type LazyPathType = PathType & { element : LazyExoticComponent<React.ComponentType<any>> };
const LazyPaths : readonly LazyPathType[] = 
    Paths.map<LazyPathType>((path)=>({
        ...path, 
        element: React.lazy(path.lazy)
    }));

export default function RootLayout() {
    return (
        <main>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                    {LazyPaths.map((path, index)=>
                        <Route
                            key={path.path ?? index} 
                            path={path.path} 
                            index={path.index} 
                            element={<path.element/>}
                        />
                    )}
                </Routes> 
            </Suspense>
        </main>
    );
}