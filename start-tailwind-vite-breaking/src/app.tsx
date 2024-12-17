// @refresh reload
import { Suspense } from "solid-js";
import { FileRoutes } from "@solidjs/start/router";
import { Router } from "@solidjs/router";
import "./app.css";
import { MetaProvider, Title } from "@solidjs/meta";

export default function App() {
  return (
    <>
      <MetaProvider>
        <Title></Title>
        <Router
          root={(props) => (
            <>
              <div class="flex flex-col w-screen h-screen ">
                <Suspense>{props.children}</Suspense>
              </div>
            </>
          )}
        >
          <FileRoutes />
        </Router>
      </MetaProvider>
    </>
  );
}
